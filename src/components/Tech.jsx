import React from "react";
import { BallCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tecnology) => (
        <div className="w-28 h-28" key={tecnology.name}>
          <BallCanvas icon={tecnology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "work");
