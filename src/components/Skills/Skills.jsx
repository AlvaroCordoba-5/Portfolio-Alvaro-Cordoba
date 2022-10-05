import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiSequelize, SiPostgresql } from "react-icons/si";

import "./skills.css";

function Skills() {
  return (
    <>
      <h1 style={{ color: "white" }}>STACK </h1>
      <div className="skills">
        <div>
          <IoLogoJavascript
            className="reacticons"
            style={{ color: "black", backgroundColor: "#ffdf00" }}
          ></IoLogoJavascript>
          <h6>Javascript</h6>
        </div>
        <div>
          <FaReact
            className="reacticons"
            style={{ color: "#61dafb", backgroundColor: "white" }}
          ></FaReact>
          <h6>React.js</h6>
        </div>
        <div>
          <FaHtml5
            className="reacticons"
            style={{ color: "white", backgroundColor: "#ff7816" }}
          ></FaHtml5>
          <h6>Html5</h6>
        </div>
        <div>
          <FaCss3Alt
            className="reacticons"
            style={{ color: "white", backgroundColor: "#2196f3" }}
          ></FaCss3Alt>
          <h6>Cascading Style Sheets</h6>
        </div>
        <div>
          <FaNodeJs
            className="reacticons"
            style={{ color: "#6da75d", backgroundColor: "white" }}
          ></FaNodeJs>
          <h6>Node.js</h6>
        </div>
        <div>
          <SiExpress
            className="reacticons"
            style={{ color: "white", backgroundColor: "#2e2e2e" }}
          ></SiExpress>
          <h6>Express</h6>
        </div>
        <div>
          <SiSequelize
            className="reacticons"
            style={{ color: "#52b0e7", backgroundColor: "white" }}
          ></SiSequelize>
          <h6>Sequalize</h6>
        </div>
        <div>
          <SiPostgresql
            className="reacticons"
            style={{ color: "white", backgroundColor: "#336791" }}
          ></SiPostgresql>
          <h6>Postgresql</h6>
        </div>
      </div>
    </>
  );
}

export default Skills;
