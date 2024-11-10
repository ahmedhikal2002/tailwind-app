import React from "react";
import Landing from "../Component/Landing";
import Feature from "../Component/Feature";
import MyImg from "../imgs/bg-curvy-desktop.svg";
import Productive from "../Component/Productive";
import Developers from "../Component/Developers";
import Contact from "../Component/Contact";
function Content() {
  return (
    <>
      <Landing />
      <img className="w-full h-[200px]" src={MyImg} alt="homeimage" />
      <Feature />
      <Productive />
      <Developers />
      <Contact />
    </>
  );
}

export default Content;
