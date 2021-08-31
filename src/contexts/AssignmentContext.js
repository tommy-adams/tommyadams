import React from "react";

const AssignmentContext = React.createContext({
  selectedAssignment: {},
  setSelectedAssignment: () => {}
});

export default AssignmentContext;