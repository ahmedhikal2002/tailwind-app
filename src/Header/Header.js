import React, { useEffect, useRef } from "react";
import Logo from "../imgs/logo.svg";
function Header() {
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        headerRef.current.style.cssText =
          "background-color:rgb(12,21,36); padding-top:25px; ";
      } else {
        headerRef.current.style.cssText =
          "background-color:transparent; padding-top:40px ";
      }
    });
  }, [headerRef]);
  return (
    <header ref={headerRef} className="header z-50">
      <div className="">
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <nav className=" ">
        <ul className="flex items-center gap-10 ">
          <li className="link">
            <a href="##"> Features</a>
          </li>
          <li className="link">
            <a href="##">Teams </a>
          </li>
          <li className="link">
            <a href="##"> Signin</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
