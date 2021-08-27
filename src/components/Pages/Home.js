import React from 'react';
import Tile from '../UI/Tile';
import "./Home.css";
import HireMe from './HireMe/HireMe';

function Home (props) {
// why is this having issues???

    return (
    <div>
        <nav>
            <ul className="nav-bar-parent">  
                <a href="./About"><li>About</li></a>
                <a href="./Home"><h2>A</h2></a>
                <a href="./Contact"><li>Contact</li></a>
            </ul>
        </nav>
        <section className="top-parent">
            <div className="top-side">
                <h1 className="name-title">Austin Hansen</h1>
                <h2>React Developer</h2>
                <p>Guarenteed to make any <br></br>frontend team <br></br>cooler.</p>
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
                <h2>Star Wars Planets</h2>
            </Tile>
            <Tile>
                <h2>Estate Tax Calculator</h2>
            </Tile>
        </section>
        <HireMe/>
    </div>
    );
}

export default Home;