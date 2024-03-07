import "../assets/css/Header.css";
import "../assets/css/Media-Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MenuOptions from "./MenuOptions";

import React, { useState } from "react";

const Header = ({ children }) => {
  const [headerState, setHeaderState] = useState("");
  const [scrollClass, setScrollClass] = useState("");
  const [navBarScroll, setNavBarScroll] = useState("");

  window.addEventListener("scroll", () => {
    window.scrollY > 80
      ? setHeaderState("scroll") &
        setScrollClass("scrollb") &
        setNavBarScroll("navBarScroll")
      : window.scrollX < 80
      ? setHeaderState("") & setScrollClass("") & setNavBarScroll("")
      : setHeaderState("scroll") &
        setScrollClass("scrollb") &
        setNavBarScroll("navBarScroll");
  });

  return (
    <>
      <div className={`header ${headerState}`}>
        <div className="logo">
          <FontAwesomeIcon
            className={`laptonIcon ${scrollClass}`}
            icon={faLaptopCode}
          />
          <h1 className={`${scrollClass}`}>Hitallo Azevedo</h1>
        </div>

        <div
          className={`menuIcon ${headerState}`}
          onClick={(e) => {
            const navMenu = document.querySelector(".navMenu");
            if (navMenu.classList.contains("active")) {
              navMenu.classList.remove("active");
              navMenu.classList.add("deactive");
            } else {
              navMenu.classList.add("active");
              navMenu.classList.remove("deactive");
            }
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>

        <div className={`navMenu ${navBarScroll} deactive`}>
          <MenuOptions scrollClass={scrollClass}></MenuOptions>
        </div>
      </div>

      {children}
    </>
  );
};

export default Header;
