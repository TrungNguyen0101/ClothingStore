'use client';
import React from 'react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import ItemSliderAbout from '../ItemSliderAbout';

SwiperCore.use([Navigation, Pagination]);

const SliderAbout = () => {
  return (
    <Swiper
      className="pb-[55px]"
      slidesPerView={3}
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{
        // when window width is >= 640px
        320: {
          slidesPerView: 1,
          spaceBetween: 5,
        },

        576: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      <SwiperSlide>
        <ItemSliderAbout />
      </SwiperSlide>
      <SwiperSlide>
        <ItemSliderAbout />
      </SwiperSlide>
      <SwiperSlide>
        <ItemSliderAbout />
      </SwiperSlide>
      <SwiperSlide>
        <ItemSliderAbout />
      </SwiperSlide>
      <SwiperSlide>
        <ItemSliderAbout />
      </SwiperSlide>
      <SwiperSlide>
        <ItemSliderAbout />
      </SwiperSlide>
      <SwiperSlide>
        <ItemSliderAbout />
      </SwiperSlide>
      <SwiperSlide>
        <ItemSliderAbout />
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderAbout;
