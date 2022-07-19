import React from "react";
import NavBar from "../Navbar/NavBar";
import Frontpage from "../frontPage/Frontpage";
import Aboutme from "../Aboutme/Aboutme";
import Projects from "../Projects/Projects";





function Home() {
  return (
    <>
        <NavBar></NavBar>
        <Frontpage></Frontpage>
        <Aboutme></Aboutme>
        <Projects></Projects>
       
        
    </>
  )
}

export default Home