import React from "react";
import LandingImg from "../imgs/illustration-intro.png";
function Landing() {
  return (
    <div className="flex-center container pt-20">
      <section className="text-white w-[720px] max-w-full">
        <div className="w-full">
          <img className="w-full h-fit" src={LandingImg} alt="landing " />
        </div>
        <div className="text-center">
          <h2 className="mb-4 ">
            All your files in one secure location, accessible anywhere.
          </h2>
          <p className="font-normal mb-4 md:px-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            iste deserunt totam itaque nisi veniam voluptas vel, eos aliquam
            nulla impedit commodi.
          </p>
        </div>
        <a
          className="btn rounded-full block w-64 text-center p-4 mx-auto"
          href="##"
        >
          Get Started
        </a>
      </section>
    </div>
  );
}

export default Landing;
