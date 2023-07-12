'use client';

import React, { lazy, memo, useMemo } from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const ItemSliderAbout = lazy(() => import('../ItemSliderAbout'));

SwiperCore.use([Pagination]);

function SliderAbout() {
  const breakpointsSwiper = useMemo(
    () => ({
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
    }),
    []
  );
  return (
    <Swiper
      className="pb-[55px]"
      slidesPerView={3}
      shouldSwiperUpdate
      spaceBetween={30}
      pagination={{ clickable: true }}
      breakpoints={breakpointsSwiper}
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
}

export default memo(SliderAbout);
