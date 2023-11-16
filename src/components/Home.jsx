import { BiDownArrow } from "react-icons/bi";
import { Link } from "react-router-dom"; // Importing a Link component; Link component is used to create links to different routes
import { Parallax } from "react-parallax";
import { IconContext } from "react-icons";

const Home = () => {
  return (
    <>
      <div className="container">
        <Parallax
          blur={0}
          bgImage="mountains.jpg"
          bgImageAlt="mountains"
          strength={450}
        >
          <h1 style={{ textAlign: "center", marginTop: "20%" }}>
            Hello, I'm <span>Kim</span>.
          </h1>
          <h2 style={{ textAlign: "center" }}>Web Developer</h2>
          <h3 style={{ textAlign: "center", marginTop: "20%" }}>
            <a href="#main-content">
              <BiDownArrow />
            </a>
          </h3>
          <div style={{ height: "0vh" }} />
        </Parallax>

        <div id="main-content">
          <div style={{ height: "10vh" }} />
          <h2 style={{ textAlign: "center" }}>GET TO KNOW ME</h2>
        </div>
      </div>
      {/* end container */}
    </>
  );
};

export default Home;
