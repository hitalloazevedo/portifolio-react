import React from "react";
import Icons from "./Icons";
import "../assets/css/Contact.css";
import "../assets/css/Media-Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <header>
        <h3>Contact me</h3>
      </header>

      <main>
        <div className="social">
          <Icons
            icon={"github"}
            link={"https://github.com/hitalloazevedo"}
          ></Icons>
          <Icons
            icon={"linkedin"}
            link={"https://www.linkedin.com/in/hitallo-azevedo-1a199a21a/"}
          ></Icons>
        </div>

        <div
          className="emails"
          onClick={(e) => {
            e.preventDefault();

            navigator.clipboard.writeText(e.target.textContent).then(() => {
              e.target.classList.add("copied");

              setTimeout(() => {
                e.target.classList.remove("copied");
              }, 1000);
            });
          }}
        >
          <div className="email">
            <Icons icon={"email"}></Icons>
            <a>hitalloazevedo06@gmail.com</a>
            <Icons icon={"copiar"}></Icons>
          </div>
          <div className="email">
            <Icons icon={"email"}></Icons>
            <a>azevedohitallo@gmail.com</a>
            <Icons icon={"copiar"}></Icons>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Contact;
