import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiSequelize, SiPostgresql } from "react-icons/si";

import "./skills.css";

function Skills() {
  return (
    <>
      <h1 style={{ color: "white" }}>Skills</h1>
      <div className="skills">
        <div>
          <IoLogoJavascript
            className="reacticons"
            style={{ color: "black", backgroundColor: "#ffdf00" }}
          ></IoLogoJavascript>
        </div>
        <div>
          <FaReact
            className="reacticons"
            style={{ color: "#61dafb", backgroundColor: "white" }}
          ></FaReact>
        </div>
        <div>
          <FaHtml5
            className="reacticons"
            style={{ color: "white", backgroundColor: "#ff7816" }}
          ></FaHtml5>
        </div>
        <div>
          <FaCss3Alt
            className="reacticons"
            style={{ color: "white", backgroundColor: "#2196f3" }}
          ></FaCss3Alt>
        </div>
        <div>
          <FaNodeJs
            className="reacticons"
            style={{ color: "#6da75d", backgroundColor: "white" }}
          ></FaNodeJs>
        </div>
        <div>
          <SiExpress
            className="reacticons"
            style={{ color: "white", backgroundColor: "#2e2e2e" }}
          ></SiExpress>
        </div>
        <div>
          <SiSequelize
            className="reacticons"
            style={{ color: "#52b0e7", backgroundColor: "white" }}
          ></SiSequelize>
        </div>
        <div>
          <SiPostgresql
            className="reacticons"
            style={{ color: "white", backgroundColor: "#336791" }}
          ></SiPostgresql>
        </div>
      </div>
    </>
  );
}

export default Skills;
