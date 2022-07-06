import React from "react";
import "./frontpage.css";
import {
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
  FaWhatsapp,
  FaEnvelope,
  FaEnvelopeSquare,
} from "react-icons/fa";
import image from "./Alvaro.jpeg";

function Frontpage() {
  return (
    <>
    <div className="frontpage">
        
      <div className="card">
        <img src={image}></img>
        <div className="info">
          <h1>Hi,I'm Alvaro</h1>
          <h4>Full Stack Web Developer</h4>
          <div className="iconscont">
            <a
              className="icons"
              href="https://www.linkedin.com/in/alvaro-cordoba-dev/"
              target="_blank"
              >
              <FaLinkedin></FaLinkedin>
            </a>
            <a
              className="icons"
              href="https://github.com/AlvaroCordoba-5"
              target="_blank"
            >
              <FaGithubSquare></FaGithubSquare>
            </a>
            <a
              className="icons"
              href="https://twitter.com/Alvaro__cordoba"
              target="_blank"
            >
              <FaTwitterSquare></FaTwitterSquare>
            </a>
            <a
              className="icons"
              href="https://wa.me/+5491123992937"
              target="_blank"
            >
              <FaWhatsapp></FaWhatsapp>
            </a>
            <a
              className="icons"
              href="mailto:cordobaalvaro16@gmail.com"
              target="_blank"
            >
              <FaEnvelopeSquare></FaEnvelopeSquare>
            </a>
          </div>
        </div>
      </div>
              </div>
      
    </>
  );
}

export default Frontpage;
