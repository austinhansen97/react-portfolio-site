import React from "react";
import { useState, useEffect } from "react";
import Forms from "./Forms";
import "./Forms.css";

function Planets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
        setPlanets(data.results);
      });
  }, []);

  return (
      <Forms
        planets={planets}
      />
  );
}

export default Planets;
