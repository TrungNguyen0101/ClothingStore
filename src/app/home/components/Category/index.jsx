'use client';

import React, { lazy, memo, useEffect, useRef, useState } from 'react';
import Placeholder from 'react-placeholder';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';

import Camera from '@/svgs/HomeSVG/Camera.svg';
import Computer from '@/svgs/HomeSVG/Computer.svg';
import Gamepad from '@/svgs/HomeSVG/Gamepad.svg';
import Next from '@/svgs/HomeSVG/Next.svg';
import Phone from '@/svgs/HomeSVG/Phone.svg';
import Prev from '@/svgs/HomeSVG/Prev.svg';
import Watch from '@/svgs/HomeSVG/Watch.svg';

import '../styledHome/Product.scss';

const ItemCategory = lazy(() => import('@/components/ItemCategory'));
const TagProduct = lazy(() => import('@/components/TagProduct'));

const breakpointsSwiper = {
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
};
function Category() {
  const swiperRef = useRef(null);
  const [activeButtonPrev, setActiveButtonPrev] = useState(true);
  const [activeButtonNext, setActiveButtonNext] = useState(false);

  const handlePrevClick = () => {
    const { activeIndex } = swiperRef.current.swiper;
    if (activeIndex === 1) {
      setActiveButtonPrev(true);
    }
    setActiveButtonNext(false);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    const slidesPerViewTotal = swiperRef.current.swiper.params.slidesPerView;
    const slides = swiperRef.current.swiper.slides.length;
    const { activeIndex } = swiperRef.current.swiper;
    if (activeIndex === slides - 1 - slidesPerViewTotal) {
      setActiveButtonNext(true);
    }
    setActiveButtonPrev(false);

    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    handleLoad();

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  return (
    <section className="container md:pt-[79px] md:pb-[69px] pt-[20px] pb-[39px] px-0 border-t-[1px] border-b-[1px] border-[#cfcfcf]">
      <div>
        <div className="relative md:mb-[60px] mb-[20px]">
          <TagProduct day={false} text="Categories" desc="Browse By Category" />
          <div className="btn_click sm:bottom-0 bottom-[-10px]">
            <button
              aria-label="prev"
              type="button"
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
              aria-label="next"
              type="button"
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
        <Placeholder
          ready={!loading}
          rows={5}
          customPlaceholder={
            <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-x-[30px]">
              <div className="md:pb-[23px] md:pt-[24px] md:px-[30px] py-[15px] px-[21px] w-full h-[144px] rounded-md bg-slate-300 opacity-90 " />
              <div className="md:pb-[23px] md:pt-[24px] md:px-[30px] py-[15px] px-[21px] w-full h-[144px] rounded-md bg-slate-300 opacity-90 " />
              <div className="md:pb-[23px] md:pt-[24px] md:px-[30px] py-[15px] px-[21px] w-full h-[144px] rounded-md bg-slate-300 opacity-90 sm:inline-block hidden" />
              <div className="md:pb-[23px] md:pt-[24px] md:px-[30px] py-[15px] px-[21px] w-full h-[144px] rounded-md bg-slate-300 opacity-90 md:inline-block hidden" />
              <div className="md:pb-[23px] md:pt-[24px] md:px-[30px] py-[15px] px-[21px] w-full h-[144px] rounded-md bg-slate-300 opacity-90 lg:inline-block hidden" />
            </div>
          }
        >
          <Swiper
            className="swiper_caterogy"
            ref={swiperRef}
            spaceBetween={30}
            slidesPerView={6}
            breakpoints={breakpointsSwiper}
          >
            <SwiperSlide>
              <ItemCategory text="Phones">
                <Phone className=" text-[56px]" />
              </ItemCategory>
            </SwiperSlide>
            <SwiperSlide>
              <ItemCategory text="Computers">
                <Computer className=" text-[56px]" />
              </ItemCategory>
            </SwiperSlide>
            <SwiperSlide>
              <ItemCategory text="SmartWatch">
                <Watch className=" text-[56px]" />
              </ItemCategory>
            </SwiperSlide>
            <SwiperSlide>
              <ItemCategory text="Camera">
                <Camera className=" text-[56px]" />
              </ItemCategory>
            </SwiperSlide>
            <SwiperSlide>
              <ItemCategory text="HeadPhones">
                <Gamepad className=" text-[56px]" />
              </ItemCategory>
            </SwiperSlide>
            <SwiperSlide>
              <ItemCategory text="Gaming">
                <Gamepad className=" text-[56px]" />
              </ItemCategory>
            </SwiperSlide>
            <SwiperSlide>
              <ItemCategory text="Phones">
                <Phone className=" text-[56px]" />
              </ItemCategory>
            </SwiperSlide>
            <SwiperSlide>
              <ItemCategory text="Computers">
                <Computer className=" text-[56px]" />
              </ItemCategory>
            </SwiperSlide>
          </Swiper>
        </Placeholder>
      </div>
    </section>
  );
}

export default memo(Category);
