import React from "react";
import Tile from "../UI/Tile";
import "./Home.css";
import HireMe from "./HireMe/HireMe";
import NavBar from "./NavBar/NavBar";

import { NavLink } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <NavBar />
      <section className="top-parent">
        <div className="top-side">
          <h1 className="name-title">
            Aus<span className="color-letter">t</span>in Hansen
          </h1>
          <h2>
            React Dev<span className="color-letter">e</span>loper
          </h2>
          <p>
            Guarenteed to make any <br></br>frontend team <br></br>cooler.
          </p>
        </div>
        <div className="top-side-shapes-parent">
          <div className="expanding-circle"></div>
          <div className="stationary-line"></div>
          <div className="shape-1"></div>
          <div className="shape-2"></div>
          <div className="shape-3"></div>
          <div className="shape-4"></div>
          <div className="shape-5"></div>
          <div className="shape-6"></div>
          <div className="shape-7"></div>
          <div className="shape-8"></div>
          <div className="shape-9"></div>
        </div>
      </section>
      <section className="tiles-parent">
        <Tile>
          <NavLink to="./Planets" className="individual-tile-parent-2">
            <section className="right-project-tile">
              <h2>Star Wars Planets</h2>
              <p>
                Haven't watched Star Wars in a while? This tool uses an API to
                tell you about planets from the Star Wars galaxy.
              </p>
            </section>
            <section className="left-project-tile">
              <img
                className="planet-home-page"
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f4c4b7d-a2ad-49a4-ad0d-2327cab52046/de6c8ft-163f01c9-61c9-4790-a531-6e509ada0b53.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmNGM0YjdkLWEyYWQtNDlhNC1hZDBkLTIzMjdjYWI1MjA0NlwvZGU2YzhmdC0xNjNmMDFjOS02MWM5LTQ3OTAtYTUzMS02ZTUwOWFkYTBiNTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jsbKumuLzOaLZRTXFQEUlyaZOcd8MsyRsFHo8hlnf_U"
                alt="Planet from star wars"
              ></img>
            </section>
          </NavLink>
        </Tile>

        <Tile>
          <NavLink to="./Planets" className="individual-tile-parent-1">
            <section className="right-project-tile">
              <h2>Estate Planning Calculator</h2>
              <p>
                This financial planning calculator lays out a simplified visual
                of how much a wealthy client will pay in taxes before passing
                their assets to their loved ones.
              </p>
            </section>
            <section className="left-project-tile">
              <img
                className="planet-home-page"
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f4c4b7d-a2ad-49a4-ad0d-2327cab52046/de6c8ft-163f01c9-61c9-4790-a531-6e509ada0b53.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmNGM0YjdkLWEyYWQtNDlhNC1hZDBkLTIzMjdjYWI1MjA0NlwvZGU2YzhmdC0xNjNmMDFjOS02MWM5LTQ3OTAtYTUzMS02ZTUwOWFkYTBiNTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jsbKumuLzOaLZRTXFQEUlyaZOcd8MsyRsFHo8hlnf_U"
                alt="Planet from star wars"
              ></img>
            </section>
          </NavLink>
        </Tile>
        <Tile>
          <NavLink to="./Planets" className="individual-tile-parent-2">
            <section className="right-project-tile">
              <h2>U.S. States and Cities</h2>
              <p>
                This tool pulls data from an API about what cities are in the
                U.S. state you selected.
              </p>
            </section>
            <section className="left-project-tile">
              <img
                className="planet-home-page"
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f4c4b7d-a2ad-49a4-ad0d-2327cab52046/de6c8ft-163f01c9-61c9-4790-a531-6e509ada0b53.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmNGM0YjdkLWEyYWQtNDlhNC1hZDBkLTIzMjdjYWI1MjA0NlwvZGU2YzhmdC0xNjNmMDFjOS02MWM5LTQ3OTAtYTUzMS02ZTUwOWFkYTBiNTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jsbKumuLzOaLZRTXFQEUlyaZOcd8MsyRsFHo8hlnf_U"
                alt="Planet from star wars"
              ></img>
            </section>
          </NavLink>
        </Tile>
      </section>
      <HireMe />
    </div>
  );
}

export default Home;
