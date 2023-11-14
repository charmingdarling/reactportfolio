import { BiDownArrow } from "react-icons/bi";
import { Link } from "react-router-dom"; // Importing a Link component; Link component is used to create links to different routes
import { Parallax } from "react-parallax";

const Home = () => {
  return(
    <div>
      <Parallax blur={10} bgImage="spaceimage.jpg" bgImageAlt="the cat" strength={350}>
        <h1 style={{textAlign:"center", marginTop:"20%"}}>Hello, I'm <span>Kim</span>.</h1>
        <h3 style={{textAlign:"center", marginTop:"20%"}}>
          <a href="#main-content"><BiDownArrow /></a>
        </h3>
        <div style={{ height: '80vh' }} />
      </Parallax>
      <div id="main-content">
        <div style={{ height: '100vh' }} />
      </div>
    </div>
  );
};

export default Home;