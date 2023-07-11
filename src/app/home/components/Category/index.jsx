'use client'; // This is a client component 👈🏽

import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import Prev from '@/svgs/Prev.svg';
import Next from '@/svgs/Next.svg';
import Phone from '@/svgs/Phone.svg';
import Watch from '@/svgs/Watch.svg';
import Camera from '@/svgs/Camera.svg';
import Gamepad from '@/svgs/Gamepad.svg';
import Computer from '@/svgs/Computer.svg';
import Headphone from '@/svgs/Gamepad.svg';
import ItemCategory from '@/components/ItemCategory';
import TagProduct from '@/components/TagProduct';

import './Category.scss';
import '../styledHome/Product.scss';

SwiperCore.use([Navigation, Pagination]);

const Category = () => {
  const swiperRef = useRef(null);
  const [activeButtonPrev, setActiveButtonPrev] = useState(true);
  const [activeButtonNext, setActiveButtonNext] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(0);

  const handlePrevClick = () => {
    const activeIndex = swiperRef.current.swiper.activeIndex;
    if (activeIndex === 1) {
      setActiveButtonPrev(true);
    }
    setActiveButtonNext(false);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    const slides = swiperRef.current.swiper.slides.length;
    const activeIndex = swiperRef.current.swiper.activeIndex;
    if (activeIndex === slides - 1 - slidesPerView) {
      setActiveButtonNext(true);
    }
    setActiveButtonPrev(false);

    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const slidesPerView = swiperRef.current.swiper.params.slidesPerView;
      setSlidesPerView(slidesPerView);
    }
  }, []);

  return (
    <section className="container category md:pt-[79px] md:pb-[69px] pt-[20px] pb-[39px] px-0">
      <div className="relative md:mb-[60px] mb-[20px]">
        <TagProduct
          day={false}
          text={'Categories'}
          desc={'Browse By Category'}
        />
        <div className="btn_click sm:bottom-0 bottom-[-10px]">
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
        className="swiper_caterogy"
        ref={swiperRef}
        spaceBetween={30}
        slidesPerView={6}
        modules={[Navigation, Pagination]}
        breakpoints={{
          // when window width is >= 640px
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <ItemCategory text={'Phones'}>
            <Phone className=" text-[56px]" />
          </ItemCategory>
        </SwiperSlide>
        <SwiperSlide>
          <ItemCategory text={'Computers'}>
            <Computer className=" text-[56px]" />
          </ItemCategory>
        </SwiperSlide>
        <SwiperSlide>
          <ItemCategory text={'SmartWatch'}>
            <Watch className=" text-[56px]" />
          </ItemCategory>
        </SwiperSlide>
        <SwiperSlide>
          <ItemCategory text={'Camera'}>
            <Camera className=" text-[56px]" />
          </ItemCategory>
        </SwiperSlide>
        <SwiperSlide>
          <ItemCategory text={'HeadPhones'}>
            <Headphone className=" text-[56px]" />
          </ItemCategory>
        </SwiperSlide>
        <SwiperSlide>
          <ItemCategory text={'Gaming'}>
            <Gamepad className=" text-[56px]" />
          </ItemCategory>
        </SwiperSlide>
        <SwiperSlide>
          <ItemCategory text={'Phones'}>
            <Phone className=" text-[56px]" />
          </ItemCategory>
        </SwiperSlide>
        <SwiperSlide>
          <ItemCategory text={'Computers'}>
            <Computer className=" text-[56px]" />
          </ItemCategory>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
