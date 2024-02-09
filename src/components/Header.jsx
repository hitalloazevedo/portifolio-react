import "../assets/Header.css";
import "../assets/Media.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";

const Header = ({ children }) => {
  const [headerState, setHeaderState] = useState('');
  const [scrollClass, setScrollClass] = useState('')
  window.addEventListener("scroll", () => {
    window.scrollY > 80
      ? setHeaderState("scroll") & setScrollClass('scrollb')
      : window.scrollX < 80
      ? setHeaderState("") & setScrollClass('')
      : setHeaderState("scroll") & setScrollClass('scrollb');
  });

  return (
    <>
      <div className={`header ${headerState}`}>
        <div className="logo">
          <FontAwesomeIcon className={`laptonIcon ${scrollClass}`} icon={faLaptopCode} />
          <h1 className={`${scrollClass}`}>Hitallo Azevedo</h1>
        </div>

        <div className={`menuIcon ${headerState}`}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        <div className="navMenu">
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Portifolio</a>
              </li>
              <li>
                <a href="#">Skills</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {children}
    </>
  );
};

export default Header;
