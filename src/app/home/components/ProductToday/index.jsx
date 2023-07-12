'use client';

import React, {
  lazy,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Placeholder from 'react-placeholder';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';

// import ItemProduct from '@/components/ItemProduct';
// import TagProduct from '@/components/TagProduct';
import Next from '@/svgs/HomeSVG/Next.svg';
import Prev from '@/svgs/HomeSVG/Prev.svg';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import '../styledHome/Product.scss';

const ItemProduct = lazy(() => import('@/components/ItemProduct'));
const TagProduct = lazy(() => import('@/components/TagProduct'));

function ProductToday({ data, date }) {
  const result = data.filter((item) => item.discountType === 'PERCENT');

  const swiperRef = useRef(null);
  const [activeButtonPrev, setActiveButtonPrev] = useState(true);
  const [activeButtonNext, setActiveButtonNext] = useState(false);
  const [loading, setLoading] = useState(true);

  const breakpointsSwiper = useMemo(
    () => ({
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
    }),
    []
  );

  const handlePrevClick = useCallback(() => {
    if (swiperRef?.current && swiperRef?.current?.swiper) {
      const activeIndex = swiperRef?.current?.swiper.activeIndex;
      if (activeIndex === 1) {
        setActiveButtonPrev(true);
      }
      setActiveButtonNext(false);
      swiperRef?.current?.swiper.slidePrev();
    }
  }, []);

  const handleNextClick = useCallback(() => {
    if (swiperRef?.current && swiperRef?.current?.swiper) {
      const slidesPerViewTotal = swiperRef.current.swiper.params.slidesPerView;
      const slides = swiperRef?.current?.swiper.slides.length;
      const activeIndex = swiperRef?.current?.swiper.activeIndex;
      if (activeIndex === slides - 1 - slidesPerViewTotal) {
        setActiveButtonNext(true);
      }
      setActiveButtonPrev(false);
      swiperRef?.current?.swiper.slideNext();
    }
  }, []);

  const handleLoad = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    handleLoad();
    window.addEventListener('load', handleLoad);
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [handleLoad]);
  return (
    <section className="mb-[60px] duration-300 xl:overflow-hidden lg:mt-[140px] md:mt-[70px] sm:mt-[30px] mt-[20px]">
      <div className="container px-0">
        <div className="relative sm:mb-[31px] mb-[50px]">
          <TagProduct day={date} mt text="Today’s" desc="Flash Sales" />
          <div className="btn_click sm:bottom-0 bottom-[-30px]">
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
            <div className="grid lg:grid-cols-4 md:grid-cols-3 mb:grid-cols-2 grid-cols-1 gap-x-[30px]">
              <div className="xl:max-w-[270px] ">
                <div className="w-full h-[250px]  bg-slate-300  opacity-90" />
                <div className="mt-[16px] h-[72px] w-full bg-slate-300  opacity-90" />
                <div className="mt-[8px] h-[24px] w-[40%] bg-slate-300  opacity-90" />
                <div className="mt-[8px] h-[20px] w-[70%] bg-slate-300  opacity-90" />
              </div>
              <div className="xl:max-w-[270px] mb:inline-block hidden">
                <div className="w-full h-[250px]  bg-slate-300  opacity-90" />
                <div className="mt-[16px] h-[72px] w-full bg-slate-300  opacity-90" />
                <div className="mt-[8px] h-[24px] w-[40%] bg-slate-300  opacity-90" />
                <div className="mt-[8px] h-[20px] w-[70%] bg-slate-300  opacity-90" />
              </div>
              <div className="xl:max-w-[270px] md:inline-block hidden">
                <div className="w-full h-[250px]  bg-slate-300  opacity-90" />
                <div className="mt-[16px] h-[72px] w-full bg-slate-300  opacity-90" />
                <div className="mt-[8px] h-[24px] w-[40%] bg-slate-300  opacity-90" />
                <div className="mt-[8px] h-[20px] w-[70%] bg-slate-300  opacity-90" />
              </div>
              <div className="xl:max-w-[270px] lg:inline-block hidden">
                <div className="w-full h-[250px]  bg-slate-300  opacity-90" />
                <div className="mt-[16px] h-[72px] w-full bg-slate-300  opacity-90" />
                <div className="mt-[8px] h-[24px] w-[40%] bg-slate-300  opacity-90" />
                <div className="mt-[8px] h-[20px] w-[70%] bg-slate-300  opacity-90" />
              </div>
            </div>
          }
        >
          <Swiper
            className="xl:overflow-visible"
            ref={swiperRef}
            spaceBetween={30}
            slidesPerView={4}
            shouldSwiperUpdate
            breakpoints={breakpointsSwiper}
          >
            {result?.length > 0 &&
              result.map((item) => (
                <SwiperSlide key={item._id}>
                  <ItemProduct
                    sale
                    id={item._id}
                    variants={item.variants}
                    slug={item.slug}
                    discount={item.discount}
                    discountType={item.discountType}
                    discountedPrice={item.discountedPrice}
                    title={item.name}
                    image={item.cover}
                    price={item.price}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </Placeholder>

        <div className="flex items-center justify-center lg:mt-[60px] md:mt-[30px] mt-[20px]">
          <button type="button" className="btn-styled btn btn-danger">
            <a href="/" className="text-white no-underline">
              View All Products
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

ProductToday.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  date: PropTypes.bool.isRequired,
};

export default memo(ProductToday);
