import React from "react";

import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
  FaWhatsapp,
  FaEnvelope,
  FaEnvelopeSquare,
} from "react-icons/fa";
import "./navbar.css";
function NavBar() {
  return (
    <>
      <div className="tags">
        <h3>Alvaro Cordoba</h3>
        {/*<div className="t">
          <span>Home</span>
          <span>About</span>
          <span>Skills</span>
          <span>Projects</span>
          <span>Contact</span>
        </div>*/}
        
        <div className="iconscont">
              <a
                className="icons"
                href="https://www.linkedin.com/in/alvaro-cordoba-dev/"
                target="_blank"
              >
                <FaLinkedin size={"2em"}></FaLinkedin>
              </a>
              <a
                className="icons"
                href="https://github.com/AlvaroCordoba-5"
                target="_blank"
              >
                <FaGithubSquare size={"2em"}></FaGithubSquare>
              </a>
              <a
                className="icons"
                href="https://twitter.com/Alvaro__cordoba"
                target="_blank"
              >
                <FaTwitterSquare size={"2em"}></FaTwitterSquare>
              </a>
              <a
                className="icons"
                href="https://wa.me/+5491123992937"
                target="_blank"
              >
                <FaWhatsapp size={"2em"}></FaWhatsapp>
              </a>
              <a
                className="icons"
                href="mailto:cordobaalvaro16@gmail.com"
                target="_blank"
              >
                <FaEnvelopeSquare size={"2em"}></FaEnvelopeSquare>
              </a>
            </div>
      </div>
    </>
  );
}

export default NavBar;
