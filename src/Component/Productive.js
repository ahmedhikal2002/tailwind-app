import React from "react";
import ProductiveImg from "../imgs/illustration-stay-productive.png";
import Arrow from "../imgs/icon-arrow.svg";
function Productive() {
  return (
    <section className=" bg-secandry py-24 text-white ">
      <div className="flex-center gap-10 container flex-wrap md:flex-nowrap ">
        <div className=" max-w-full md:w-[50%] ">
          <img className="w-full " src={ProductiveImg} alt="productive" />
        </div>
        <div className="max-w-full  md:w-[50%] ">
          <h3 className="font-semibold text-[30px] md:text-[40px] ">
            Stay productive,
            <br /> wherever you are
          </h3>
          <p className="my-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            excepturi incidunt quo deserunt quidem accusamus iure ab earum
            reprehenderit debitis!
          </p>
          <p className="mb-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            excepturi incidunt quo deserunt quidem accusamus iure ab earum
            reprehenderit debitis!
          </p>
          <a href="##" className="flex items-center my-link gap-1">
            See how Fylo works
            <img className="arrow" src={Arrow} alt="arrowimage" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Productive;
