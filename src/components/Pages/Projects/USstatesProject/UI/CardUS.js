import React from "react";
import "./CardUS.css";

function CardUS(props) {
  return <div className="card-wrapper">{props.children}</div>;
}

export default CardUS;
