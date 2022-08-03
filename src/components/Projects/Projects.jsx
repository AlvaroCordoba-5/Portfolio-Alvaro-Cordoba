import React from "react";
import Captura1 from "./captura.png";
import Captura2 from "./Captura2.png";
import Captura3 from "./captura3.png";
import Captura4 from "./captura4.png";
import Capturadogs from "./capturadogs.png";
import Capturadogs2 from "./capturadogs2.png";
import Capturadogs3 from "./capturadogs3.png";
import "./projects.css";
import Images from "./images";

function Projects() {
  return (
    <>
      <div className="projects">
        <h1 style={{ color: "white", margin: "auto" }}>Projects</h1>

        <div className="cont_projects">
          <div className="image">
            <h1 style={{ color: "white" }}>E-Commerce Bookstore</h1>
            <a href="https://bookstore-lyart-six.vercel.app/" target="_blank">
              
              
              <Images
                img1={Captura1}
                img2={Captura2}
                img3={Captura3}
                img4={Captura4}
              />
            </a>
          </div>
          <div className="image">
            <a href="https://github.com/AlvaroCordoba-5/PI-DOGS" target="_blank">
            <h1 style={{ color: "white" }}>Dogs App</h1>
           </a>
            <Images
              img1={Capturadogs}
              img2={Capturadogs}
              img3={Capturadogs2}
              img4={Capturadogs3}
            />
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
