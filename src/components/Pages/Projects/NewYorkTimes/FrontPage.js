import "./FrontPage.css";
import NavBar from "../../NavBar/NavBar";
import ContentSection from "./components/ContentSection";
import ConSect2 from "./components/ConSect2";

function FrontPage(props) {
  return (
    <section className="background-NYT">
      <NavBar />
      <section className="main-layout-NYT">
        <section className="top-section-NYT">
          <div className="NYT-logo-parent">
            <div className="banner-NYT">
              <p>U.S.</p>
              <p>International</p>
              <p>Canada</p>
              <p>ESPAÑOL</p>
              <p>中文</p>
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/The_New_York_Times_Logo.svg/2560px-The_New_York_Times_Logo.svg.png"
              alt="New York Times logo"
            ></img>
          </div>
        </section>

        <section className="second-section-NYT">
          <div className="news-sectors-banner-parent-NYT">
            <div className="news-sectors-banner-NYT">
              <p>World</p>
              <p>U.S.</p>
              <p>Politics</p>
              <p>N.Y.</p>
              <p>Business</p>
              <p>Opinion</p>
              <p>Tech</p>
              <p>Science</p>
              <p>Health</p>
              <p>Sports</p>
              <p>Arts</p>
              <p>Books</p>
              <p>Style</p>
              <p>Food</p>
              <p>Travel</p>
              <p>Magazine</p>
              <p>Real Estate</p>
              <p>Video</p>
            </div>
          </div>
        </section>

        <ContentSection />
        <ConSect2 />
      </section>
    </section>
  );
}

export default FrontPage;
