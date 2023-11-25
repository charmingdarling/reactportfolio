import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importing a Link component; Link component is used to create links to different routes

const Contact = () => {
  const [formState, setFormState] = useState({
    from_name: "",
    message: "",
    to_name: "Kim",
  });

  const [displayMessage, setDisplayMessage] = useState("");

  const sendEmail = () => {
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
          message: "",
          to_name: "Kim",
        });
        setDisplayMessage("WoooHOoo!");
        setTimeout(() => setDisplayMessage(""), 5000);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <div className="center">
      <h1>Get in touch.</h1>
      <div>
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          value={formState.from_name}
          onChange={handleChange}
        />
        <p></p>
        <textarea
          rows={4}
          name="message"
          value={formState.message}
          onChange={handleChange}
        />
      </div>
      <Button onClick={sendEmail}>Submit</Button>
      <p>{displayMessage}</p>
    </div>
  );
};

export default Contact;
