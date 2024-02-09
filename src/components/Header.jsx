import "../assets/Header.css";
import "../assets/Media.css";
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

        <div className={`menuIcon ${headerState}`}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        <div className={`navMenu ${navBarScroll}`}>
          <MenuOptions scrollClass={scrollClass}></MenuOptions>
        </div>
      </div>

      {children}
    </>
  );
};

export default Header;
