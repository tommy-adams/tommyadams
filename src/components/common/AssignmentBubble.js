import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MdAssignment } from "react-icons/md";
import AssignmentModal from "./AssignmentModal";

const mapStateToProps = state => {
  const { sched: { schedule } } = state;
  return { classes: schedule };
};

const AssignmentBubble = ({ assignment, classes }) => {
  const [course] = classes.filter(c => assignment.classId === c._id);
  const [modalOpen, setModalOpen] = useState(false);
  
  if (!course) return <div />;

  console.log(assignment);

  return (
    <>
      {modalOpen && <AssignmentModal data={assignment} toggleModal={setModalOpen} />}
      <div
        className="w-full rounded-md bg-white border flex items-center space-x-2 p-1 cursor-pointer mb-3 sm:mb-1"
        style={{ borderColor: course.color }}
        onClick={() => setModalOpen(x => !x)}
      >
        <MdAssignment style={{ color: course.color }} />
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