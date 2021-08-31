import React from "react";
import Loader from "react-loader-spinner";

const LoadWrapper = () => {
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-black opacity-40 flex justify-center items-center">
      <Loader
        type="ThreeDots"
        color="#800080"
        height={80}
        width={80}
      />
    </div>
  );
};

export default LoadWrapper;
