// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import { Card } from "./Card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../assets/css/Slider.css";
import "../assets/css/Media-Slider.css";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Newsletter Landing Page",
    description: "A landing page to subscribe in a newsletter.",
    githubLink: "https://github.com/hitalloazevedo/newsletter-landing-page",
    projectLink: "https://hitalloazevedo.github.io/newsletter-landing-page/",
    imageUri:
      "https://i.pinimg.com/736x/4e/17/ae/4e17ae5487abe07b8b79ac17010edf83.jpg",
  },
  {
    title: "Login Page Dark Theme",
    description: "A simple login page built in dark theme.",
    githubLink: "https://github.com/hitalloazevedo/tela-login-dark",
    projectLink: "https://hitalloazevedo.github.io/tela-login-dark/",
    imageUri:
      "https://i.pinimg.com/736x/1d/ad/8c/1dad8c62740644b5c4681bb12d81d184.jpg",
  },
  {
    title: "Gym Landing Page",
    description: "A landpage designed for gym owner.",
    githubLink: "https://github.com/hitalloazevedo/lp-academia",
    projectLink: "https://hitalloazevedo.github.io/landing-page-academia/",
    imageUri:
      "https://i.pinimg.com/736x/cb/54/32/cb543250be8d485a210db4802120e6e4.jpg",
  },
  {
    title: "Portifolio Website in React",
    description: "My own portifolio website built in React",
    githubLink: "https://github.com/hitalloazevedo/portifolio-react",
    projectLink: "https://hitalloazevedo.netlify.app/",
    imageUri:
      "https://i.pinimg.com/736x/74/35/b1/7435b1ee2cb20561cd29b4c5ea0f9984.jpg",
  },
  {
    title: "Todo list",
    description: "Todo list based in a Rocketseat design developed for a course task, built in React + Typescript, also I used technologies as Css modules and Vite.",
    githubLink: "https://github.com/hitalloazevedo/todo-rocket",
    projectLink: "https://hitallozevedo-todolist-react.netlify.app/",
    imageUri:
      "https://i.pinimg.com/736x/92/27/13/9227133365b370f1fd4c485b833f0b87.jpg",
  },
];

const Slider = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    window.addEventListener("DOMContentLoaded", () => {
      setWidth(window.innerWidth);
    });
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);

      if (width < 768) {
        setSlidesPerView(1);
      }
      if (width > 768 && width < 1230) {
        setSlidesPerView(2);
      }
      if (width > 1230) {
        setSlidesPerView(3);
      }
    });
  }, [setWidth, width]);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={slidesPerView}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => ""}
      onSlideChange={() => ""}
    >
      {projects.map((project) => (
        <SwiperSlide>
          <Card
            title={project.title}
            description={project.description}
            imageUri={project.imageUri}
            githubLink={project.githubLink}
            projectLink={project.projectLink}
          />
        </SwiperSlide>
      ))}
      ...
    </Swiper>
  );
};

export default Slider;
