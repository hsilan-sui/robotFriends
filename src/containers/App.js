import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
// import { robots } from "./robots";

//在one way data flow情況下，要如何讓子元件彼此響應當前“狀態”進行互動？＝> state /memory > props
//class component寫法

class App extends React.Component {
  constructor() {
    super(); //js 子类拥有自己的构造函数 在子类的构造函数中需要使用 super() 来调用父类的构造函数(這裡是調用React.Component)
    //設置state
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }
  //
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    // console.log(event.target.value);
    //想讓searchinput的值和robots的資料做互動=>filter 並在渲染頁面時assign進來
    // const filteredRobotsArr = this.state.robots.filter((robot) => {
    //   return robot.name
    //     .toLowerCase()
    //     .includes(this.state.searchfield.toLowerCase());
    // });
    // console.log(filteredRobotsArr);
  };

  render() {
    const { robots, searchfield } = this.state;
    //想讓searchinput的值和robots的資料做互動=>filter 並在渲染頁面時assign進來
    const filteredRobotsArr = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    //判斷
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1>Hello RobotFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobotsArr} />
        </Scroll>
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
