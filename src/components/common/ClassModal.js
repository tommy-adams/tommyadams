import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as classAction from "src/actions/classActions";
import { SliderPicker } from "react-color";
import { Button } from "@chakra-ui/react";

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...classAction }, dispatch)
});

const ClassModal = ({ actions, data, toggleModal, toggleSelectedClass }) => {
  const [color, setColor] = useState(data?.color || "#000");
  const [name, setName] = useState(data?.name || "");
  const [error, setError] = useState(false);

  useEffect(() => {
    document.getElementById("class-name").focus();
  }, []);

  const onCancel = () => {
    setColor("#000");
    toggleModal(x => !x);
    if (data) toggleSelectedClass(null);
  };

  const onSave = async () => {
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
      toggleSelectedClass(null);
    } else {
      await actions.createClass(payload);
    }
    toggleModal(x => !x);
  };

  const onDelete = async () => {
    await actions.deleteClass(data._id);
    if (data) toggleSelectedClass(null);
    toggleModal(x => !x);
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40 z-20">
      <div className="absolute w-5/6 sm:w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 bg-white rounded-md p-8">
        <h2>{data ? "Update a Class" : "Add a Class"}</h2>
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
  toggleSelectedClass: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(null, mapDispatchToProps)(ClassModal)
