// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../assets/css/Slider.css'
import '../assets/css/Media-Slider.css'
import { useEffect, useState } from 'react';

const Slider = () => {

  const [width, setWidth] = useState(window.innerWidth)
  const [slidesPerView, setSlidesPerView] = useState(1)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
      
      if (width < 768) {
        setSlidesPerView(1)
      }
      if (width > 768 && width < 1024) {
        setSlidesPerView(2)
      } 
      if (width > 1025) {
        setSlidesPerView(3)
      }

    })
  }, [setWidth, width])

  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={slidesPerView}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};

export default Slider