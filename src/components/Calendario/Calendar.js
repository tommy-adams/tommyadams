/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback, useMemo } from "react";
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
  const [startPos, setStartPos] = useState(0);

  const fetchAssignments = async () => {
    const id = JSON.parse(sessionStorage.getItem("token"));
    await actions.loadAssignments(id);
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  useEffect(() => {
    const newDates = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const day = new Date(date);
      day.setDate(i);
      if (i === 1) setStartPos(day.getDay());
      newDates.push({
        date: day,
        assignments: assignments.filter(a => {
          const dueDate = new Date(a.due);
          dueDate.setDate(dueDate.getDate() + 1);
          return dateFunc.datesEqual(day, dueDate);
        })
      });
    }

    for (let i = 0; i < startPos; i++) {
          newDates.unshift({ date: null, assignments: [] });
        }

    setDates(newDates);
  }, [daysInMonth, JSON.stringify(assignments), date, startPos]);

  const arrowClickDesktop = useCallback(direction => {
    setDate(date => {
      const newDate = new Date(date);
      // necessary for end of months with different lengths
      if (newDate.getMonth() + direction !== new Date(date).getMonth()) newDate.setDate(1);
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

  const numRows = useMemo(() => [5,6].includes(startPos) ? 6 : 5, [startPos]);

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
              <div className="text-center w-full mb-2">
                <p className="text-gray-400">{dateFunc.getDayOfWeek(date)}</p>
              </div>
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
            <>
              <Grid templateColumns="repeat(7, 1fr)" px="4" pb="4">
                <div className="border-t border-b border-gray-200 text-center w-full">
                  <p className="text-gray-400">SUNDAY</p>
                </div>
                <div className="border-t border-b border-gray-200 text-center w-full">
                  <p className="text-gray-400">MONDAY</p>
                </div>
                <div className="border-t border-b border-gray-200 text-center w-full">
                  <p className="text-gray-400">TUESDAY</p>
                </div>
                <div className="border-t border-b border-gray-200 text-center w-full">
                  <p className="text-gray-400">WEDNESDAY</p>
                </div>
                <div className="border-t border-b border-gray-200 text-center w-full">
                  <p className="text-gray-400">THURSDAY</p>
                </div>
                <div className="border-t border-b border-gray-200 text-center w-full">
                  <p className="text-gray-400">FRIDAY</p>
                </div>
                <div className="border-t border-b border-gray-200 text-center w-full">
                  <p className="text-gray-400">SATURDAY</p>
                </div>
              </Grid>
              <Grid templateRows={`repeat(${numRows}, 1fr)`} templateColumns="repeat(7, 1fr)" px="4" pb="4">
                {dates.map((d, i) =>
                  <CalendarDay
                    key={i + 1}
                    assignments={d.assignments}
                    number={d.date?.getDate() || ""}
                    pos={i + 1}
                    currDate={dateFunc.datesEqual(d.date, new Date())}
                    empty={d.date === null}
                    rows={numRows}
                  /> 
                )}
              </Grid>
            </>
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
