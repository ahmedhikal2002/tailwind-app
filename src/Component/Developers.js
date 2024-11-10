import React from "react";
import DeveloperOne from "../imgs/profile-1.jpg";
import DeveloperTwo from "../imgs/profile-2.jpg";
import DeveloperThree from "../imgs/profile-3.jpg";
import Quotes from "../imgs/bg-quotes.png";
function Developers() {
  return (
    <section className="text-white pb-24 pt-12">
      <div className="container">
        <div className=" developers relative z-[-5]">
          <div className="absolute -z-10 -top-10 -left-2">
            <img src={Quotes} alt="quotesimg" />
          </div>
          <div className="developer">
            <p className="text font-semibold mb-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus
              minus. Pariatur laboriosam quae numquam illo nisi quod! Quis,
              reprehenderit. Debitis, officiis!
            </p>
            <div className="flex-center justify-start gap-5">
              <img
                className="w-12 h-12 rounded-full"
                src={DeveloperOne}
                alt="Developerimage"
              />
              <div>
                <strong>Ahmed</strong>
                <p>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
          <div className="developer">
            <p className="text font-semibold mb-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus
              minus. Pariatur laboriosam quae numquam illo nisi quod! Quis,
              reprehenderit. Debitis, officiis!
            </p>
            <div className="flex-center justify-start gap-5">
              <img
                className="w-12 h-12 rounded-full"
                src={DeveloperTwo}
                alt="Developerimage"
              />
              <div>
                <strong>Mohamed</strong>
                <p>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
          <div className="developer">
            <p className="text font-semibold mb-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus
              minus. Pariatur laboriosam quae numquam illo nisi quod! Quis,
              reprehenderit. Debitis, officiis!
            </p>
            <div className="flex-center justify-start gap-5">
              <img
                className="w-12 h-12 rounded-full"
                src={DeveloperThree}
                alt="Developerimage"
              />
              <div>
                <strong>Eman</strong>
                <p>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Developers;
