import React from "react";
import "./card.css";
const Card = ({ name, index, email }) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${index}?set=set1&size=180x180`}
        alt="monster"
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
