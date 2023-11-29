import { Button, ButtonGroup, Image } from "react-bootstrap";
import githubIcon from "../assets/icon/github.svg";
import linkedIcon from "../assets/icon/linkedin.svg";
import envelope from "../assets/icon/envelope.svg";

function Footer() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "10%",
          paddingBottom: "5%",
        }}
      >
        <ButtonGroup aria-label="footer">
          <Button variant="light">
            <Image src={githubIcon} alt="GitHub Icon" size="" /> GitHub
          </Button>
          <Button variant="light">
            <Image src={linkedIcon} alt="LinkedIn Icon" /> LinkedIn
          </Button>
          <Button variant="light">
            <Image src={envelope} alt="LinkedIn Icon" /> Email
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
}

export default Footer;
