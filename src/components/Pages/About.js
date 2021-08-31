import React from "react";
import "./About.css";
import NavBar from "./NavBar/NavBar";
// import Tile from "../UI/Tile";

function About(props) {
  return (
    <div>
      <NavBar />
      <div className="top-parent">
        <section className="left-section-parent">
          <div className="profile-pic"></div>
        </section>
        <section className="right-section-parent">
          <h2>
            Me: "Goo<span className="color-letter">d</span> to me
            <span className="color-letter">e</span>t you"
          </h2>
          <h2>You: "I think I'll hire this guy"</h2>
        </section>
      </div>
      <div className="middle-parent">
        <section className="middle-info">
          <h2>
            My stor<span className="color-letter">y</span>
          </h2>
          <p>In middle school I wrote novels </p>

          <p>In high school I got into painting</p>

          <p>Senior year I learned C++</p>

          <p>In college I studied web development and business</p>

          <p>Now I'm a Frontend Developer</p>
        </section>
      </div>

      <div className="resume-parent">
        <section className="resume-info">
          <h2>
            My res<span className="color-letter">u</span>me
          </h2>

          <section className="job-degree">
            <h3>Bachelors of Science</h3>
            <p>Business with Web Development concentration</p>
            <p>2017-2021</p>
          </section>

          <section className="job-1">
            <h3>Frontend Developer</h3>
            <p>2020-2021</p>
            <p>
              Built online courses for my alma mater using JavaScript, CSS, HTML
            </p>
          </section>
          <section className="job-2">
            <h3>Special Projects Intern</h3>
            <p>2019-2020</p>
            <p>
              Compiled data and created presentations for executives in EdTech
              company
            </p>
          </section>
          <section className="job-1">
            <h3>UX Designer/Researcher Intern</h3>
            <p>2018-2019</p>
            <p>
              Created design changes with Adobe XD and tested those changes with
              university students
            </p>
          </section>
          <section className="job-2">
            <h3>Assistant Manager</h3>
            <p>2017-2018</p>
            <p>
              Led team of content writers at a digital marketing company near my
              university
            </p>
          </section>
        </section>
      </div>
    </div>
  );
}

export default About;
