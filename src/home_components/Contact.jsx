import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wl6yws8",
        "template_727q46g",
        e.target,
        "user_qV0WOVcSDQ3LPmsSAhGGm"
      )
      .then((res) => {
        console.log(res);
        alert("Message sent successfully");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="container">
      <div className="col-md-4"></div>
      <div
        className="container border"
        style={{
          marginTop: "50px",
          width: "50p%",
          backgroundImage: `url('')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1
          style={{
            marginTop: "25px",
            textAlign: "center",
            color: "#0355AD",
            fontWeight: "bold",
          }}
        >
          -: Contact Us :-
        </h1>
        <form
          className="row"
          style={{ margin: "20px 85px 75px 100px" }}
          onSubmit={sendEmail}
        >
          <label style={{ fontWeight: "bold", color: "#1264BB" }}>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="form-control"
          />
          <label style={{ fontWeight: "bold", color: "#1264BB" }}>
            Email Id:
          </label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Email-id"
            className="form-control"
          />

          <label style={{ fontWeight: "bold", color: "#1264BB" }}>
            Message:
          </label>
          <textarea
            name="message"
            rows="4"
            placeholder="Your messages....."
            className="form-control"
          />
          <input
            type="submit"
            value="Send"
            className="form-control btn btn-primary"
            style={{ marginTop: "30px" }}
          />
        </form>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
};
export default Contact;
