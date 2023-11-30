import { useState } from "react";
import { Button, Overlay } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importing a Link component; Link component is used to create links to different routes

const Contact = () => {
  const [formState, setFormState] = useState({
    from_name: "",
    email: "",
    message: "",
    to_name: "Kim",
  });

  const [displayMessage, setDisplayMessage] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);

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
    <div className="center">
      <h1>Let's chat!</h1>
      <div>
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          value={formState.from_name}
          onChange={handleChange}
        />
        <p></p>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formState.email}
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
