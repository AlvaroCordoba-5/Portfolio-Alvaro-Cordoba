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
        
        <div className="text">
      
          <p style={{ color: "white", margin: "auto", lineHeight:'1.6' }}>
            <h4 style={{color:"#06b84e"}}>Hola Mundo!</h4><br></br>
            Graduado del Bootcamp de Henry donde adquiri
            conocimientos en varias tecnologias desarrollando proyectos individuales y grupales. Tambien aprendiendo a trabajar
            en equipo trabaje mis habilidades blandas como comunicacion, resolucion de problemas, Motivacion, Investigacion.

            

          </p>
        </div>
        <div className="aboutskills">
          <Skills></Skills>
        </div>
      </div>
    </>
  );
}

export default Aboutme;
