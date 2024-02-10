import React from "react";

const menusOptions = [
  { id: 1, option: "Home", linkto: "#home" },
  { id: 2, option: "About", linkto: "#about" },
  { id: 3,option: "Portifolio", linkto: "#" },
  { id: 4,option: "Skills", linkto: "#" },
  { id: 5,option: "Contact", linkto: "#" },
];

const MenuOptions = ({ scrollClass }) => {
  return (
    <nav>
      <ul>
        {menusOptions.map(({ id, option, linkto }) => (
          <li key={id}>
            <a href={linkto} className={scrollClass} onClick={
              (e) => {
                const navMenu = e.target.closest('.navMenu')
                if (navMenu.classList.contains('active')) {
                  navMenu.classList.remove('active')
                  navMenu.classList.add('deactive')
                } else {
                  navMenu.classList.remove('deactive')
                  navMenu.classList.add('active')
                }
              }
            }>
              {option}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuOptions;
