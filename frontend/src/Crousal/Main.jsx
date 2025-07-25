import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Crousal1 from "./Crousal1";
import Crousal2 from "./Crousal2";
import Crousal3 from "./Crousal3";
import Crousal4 from "./Crousal4";

const HeroCarousel = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 6000 }}
      pagination={{ clickable: true }}
      loop={true}
      className="w-full lg:h-[80vh] h-[200px] relative z-30 lg:mt-32 mt-28"
    >
      <SwiperSlide>
        {({ isActive }) => <Crousal1 active={isActive} />}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => <Crousal2 active={isActive} />}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => <Crousal3 active={isActive} />}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => <Crousal4 active={isActive} />}
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousel;
