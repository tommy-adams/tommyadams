import React from "react";
import ActionBar from "src/components/Calendario/ActionBar";
import Calendar from "src/components/Calendario/Calendar";

const Calendario = () => {
  return (
    <div className="w-screen">
      <ActionBar />
      <Calendar />
    </div>
  );
};

export default Calendario;