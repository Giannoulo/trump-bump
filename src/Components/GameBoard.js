import React, { useState } from "react";
import { getTrumpIcons } from "../Utils/GameBoardFunctions";

const GameBoard = () => {
  const [targetClicked, settargetClicked] = useState(0);
  return (
    <div className="container" id="game-board-div">
      {getTrumpIcons(50)}
    </div>
  );
};
export default GameBoard;
