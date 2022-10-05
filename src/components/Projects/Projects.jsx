import React from "react";
import Captura1 from "./captura.png";
import Captura2 from "./Captura2.png";
import Captura3 from "./captura3.png";
import Captura4 from "./captura4.png";
import Capturadogs from "./capturadogs.png";
import Capturadogs2 from "./capturadogs2.png";
import Capturadogs3 from "./capturadogs3.png";
import Movies1 from "./movies1.png";
import Movies2 from "./movies2.png";
import Movies3 from "./movies3.png";
import Movies4 from "./movies4.png";
import "./projects.css";
import Images from "./images";

function Projects() {
  return (
    <>
      <div className="projects">

      <div class="glitch" data-text="Proyectos">Proyectos</div>

        <div className="cont_projects">
          <div className="image">
            <a
              style={{ textDecoration: "none" }}
              href="https://bookstore-lyart-six.vercel.app/"
              target="_blank"
            >
            <h1 style={{ color: "white" }}>E-Commerce Bookstore</h1>
            </a>

            <Images 
              img1={Captura1}
              img2={Captura2}
              img3={Captura3}
              img4={Captura4}
            />
          </div>
          <div className="image">
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/AlvaroCordoba-5/PI-DOGS"
              target="_blank"
            >
              <h1 style={{ color: "white" }}>Dogs App</h1>
            </a>
            <Images
              img1={Capturadogs}
              img2={Capturadogs}
              img3={Capturadogs2}
              img4={Capturadogs3}
            />
          </div>
          <div className="image">
            <a
              style={{ textDecoration: "none" }}
              href="https://movies-challenge-tau.vercel.app/"
              target="_blank"
            >
              <h1 style={{ color: "white" }}>App Movies </h1>
            </a>

            <Images
              img1={Movies1}
              img2={Movies2}
              img3={Movies3}
              img4={Movies4}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
