import React from "react";
import NavBar from "../Navbar/NavBar";
import Frontpage from "../frontPage/Frontpage";
import Aboutme from "../Aboutme/Aboutme";
import Skills from "../Skills/Skills";
import { FaLinkedin } from "react-icons/fa";


//<Skills></Skills>

function Home() {
  return (
    <>
        <NavBar></NavBar>
        <Frontpage></Frontpage>
        <Aboutme></Aboutme>
       
        
    </>
  )
}

export default Home