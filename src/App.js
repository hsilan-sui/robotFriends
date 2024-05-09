import React from "react";
import CardList from "./CardList";
import { robots } from "./robots";

const App = () => {
  return (
    <div>
      <h1>Hello RobotFriends</h1>
      <CardList robots={robots} />
    </div>
  );
};

export default App;
