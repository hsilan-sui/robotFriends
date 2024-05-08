import React from "react";
import "tachyons";

const Hello = (props) => {
  return (
    <>
      <h1 className="f1 tc">woooho!</h1>
      <p>
        display: {props.greeting}, {props.name}
      </p>
    </>
  );
};
// class Hello extends React.Component {
//   render() {
//     return (
//       <>
//         <h1 className="f1 tc">woooho!</h1>
//         <p>
//           display: {this.props.greeting}, {this.props.name}
//         </p>
//       </>
//     );
//   }
// }

export default Hello;
