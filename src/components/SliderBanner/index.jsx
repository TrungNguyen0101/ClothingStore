'use client';
import React from 'react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import ImageBanner from '@/components/SliderBanner/ImageBanner';

SwiperCore.use([Navigation, Pagination]);

const SliderBanner = () => {
  return (
    <Swiper
      slidesPerView={1}
      className="max-w-[892px]"
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className=" banner_content-image max-w-[892px]   bg-black ">
        <ImageBanner />
      </SwiperSlide>
      <SwiperSlide className=" banner_content-image max-w-[892px]    bg-black">
        <ImageBanner />
      </SwiperSlide>
      <SwiperSlide className=" banner_content-image max-w-[892px]    bg-black">
        <ImageBanner />
      </SwiperSlide>
      <SwiperSlide className=" banner_content-image max-w-[892px]    bg-black">
        <ImageBanner />
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderBanner;
