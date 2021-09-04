import React from "react";

const ClassContext = React.createContext({
  selectedClass: {},
  setSelectedClass: () => {}
});

export default ClassContext;