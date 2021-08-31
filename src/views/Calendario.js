import React from "react";
import ActionBar from "src/components/Calendario/ActionBar";
import Calendar from "src/components/Calendario/Calendar";

const Calendario = () => {
  const token = sessionStorage.getItem("token");

  if (!!!token) window.location.pathname = "/clogin";

  return (
    <div className="w-screen">
      <ActionBar />
      <Calendar />
    </div>
  );
};

export default Calendario;