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
              Descargar Cv<FcDownload></FcDownload>
            </h1>
          </a>
        </div>
      </div>
      <div className="aboutme">
      <div className="aboutskills">
          <Skills></Skills>
        </div>
        
        <div className="text">
      
          <p style={{ color: "white", margin: "auto", lineHeight:'1.6', font: "italic small-caps bold 16px/2 cursive" }}>
            <h4  classname= "hola-Mundo" style={{color:"#06b84e",fontSize:"25px",margin:"0px"}}>¡Hola Mundo!</h4><br></br>
            Soy un desarrollador Web graduado del Bootcamp de Henry donde adquiri
            conocimientos en varias tecnologias desarrollando proyectos individuales y grupales. Tambien aprendiendo a trabajar
            en equipo trabaje mis habilidades blandas como comunicacion, resolucion de problemas, Liderazgo, Investigacion.
            Actualmente estoy trabajando en proyectos personales donde estoy poniendo en practica todo lo aprendido
            y tambien aprendiendo nuevas tecnologias!

            

          </p>
        </div>
        
      </div>
    </>
  );
}

export default Aboutme;
