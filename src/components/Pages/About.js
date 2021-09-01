import React from "react";
import "./About.css";
import NavBar from "./NavBar/NavBar";
import HireMe from "./HireMe/HireMe";
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
          <h2>You: "Hm, I think I'll hire this guy"</h2>
        </section>
      </div>
      <div className="middle-parent">
        <section className="middle-header">
          <h2>
            My stor<span className="color-letter">y</span>
          </h2>
        </section>
        <section className="middle-paragraph">
          <section>
            <p>
              One day in high school, my teacher pulled me and another student
              aside.
            </p>
            <p>"You two are the best programmers in our class".</p>
            <p>
              I was kinda confused. Of all my peers, I wasn't the one who had
              been writing code the longest.
            </p>
            <p>
              After asking what he meant, he told us, "you two are the most
              dedicated to learning what we are doing in class".
            </p>
            <p>
              My approach to learning has followed this simple pattern: go above
              and beyond what is expected by sacrificing personal time to get
              better.
            </p>
            <p>
              Since high school I've learned a lot of things, but my commitment
              to being a great frontend developer has never been stronger.
            </p>
          </section>
        </section>
      </div>

      <div className="resume-parent">
        <section className="resume-header">
          <h2>
            My res<span className="color-letter">u</span>me
          </h2>
        </section>

        <section className="resume-items-list-parent">
          <section className="job-degree">
            <h3>Bachelor's of Science</h3>
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
      <HireMe />
    </div>
  );
}

export default About;
