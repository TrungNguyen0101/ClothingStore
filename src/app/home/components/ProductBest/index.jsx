'use client'; // This is a client component 👈🏽

import React, { useRef } from 'react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import TagProduct from '@/components/TagProduct';

SwiperCore.use([Navigation, Pagination]);

import '../styledHome/Product.scss';
import ItemProduct from '@/components/ItemProduct';

const ProductBest = () => {
  //   const swiperRef = useRef(null);

  return (
    <section className="container px-0 product lg:mt-[70px] md:mt-[50px] sm:mt-[20px] mt-[20px]">
      <div className="flex flex-row sm:mb-[60px] mb-[20px] justify-between sm:gap-0 gap-x-[5px]">
        <TagProduct
          day={false}
          text="This Month"
          desc="Best Selling Products"
        />
        <div className="flex items-center justify-center text-left">
          <button
            type="button"
            className="btn-styled btn btn-danger sm:py-[16px] sm:px-[48px] py-[5px] px-[7px]"
          >
            <a href="#" className="text-white no-underline">
              View All
            </a>
          </button>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        breakpoints={{
          // when window width is >= 640px
          320: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <ItemProduct />
        </SwiperSlide>
        <SwiperSlide>
          <ItemProduct />
        </SwiperSlide>
        <SwiperSlide>
          <ItemProduct />
        </SwiperSlide>
        <SwiperSlide>
          <ItemProduct />
        </SwiperSlide>
        <SwiperSlide>
          <ItemProduct />
        </SwiperSlide>
        <SwiperSlide>
          <ItemProduct />
        </SwiperSlide>
        <SwiperSlide>
          <ItemProduct />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ProductBest;
