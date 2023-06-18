import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pinak Tendulkar </span>
            from <span className="purple"> Pune, Maharashtra, India.</span>
            <br /> I am a final year student pursuing a Btech in Computer Science Engg. 
            at VIT Vellore.
            <br />
            Additionally, I' am currently working as an intern in Bajaj Auto as a Web developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Mythology
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Pinak</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
