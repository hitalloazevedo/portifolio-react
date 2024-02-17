import React from "react";
import "../assets/css/Home.css";
import Console from "./Console";
import Icons from "./Icons";
import "../assets/css/Media-Home.css";
import gif from "../assets/images/Programmer.gif";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <article>
          <h3>Hello World,</h3>
          <h2>
            I am a <br />
            Web Devoloper
          </h2>
        </article>

        <Console />

        <div className="social-icons-area">
          <Icons icon={"github"} link={"https://github.com/hitalloazevedo"} />
          <Icons
            icon={"linkedin"}
            link={"https://www.linkedin.com/in/hitallo-azevedo-1a199a21a/"}
          />
        </div>
      </div>
      <aside>
        <img src={gif} className="gif" />
        <a
          href="https://storyset.com/web"
          target="_blank"
          className="storyset-link"
        >
          Web illustrations by Storyset
        </a>
      </aside>
    </section>
  );
};

export default Home;
