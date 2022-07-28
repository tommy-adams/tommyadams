import React from "react";
import Headshot from "src/media/headshot.jpeg";
import Typewriter from "typewriter-effect";
import BouncyChevron from "src/components/common/BouncyChevron";

const Landing = () => {
  return (
    <div className="w-full h-screen bg-black sm:flex">
      <div className="sm:w-1/2 h-2/3 sm:h-full flex items-center justify-center">
        <img data-sal="slide-right" data-sal-duration="1000" src={Headshot} alt="Tommy Adams" className="h-80 sm:h-96 rounded-full border-16 border-solid border-white" />
      </div>
      <div className="sm:w-1/2 h-1/3 sm:h-full flex sm:items-center justify-center sm:justify-left font-bold text-white text-3xl sm:text-5xl">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("hey, i'm tommy adams.")
              .start();
          }}
        />
      </div>
      <BouncyChevron />
    </div>
  );
};

export default Landing;
