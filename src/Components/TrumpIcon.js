import React from "react";
import TrumpSvg from "../Assets//trump.svg";
import TrumpSvg2 from "../Assets/trumpIcon2.svg";

const TrumpIcon = (props) => {
  return (
    <div>
      <img
        onClick={props.clickCallback === null ? null : () => props.clickCallback()}
        src={TrumpSvg2}
        alt="Trump icon"
        draggable="false"
        className={`trump-svg ${props.classNameProp}`}
      />
    </div>
  );
};
export default TrumpIcon;
