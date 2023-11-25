import { BiDownArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import { IconContext } from "react-icons";
import { Container, Row, Col } from "react-bootstrap";
import content from "../contentData.json";

const Home = () => {
  return (
    <>
      <div>
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
              <BiDownArrow size={"2em"} />
            </a>
          </h3>
          <div style={{ height: "0vh" }} />
        </Parallax>

        <div id="main-content">
          <div style={{ height: "10vh" }} />
          <h2 style={{ textAlign: "center" }}>GET TO KNOW ME</h2>
        </div>
        <Container className="container">
          <Row>
            <img
              src="./kim.jpg"
              className="profile"
              alt="woman with glasses"
            ></img>
            <Col className="center">
              <div>
                <p></p>
                {content.map((contentItem) => (
                  <div key={contentItem.id} className="mx-4">
                    <p>{contentItem.welcome}</p>
                    <p></p>
                    <p>{contentItem.hobbies}</p>
                    <p>{contentItem.previousCareer}</p>
                  </div>
                ))}
              </div>
              {/* Additional content can be added here */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
