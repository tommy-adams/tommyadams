import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import clsx from "clsx";
import * as assignmentAction from "src/actions/assignmentActions";
import { Button, Select } from "@chakra-ui/react";
import AssignmentContext from "src/contexts/AssignmentContext";
import LoadContext from "src/contexts/LoadContext";

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
  const { setLoading } = useContext(LoadContext);
  const userId = JSON.parse(sessionStorage.getItem("token"));

  useEffect(() => {
    document.getElementById("title").focus();
  }, []);

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
    setLoading(true);
    let payload = {
      title,
      description,
      classId,
      userId,
      due: date,
      complete: false
    };

    if (data) {
      payload = {
        ...payload,
        _id: data._id,
        complete: data.complete
      };
      await actions.updateAssignment(payload);
    } else {
      await actions.createAssignment(payload);
    }
    setSelectedAssignment({});
    toggleModal(x => !x);
    setLoading(false);
  };

  const onDelete = async () => {
    setLoading(true);
    await actions.deleteAssignment(data._id);
    setSelectedAssignment({});
    toggleModal(x => !x);
    setLoading(false);
  };

  const onComplete = async () => {
    setLoading(true);
    let payload = {
      _id: data._id,
      title,
      description,
      classId,
      userId,
      due: date,
      complete: !data.complete
    };
    await actions.updateAssignment(payload);
    setSelectedAssignment({});
    toggleModal(x => !x);
    setLoading(false);
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40 z-20">
      <div className="absolute w-5/6 sm:w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 bg-white rounded-md p-8">
        <h2 className="mb-4">{data ? "Update Assignment" : "Add an Assignment"}</h2>
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
          <div className="flex space-x-4 w-full items-center">
            {window.innerWidth <= 640 && <h6>Date</h6>}
            <input
              id="date"
              type="date"
              className="form-input focus:ring focus:ring-purple-300 border border-gray-200 rounded-md w-full"
              date={date}
              onChange={e => setDate(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-end mt-4 space-x-2 sm:space-x-4">
          <Button variant="outline" colorScheme="gray" onClick={onCancel} className="mb-2 sm:mb-0">
            CANCEL
          </Button>
          {data && (
            <>
              <Button colorScheme="red" onClick={onDelete}>
                DELETE
              </Button>
              <Button colorScheme="purple" variant="outline" onClick={onComplete}>
                {data.complete ? "MARK INCOMPLETE" : "MARK COMPLETE"}
              </Button>
            </>
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
