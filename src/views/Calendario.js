import React, { useState } from "react";
import ActionBar from "src/components/Calendario/ActionBar";
import Calendar from "src/components/Calendario/Calendar";
import CalendarContext from "src/contexts/CalendarContext";

const Calendario = () => {
  const [calendar, updateCalendar] = useState([]);
  const token = sessionStorage.getItem("token");
  if (!!!token) window.location.pathname = "/clogin";

  return (
    <div className="w-screen">
      <CalendarContext.Provider value={{ calendar, updateCalendar }}>
        <ActionBar />
        <Calendar />
      </CalendarContext.Provider>
    </div>
  );
};

export default Calendario;