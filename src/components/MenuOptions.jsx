import React from "react";

const menusOptions = [
  { option: "About", linkto: "#" },
  { option: "Portifolio", linkto: "#" },
  { option: "Skills", linkto: "#" },
  { option: "Contact", linkto: "#" },
];

const MenuOptions = ({ scrollClass }) => {
  return (
    <nav>
      <ul>
        {menusOptions.map(({ option, linkto }) => (
          <li>
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
