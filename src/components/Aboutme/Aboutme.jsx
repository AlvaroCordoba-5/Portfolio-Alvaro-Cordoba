import React from "react";
import Skills from "../Skills/Skills";
import pdf from "./CVAlvaroCordoba.pdf";
import { FcDownload } from "react-icons/fc";

import "./aboutme.css";

function Aboutme() {
  return (
    <>
      <div className="cv">
        <div className="cvtext">
          <a
            style={{ textDecoration: "none", color: "white" }}
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            download="CVAlvaroCordoba.pdf"
          >
            <h1>
              Download Cv<FcDownload></FcDownload>
            </h1>
          </a>
        </div>
      </div>
      <div className="aboutme">
        <div className="aboutskills">
          <Skills></Skills>
        </div>
        <div className="text">
          <h1 style={{ color: "white" }}>Acerca de mi</h1>
          <p style={{ color: "white", margin: "auto" }}>
            <h4 style={{color:"#06b84e"}}>Hola Mundo!</h4><br></br>
            Soy FullStack Developer buscando su primer experencia laboral IT.

          </p>
        </div>
      </div>
    </>
  );
}

export default Aboutme;
