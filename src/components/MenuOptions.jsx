import React from "react";

const menusOptions = [
  { id: 1, option: "Home", linkto: "#" },
  { id: 2, option: "About", linkto: "#" },
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
            <a href={linkto} className={scrollClass}>
              {option}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuOptions;
