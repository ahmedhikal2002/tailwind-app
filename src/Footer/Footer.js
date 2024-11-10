import React from "react";
import Logo from "../imgs/logo.svg";
import Location from "../imgs/icon-location.svg";
import Phone from "../imgs/icon-phone.svg";
import Mail from "../imgs/icon-email.svg";

function Footer() {
  return (
    <section className="text-white bg-[rgb(12,21,36)] mt-24 pt-[200px] md:pt-[100px] pb-20">
      <div className="container">
        <div className="w-[200px] mt-24  mb-10">
          <a href="/">
            <img
              className="w-full h-fit object-contain"
              src={Logo}
              alt="logo"
            />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-11  md:gap-x-40  lg:gap-11">
          <div className="flex gap-5 ">
            <img className="w-5 h-5" src={Location} alt="location_image" />
            <p className="text font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              nisi dignissimos unde ipsam modi facilis nam magni, assumenda ad
              fuga.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-center">
              <img className="w-4 h-4" src={Phone} alt="phone_image" />
              <p>+20121212121</p>
            </div>
            <div className="flex gap-5 items-center">
              <img className="w-4 h-4" src={Mail} alt="email_image" />
              <p>example@fylo.com</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  gap-10 ">
            <div className="flex flex-col gap-4">
              <a href="##" className=" link-active">
                About US
              </a>
              <a href="##" className=" link-active">
                Jobs
              </a>
              <a href="##" className=" link-active">
                Press
              </a>
              <a href="##" className=" link-active">
                Blog
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="##" className=" link-active">
                Contact US
              </a>
              <a href="##" className=" link-active">
                Trems
              </a>
              <a href="##" className=" link-active">
                Privacy
              </a>
            </div>
          </div>
          <div className="flex-center items-start gap-3 md:justify-start">
            <a className=" icon flex-center link-active" href="##">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a className="icon flex-center link-active" href="##">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a className="icon flex-center link-active" href="##">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
