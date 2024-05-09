import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

//在one way data flow情況下，要如何讓子元件彼此響應當前“狀態”進行互動？＝> state /memory > props
//class component寫法

class App extends React.Component {
  render() {
    return (
      <div className="tc">
        <h1>Hello RobotFriends</h1>
        <SearchBox />
        <CardList robots={robots} />
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <div className="tc">
//       <h1>Hello RobotFriends</h1>
//       <SearchBox />
//       <CardList robots={robots} />
//     </div>
//   );
// };

export default App;
