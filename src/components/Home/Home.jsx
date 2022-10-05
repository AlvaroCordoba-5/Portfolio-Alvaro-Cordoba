import React from "react";
import NavBar from "../Navbar/NavBar";
import Frontpage from "../frontPage/Frontpage";
import Aboutme from "../Aboutme/Aboutme";
import Projects from "../Projects/Projects";

function Home() {
  return (
    <>
      <Frontpage></Frontpage>
      {/*<NavBar></NavBar>*/}
      <Aboutme></Aboutme>
      <Projects></Projects>
    </>
  );
}

export default Home;
