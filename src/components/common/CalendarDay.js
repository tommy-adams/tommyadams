import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import AssignmentBubble from "./AssignmentBubble";

const CalendarDay = ({ assignments, number, pos, currDate }) => {
  return (
    <div className={clsx("w-full h-96 sm:h-40 p-2", {
        "border-r border-r-gray-100": pos % 7 !== 0,
        "border-b border-b-gray-100": pos < 29,
        "bg-purple-50": currDate,
        "rounded-md border border-purple-300 ": window.innerWidth <= 640
      })}
    >
      <div className="w-full flex justify-end mb-2 sm:mb-1">
        <p className="text-gray-500">{number}</p>
      </div>
      {assignments.map(a =>
        <AssignmentBubble
          key={a._id}
          assignment={a}
        />  
      )}
    </div>
  );
};

CalendarDay.propTypes = {
  assignments: PropTypes.array.isRequired,
  number: PropTypes.number.isRequired,
  pos: PropTypes.number.isRequired,
  currDate: PropTypes.bool.isRequired
};

export default CalendarDay;
