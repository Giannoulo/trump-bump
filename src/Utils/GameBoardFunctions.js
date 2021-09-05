import TrumpIcon from "../Components/TrumpIcon";

const getRandomIntNumber = (max) => {
  return Math.floor(Math.random() * max);
};

const createClassNameArray = (numberOfIcons) => {
  const classNameArray = Array.from({ length: numberOfIcons }, (element) => "");
  classNameArray[getRandomIntNumber(numberOfIcons)] = "target";
  return classNameArray;
};

export const getTrumpIcons = (numberOfIcons, clickCallback) => {
  return createClassNameArray(numberOfIcons).map((className, index) => {
    if (className === "target")
      return <TrumpIcon classNameProp={className} key={index} clickCallback={clickCallback} />;
    else {
      return <TrumpIcon classNameProp={className} key={index} clickCallback={null} />;
    }
  });
};
