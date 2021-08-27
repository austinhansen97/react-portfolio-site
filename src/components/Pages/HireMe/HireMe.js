import React from 'react';
import './HireMe.css';

function HireMe (props) {
    return <div className="hire-me-parent">
        <h2>Wanna Hire Me?</h2>
        <p className="paragraph-text">I'm the frontend dev you're looking for.</p>
        <h4>Let's chat!</h4>
        <input type="email" placeholder="Email" required></input>
        <textarea type="text" rows="8" placeholder="Some info about the position" required maxLength="1000"></textarea>
        <button>SEND</button>
    </div>
}

export default HireMe;