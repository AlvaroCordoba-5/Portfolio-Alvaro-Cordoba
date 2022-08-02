import React from "react";
import Captura1 from "./captura.png";
import Capturadogs from './capturadogs.png'
import Capturadogs2 from './capturadogs2.png'
import Capturadogs3 from './capturadogs3.png'
import "./projects.css";
import Images from "./images";

function Projects() {
  return (
    <>
      <div className="projects">
        <h1 style={{ color: "white" ,margin:"auto"}}>Projects</h1>

        <div className="cont_projects">
          <div className="image">
            <h1 style={{ color: "white" }}>E-Commerce Bookstore</h1>
            <Images img1={Captura1} img2={Capturadogs} img3={Capturadogs2} img4={Capturadogs3}/>
          </div>
          <div className="image">
            <h1 style={{ color: "white" }}>Dogs App</h1>
            <img src={Capturadogs}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
