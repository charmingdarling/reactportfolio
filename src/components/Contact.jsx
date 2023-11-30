import { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importing a Link component; Link component is used to create links to different routes
import VerticalModal from "./VerticalModal";

const Contact = () => {
  const [formState, setFormState] = useState({
    from_name: "",
    email: "",
    message: "",
    to_name: "Kim",
  });

  const [displayMessage, setDisplayMessage] = useState("");
  // const [showOverlay, setShowOverlay] = useState(false);

  const sendEmail = () => {
    if (!formState.from_name || !formState.email || !formState.message) {
      setDisplayMessage("Please fill out all required fields.");
      setTimeout(() => {
        setDisplayMessage("");
        setShowOverlay(false);
      }, 8000);
      return;
    }
    emailjs
      .send(
        "service_of106il",
        "template_ollr54w",
        formState,
        "fUTN7iOm_VoOcuw60"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setFormState({
          from_name: "",
          email: "",
          message: "",
          to_name: "Kim",
        });
        setDisplayMessage("Thank you for reaching out.");
        setShowOverlay(true);
        setTimeout(() => setDisplayMessage(""), 5000);
      })
      .catch((err) => {
        console.log("FAILED to send email...", err);
        setDisplayMessage(
          "Unable to send email. Please contact me through LinkedIn."
        );
        setTimeout(() => setDisplayMessage(""), 5000);
      });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <>
      {/* <VerticalModal show={showContact} onHide={closeModal} title="Contact" /> */}

      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "60%",
        }}
      >
        <h1>Contact Me</h1>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
          name="email"
          value={formState.email}
          onChange={handleChange}
        >
          <Form.Control type="email" placeholder="your@email.com" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Name"
          className="mb-3"
          name="from_name"
          value={formState.from_name}
          onChange={handleChange}
        >
          <Form.Control type="email" placeholder="Name" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingTextarea"
          label="Message"
          className="mb-3"
          name="message"
          value={formState.message}
          onChange={handleChange}
        >
          <Form.Control
            as="textarea"
            placeholder="Let me know what I can do for you."
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <Button onClick={sendEmail}>Submit</Button>
        <p>{displayMessage}</p>
      </div>
    </>
  );
};

export default Contact;
