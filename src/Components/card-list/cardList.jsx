import React from "react";
import Card from "../card/Card";

import "./cardList.css";
export const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster, index) => {
      const { name, email } = monster;
      return <Card name={name} key={index} index={index} email={email} />;
    })}
  </div>
);
