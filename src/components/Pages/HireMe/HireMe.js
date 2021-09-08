import React from "react";
import "./HireMe.css";

function HireMe(props) {
  return (
    <div className="hire-me-parent">
      <h2>Wanna Hire Me?</h2>
      <p className="paragraph-text">I'm the developer you're looking for.</p>
      <h4>Let's chat!</h4>
      <form
        className="form-parent"
        action="mailto:austinhansendev@gmail.com"
        method="post"
        enctype="text/plain"
      >
        <input type="email" placeholder="Email" required></input>
        <textarea
          type="text"
          rows="8"
          placeholder="Some info about the position"
          required
          maxLength="1000"
        ></textarea>
        <button type="submit">SEND</button>
      </form>
    </div>
  );
}

export default HireMe;
