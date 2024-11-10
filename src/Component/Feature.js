import React from "react";
import Access from "../imgs/icon-access-anywhere.svg";
import Security from "../imgs/icon-security.svg";
import Collaboration from "../imgs/icon-collaboration.svg";
import File from "../imgs/icon-any-file.svg";
function Feature() {
  return (
    <div className="container flex-center py-10">
      <section className="grid-sec">
        <div className="box">
          <img className="w-20 h-20" src={Access} alt="icon" />
          <h4>Acces your files,anywhere</h4>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed
            beatae, laboriosam enim voluptatum quia.
          </p>
        </div>
        <div className="box">
          <img className="w-20 h-20" src={Security} alt="icon" />
          <h4>Security you can trust</h4>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed
            beatae, laboriosam enim voluptatum quia.
          </p>
        </div>
        <div className="box">
          <img className="w-20 h-20" src={Collaboration} alt="icon" />
          <h4>Real-time collaboration</h4>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed
            beatae, laboriosam enim voluptatum quia.
          </p>
        </div>
        <div className="box">
          <img className="w-20 h-20" src={File} alt="icon" />
          <h4>Store any type of file</h4>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed
            beatae, laboriosam enim voluptatum quia.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Feature;
