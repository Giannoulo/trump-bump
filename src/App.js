import React from "react";
import Header from "./Components/Header";
import Controls from "./Components/Controls";
import GameBoard from "./Components/GameBoard";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Controls />
      <GameBoard />
    </div>
  );
};

export default App;
