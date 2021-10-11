import React from "react";

const LoadContext = React.createContext({
  loading: false,
  setLoading: () => false
});

export default LoadContext;