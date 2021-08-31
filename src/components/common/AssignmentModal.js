import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import clsx from "clsx";
import * as assignmentAction from "src/actions/assignmentActions";
import { Button, Select } from "@chakra-ui/react";
import AssignmentContext from "src/contexts/AssignmentContext";

const mapStateToProps = state => {
  const { sched: { schedule } } = state;
  return { classes: schedule };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...assignmentAction }, dispatch)
});

const AssignmentModal = ({ actions, classes, data, toggleModal }) => {
  const [title, setTitle] = useState(data?.title || "");
  const [description, setDescription] = useState(data?.description || "");
  const [classId, setClassId] = useState(data?.classId || "");
  const [date, setDate] = useState(new Date(data?.due) || new Date());
  const [error, setError] = useState(false);
  const { setSelectedAssignment } = useContext(AssignmentContext);

  const onCancel = () => {
    setTitle("");
    setDescription("");
    setClassId("");
    setDate(new Date());
    setSelectedAssignment({});
    toggleModal(x => !x);
  };

  const onSave = async () => {
    if (title === "" || classId === "" || date === null) {
      setError(true);
      return;
    }

    const userId = JSON.parse(sessionStorage.getItem("token"));

    let payload = {
      title,
      description,
      classId,
      userId,
      due: date
    };

    if (data) {
      payload = {
        ...payload,
        _id: data._id
      };
      await actions.updateAssignment(payload);
    } else {
      await actions.createAssignment(payload);
    }
    setSelectedAssignment({});
    toggleModal(x => !x);
  };

  const onDelete = async () => {
    await actions.deleteAssignment(data._id);
    setSelectedAssignment({});
    toggleModal(x => !x);
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40 z-20">
      <div className="absolute w-5/6 sm:w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 bg-white rounded-md p-8">
        <h2 className="mb-4">Add an Assignment</h2>
        {error && <p className="text-red-700 mb-1">Please fill in all fields (except description).</p>}
        <input
          id="title"
          type="text"
          className="form-input form-control"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          id="description"
          type="text"
          className="form-input form-control"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <div className={clsx("flex sm:space-x-4", {
          "flex-wrap space-y-6": window.innerWidth <= 640
        })}>
          <Select
            placeholder="Select Class"
            colorScheme="purple"
            value={classId}
            onChange={e => setClassId(e.target.value)}
          >
            {classes.map(c =>
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            )}
          </Select>
          <input
            id="date"
            type="date"
            className="form-input form-control"
            date={date}
            onChange={e => setDate(e.target.value)}
          />
        </div>
        <div className="flex justify-end mt-4 space-x-4">
          <Button variant="outline" colorScheme="gray" onClick={onCancel}>
            CANCEL
          </Button>
          {data && (
            <Button colorScheme="red" onClick={onDelete}>
              DELETE
            </Button>
          )}
          <Button colorScheme="purple" onClick={onSave}>
            SAVE
          </Button>
        </div>
      </div>
    </div>
  );
};

AssignmentModal.propTypes = {
  data: PropTypes.object,
  toggleModal: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  classes: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentModal)
