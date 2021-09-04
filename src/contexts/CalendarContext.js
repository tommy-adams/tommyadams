import React from "react";

const CalendarContext = React.createContext({
  calendar: [],
  updateCalendar: () => {}
});

export default CalendarContext;