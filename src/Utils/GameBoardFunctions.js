import TrumpIcon from "../Components/TrumpIcon";

export const getTrumpIcons = (numberOfIcons, clickCallback) => {
  const iconArr = Array.from({ length: numberOfIcons }, (element) => "");
  iconArr[Math.floor(Math.random() * numberOfIcons)] = "target";
  return iconArr.map((className, index) => {
    return <TrumpIcon classNameProp={className} key={index} clickCallback={clickCallback} />;
  });
};
