import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card key={i} id={user.id} name={user.name} email={user.email} />
        );
      })}
    </div>
  );
};

// const CardList = ({ robots }) => {
//   //製作一系列機器人卡片
//   const cardArray = robots.map((user, i) => {
//     return <Card key={i} id={user.id} name={user.name} email={user.email} />;
//   });
//   return <div>{cardArray}</div>;
// };

export default CardList;
