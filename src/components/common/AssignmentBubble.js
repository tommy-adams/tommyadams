import React, { useState, useContext, useCallback } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MdAssignment } from "react-icons/md";
import AssignmentContext from "src/contexts/AssignmentContext";
import AssignmentModal from "./AssignmentModal";
import clsx from "clsx";

const mapStateToProps = state => {
  const { sched: { schedule } } = state;
  return { classes: schedule };
};

const AssignmentBubble = ({ assignment, classes }) => {
  const [course] = classes.filter(c => assignment.classId === c._id);
  const [modalOpen, setModalOpen] = useState(false);
  const { setSelectedAssignment } = useContext(AssignmentContext);

  const selectAssignment = useCallback(id => {
    setModalOpen(x => !x);
    setSelectedAssignment(id);
  }, [setModalOpen, setSelectedAssignment]);
  
  if (!course) return <div />;

  return (
    <>
      {modalOpen && <AssignmentModal data={assignment} toggleModal={setModalOpen} />}
      <div
        className={clsx("w-full rounded-md bg-white border flex items-center space-x-2 p-1 cursor-pointer mb-3 sm:mb-1", {
          "line-through": assignment.complete
        })}
        style={{ borderColor: course.color }}
        onClick={() => selectAssignment(assignment._id)}
      >
        <div className="w-8 flex justify-center">
          <MdAssignment style={{ color: course.color }} />
        </div>
        <p className="text-md sm:text-sm" style={{ color: course.color }}>{assignment.title}</p>
      </div>
    </>
  );
};

AssignmentBubble.propTypes = {
  assignment: PropTypes.object.isRequired,
  classes: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(AssignmentBubble);