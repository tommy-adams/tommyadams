import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as assignmentAction from "src/actions/assignmentActions";
import * as dateFunc from "src/utils/dateUtils";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Grid } from "@chakra-ui/react";
import CalendarDay from "src/components/common/CalendarDay";
import AssignmentContext from "src/contexts/AssignmentContext";

const mapStateToProps = state => {
  const { assignment: { assignments } } = state;
  return { assignments };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...assignmentAction }, dispatch)
});

const isMobile = window.innerWidth <= 640;

const Calendar = ({ actions, assignments }) => {
  const [date, setDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState(dateFunc.getDaysInMonth(date));
  const [dates, setDates] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState({});

  const fetchAssignments = async () => {
    const id = JSON.parse(sessionStorage.getItem("token"));
    await actions.loadAssignments(id);
  };

  useEffect(() => {
    fetchAssignments();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const newDates = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const day = new Date(date);
      day.setDate(i);
      newDates.push({
        date: day,
        assignments: assignments.filter(a => {
          const dueDate = new Date(a.due);
          dueDate.setDate(dueDate.getDate() + 1);
          return dateFunc.datesEqual(day, dueDate);
        })
      });
    }
    setDates(newDates);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [daysInMonth, JSON.stringify(assignments), date]);

  const arrowClickDesktop = useCallback(direction => {
    setDate(date => {
      const newDate = new Date(date);
      // necessary for end of months with different lengths
      if (newDate.getMonth() + direction !== new Date().getMonth()) newDate.setDate(1);
      newDate.setMonth(newDate.getMonth() + direction);
      setDaysInMonth(dateFunc.getDaysInMonth(newDate));
      return newDate;
    });
  }, [setDate]);

  const arrowClickMobile = useCallback(direction => {
    setDate(date => {
      const newDate = new Date(date);
      newDate.setDate(newDate.getDate() + direction);
      return newDate;
    });
  }, [setDate]);

  return (
    <div className="w-full px-8 sm:px-16 pb-4 sm:pb-8">
      <div className="rounded-lg shadow-xl border border-gray-200 pt-10 h-full">
        <div className="flex pl-2 sm:pl-10 pr-2 sm:pr-20 mb-8">
          <div className="w-3/4 flex space-x-2 sm:space-x-6 items-end">
            <h1>{dateFunc.getMonth(date)}</h1>
            <h3>{date.getFullYear()}</h3>
          </div>
          <div className="w-1/4 flex justify-end space-x-2 sm:space-x-4">
            <FiArrowLeft
              className="cursor-pointer hover:text-purple-300 text-2xl"
              onClick={() => isMobile ? arrowClickMobile(-1) : arrowClickDesktop(-1)}
            />
            <FiArrowRight
              className="cursor-pointer hover:text-purple-300 text-2xl"
              onClick={() => isMobile ? arrowClickMobile(1) : arrowClickDesktop(1)}
            />
          </div>
        </div>
        <AssignmentContext.Provider value={{ selectedAssignment, setSelectedAssignment }}>
          {isMobile ? (
            <div className="px-6 pb-6">
              <CalendarDay
                key={date.getDate()}
                assignments={assignments.filter(a => {
                  const dueDate = new Date(a.due);
                  dueDate.setDate(dueDate.getDate() + 1);
                  return dateFunc.datesEqual(date, dueDate);
                })}
                number={date.getDate()}
                pos={date.getDate()}
                currDate
              />
            </div>
          ) : (
            <Grid templateRows="repeat(5, 1fr)" templateColumns="repeat(7, 1fr)" px="4" pb="4">
              {dates.map((d, i) =>
                <CalendarDay
                  key={i + 1}
                  assignments={d.assignments}
                  number={d.date.getDate()}
                  pos={i + 1}
                  currDate={dateFunc.datesEqual(d.date, new Date())}
                /> 
              )}
            </Grid>
          )}
        </AssignmentContext.Provider>
      </div>
    </div>
  );
};

Calendar.propTypes = {
  actions: PropTypes.object.isRequired,
  assignments: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
