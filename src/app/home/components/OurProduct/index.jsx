'use client'; // This is a client component 👈🏽

import React, { useEffect, useRef, useState } from 'react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import Prev from '@/svgs/Prev.svg';
import Next from '@/svgs/Next.svg';
import TagProduct from '@/components/TagProduct';
import ItemProduct from '@/components/ItemProduct';

import '../styledHome/Product.scss';

SwiperCore.use([Navigation, Pagination]);

const OurProduct = () => {
  let count = 0;
  const array = [
    { money: 100, number: 1 },
    { money: 200, number: 2 },
    { money: 300, number: 3 },
    { money: 400, number: 4 },
    { money: 500, number: 5 },
    { money: 600, number: 6 },
    { money: 700, number: 7 },
    { money: 800, number: 8 },
    { money: 900, number: 9 },
    { money: 1000, number: 9 },
  ];

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
    <section className="mt-[71px] ">
      <div className="container px-0">
        <div className="relative sm:mb-[60px] mb-[30px]">
          <TagProduct text="Our Products" desc="Explore Our Products" />
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
          {array.map((item, index) => {
            let number = 6;
            const maxItem = Math.ceil(array.length / 2);
            if (maxItem > number) {
              number = maxItem;
            }
            if (count < number) {
              const nextItem = array[number + index];
              count++;
              return (
                <SwiperSlide key={index} className="inline-block">
                  <ItemProduct
                    ourProduct={true}
                    money={item.money}
                    className={'mb-[60px]'}
                  />
                  <SwiperSlide>
                    {nextItem !== undefined && (
                      <ItemProduct
                        ourProduct={true}
                        money={nextItem.money}
                        color={true}
                      />
                    )}
                  </SwiperSlide>
                </SwiperSlide>
              );
            }
            return null;
          })}
        </Swiper>
        <div className="flex items-center justify-center lg:mt-[60px] md:mt-[30px] mt-[20px]">
          <button type="button" className="mt-0 btn-styled btn btn-danger">
            <a href="#" className="text-white no-underline">
              View All Products
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurProduct;
