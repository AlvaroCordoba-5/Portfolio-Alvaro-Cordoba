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
        <img
          style={{
            position: "absolute",
            opacity: "0.2",
            width: "100%",
            height: "600px",
          }}
          src="https://img.freepik.com/fotos-premium/desarrollador-lenguaje-programacion-codigo-programa-computadora-portatil-pantalla_249974-13618.jpg?w=1380"
        ></img>
        <div className="card">
          <img src={image}></img>
          <div className="info">
            <h1>Hi,I'm Alvaro</h1>
            <h4
              style={{
                backgroundColor: "#06b84e",
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              Full Stack Web Developer
            </h4>
            
      
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Frontpage;
