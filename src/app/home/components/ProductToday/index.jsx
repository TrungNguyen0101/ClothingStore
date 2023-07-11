'use client'; // This is a client component

import React, { useEffect, useRef, useState } from 'react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import TagProduct from '@/components/TagProduct';
import ItemProduct from '@/components/ItemProduct';
import Prev from '@/svgs/Prev.svg';
import Next from '@/svgs/Next.svg';

import '../styledHome/Product.scss';

SwiperCore.use([Navigation, Pagination]);

const ProductToday = () => {
  const swiperRef = useRef(null);
  const [activeButtonPrev, setActiveButtonPrev] = useState(true);
  const [activeButtonNext, setActiveButtonNext] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(0);

  const handlePrevClick = () => {
    if (swiperRef?.current && swiperRef?.current?.swiper) {
      const activeIndex = swiperRef?.current?.swiper.activeIndex;
      if (activeIndex === 1) {
        setActiveButtonPrev(true);
      }
      setActiveButtonNext(false);
      swiperRef?.current?.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef?.current && swiperRef?.current?.swiper) {
      const slides = swiperRef?.current?.swiper.slides.length;
      const activeIndex = swiperRef?.current?.swiper.activeIndex;
      if (activeIndex === slides - 1 - slidesPerView) {
        setActiveButtonNext(true);
      }
      setActiveButtonPrev(false);
      swiperRef?.current?.swiper.slideNext();
    }
  };

  useEffect(() => {
    if (swiperRef?.current && swiperRef?.current?.swiper) {
      const slidesPerView = swiperRef.current.swiper.params.slidesPerView;
      setSlidesPerView(slidesPerView);
    }
  }, []);
  return (
    <section className="product product_today lg:mt-[140px] md:mt-[70px] sm:mt-[30px] mt-[20px]">
      <div className="container px-0">
        <div className="relative sm:mb-[31px] mb-[50px]">
          <TagProduct day={true} mt={true} text="Today’s" desc="Flash Sales" />
          <div className="btn_click sm:bottom-0 bottom-[-30px]">
            <button
              className={classNames('md:p-[11px] sm:p-[5px] p-[5px]', {
                'active-button': activeButtonPrev === true,
              })}
              onClick={handlePrevClick}
            >
              <Prev
                className={classNames('text-[24px]', {
                  'hover-icon': activeButtonPrev === false,
                })}
              />
            </button>
            <button
              className={classNames('md:p-[11px] sm:p-[5px] p-[5px]', {
                'active-button': activeButtonNext === true,
              })}
              onClick={handleNextClick}
            >
              <Next
                className={classNames('text-[24px]', {
                  'hover-icon': activeButtonNext === false,
                })}
              />
            </button>
          </div>
        </div>
        <Swiper
          className="slide_list"
          ref={swiperRef}
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
              spaceBetween: 15,
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
            <ItemProduct sale={true} />
          </SwiperSlide>
          <SwiperSlide>
            <ItemProduct sale={true} />
          </SwiperSlide>
          <SwiperSlide>
            <ItemProduct sale={true} />
          </SwiperSlide>
          <SwiperSlide>
            <ItemProduct sale={true} />
          </SwiperSlide>
          <SwiperSlide>
            <ItemProduct sale={true} />
          </SwiperSlide>
          <SwiperSlide>
            <ItemProduct sale={true} />
          </SwiperSlide>
          <SwiperSlide>
            <ItemProduct sale={true} />
          </SwiperSlide>
        </Swiper>
        <div className="flex items-center justify-center lg:mt-[60px] md:mt-[30px] mt-[20px]">
          <button type="button" className="btn-styled btn btn-danger">
            <a href="#" className="text-white no-underline">
              View All Products
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductToday;
