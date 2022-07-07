import React from "react";
import Skills from "../Skills/Skills";
import { FcDownload } from "react-icons/fc";

import "./aboutme.css";

function Aboutme() {
  return (
    <>
    <div className="cv">
      <div className="cvtext">
      <h1>Download Cv<FcDownload></FcDownload></h1>
      </div>
    </div>
    <div className="aboutme">
        <div className="aboutskills">
        <Skills></Skills>
      </div>
      <div className="text">
        <h1 style={{ color: "white" }}>About Me</h1>
        <p style={{ color: "white", width: "50%", margin: "auto" }}>
          Hi'Im Alvaro Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </p>
      </div>
    
    </div>
    </>
  );
}

export default Aboutme;
