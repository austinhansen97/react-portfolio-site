import React from "react";
import CardUS from "./UI/CardUS";
import "./Form.css";
import { useState } from "react";
import NavBar from "../../NavBar/NavBar";

function Form(props) {
  const [selectedState, setSelectedState] = useState("Alabama");
  const [chosenCity, setChosenCity] = useState("");

  function runFunction() {
    props.selectedState(selectedState);
  }

  return (
    <section>
      <NavBar />
      <CardUS>
        <h1 className="US-title">U.S. STATES</h1>
        <p className="US-p">
          Note: Only Florida, Maryland, Texas, and Virginia pull cities from the
          API data
        </p>
        <form className="US-parent-dropdowns">
          <section className="US-left-panel">
            <div className="US-label-select">
              <label className="US-labels">CHOOSE A STATE</label>
              <select
                className="US-select"
                onChange={(event) => {
                  setSelectedState(event.target.value);
                  setChosenCity("");
                }}
                onClick={runFunction}
                title="US-state-select"
              >
                {props.stateArray}
              </select>
            </div>

            <div className="US-label-select">
              <label className="US-labels">CHOOSE A CITY</label>
              <select
                className="US-select"
                onChange={(event) => {
                  setChosenCity(event.target.value);
                }}
                title="US-city-select"
              >
                {props.citiesArray}
              </select>
            </div>
          </section>

          <section className="US-right-panel">
            <h3 className="US-h3">{selectedState}</h3>
            <p className="US-p">{chosenCity}</p>
          </section>
        </form>
      </CardUS>
    </section>
  );
}

export default Form;
