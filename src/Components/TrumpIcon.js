import React from "react";
import VirusSvg from "../Assets/virus.svg";
import TrumpSvg from "../Assets//trump.svg";

const TrumpIcon = (props) => {
  return (
    <div>
      <img src={TrumpSvg} alt="Trump icon" className={`trump-svg ${props.classNameProp}`} />
    </div>
  );
};
export default TrumpIcon;
