import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as classAction from "src/actions/classActions";
import * as assignmentAction from "src/actions/assignmentActions";
import { SliderPicker } from "react-color";
import { Button } from "@chakra-ui/react";
import CalendarContext from "src/contexts/CalendarContext";
import LoadContext from "src/contexts/LoadContext";

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...classAction, ...assignmentAction }, dispatch)
});

const ClassModal = ({ actions, data, toggleModal, setSelectedClass }) => {
  const [color, setColor] = useState(data?.color || "#000");
  const [name, setName] = useState(data?.name || "");
  const [error, setError] = useState(false);
  const { updateCalendar } = useContext(CalendarContext);
  const { setLoading } = useContext(LoadContext);

  useEffect(() => {
    document.getElementById("class-name").focus();
  }, []);

  const onCancel = () => {
    setColor("#000");
    toggleModal(x => !x);
    if (data) setSelectedClass(null);
  };

  const onSave = async () => {
    setLoading(true);
    if (name === "") {
      setError(true);
      return;
    }

    let payload = {
      name,
      color,
      userId: JSON.parse(sessionStorage.getItem("token"))
    };

    if (data) {
      payload = {
        ...payload,
        _id: data._id
      };
      await actions.updateClass(payload);
      setSelectedClass(null);
    } else {
      await actions.createClass(payload);
    }
    toggleModal(x => !x);
    setLoading(false);
  };

  const onDelete = async () => {
    setLoading(true);
    await actions.deleteClass(data._id);
    await actions.deleteAssignmentsByClass(data._id);
    if (data) setSelectedClass(null);
    updateCalendar([]);
    toggleModal(x => !x);
    setLoading(false);
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40 z-20">
      <div className="absolute w-5/6 sm:w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 bg-white rounded-md p-8">
        <h2>{data ? "Update Class" : "Add a Class"}</h2>
        {error && <p className="text-red-700 mb-1">Please enter a class name.</p>}
        <input
          id="class-name"
          type="text"
          className="form-input form-control"
          placeholder="Class Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <h5>Select a Color</h5>
        <SliderPicker
          className="w-full"
          color={color}
          onChange={e => setColor(e.hex)}
        />
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

ClassModal.propTypes = {
  data: PropTypes.object,
  toggleModal: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  setSelectedClass: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(ClassModal)
