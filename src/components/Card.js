import React from "react";

const Card = (props) => {
  const { id, name, username, email } = props;
  return (
    <div className="tc bg-light-red br3 dib pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
