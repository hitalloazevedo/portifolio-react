import React, { useEffect, useState } from "react";
import "../assets/css/Console.css";
import TypeWriter from "./TypeWriter";

const Console = () => {
  return (
    <div className="console">
      <p className="console-text">
        console.log(
        <br />
        <span>"Welcome to my portifolio website!"</span>
        <br />
        );
      </p>
      <br />
      <TypeWriter yourtext={"Welcome to my portfolio website!"} letterDelay={60} phraseDelay={2000}/>
    </div>
  );
};

export default Console;
