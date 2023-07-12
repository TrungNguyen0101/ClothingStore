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
// import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Next from '@/svgs/HomeSVG/Next.svg';
import Prev from '@/svgs/HomeSVG/Prev.svg';

// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';
// import 'swiper/components/navigation/navigation.min.css';
// import 'swiper/components/pagination/pagination.min.css';
import '../styledHome/Product.scss';

// SwiperCore.use([Navigation, Pagination]);
// const modulesSwiper = [Navigation, Pagination];
const ItemProduct = lazy(() => import('@/components/ItemProduct'));
const TagProduct = lazy(() => import('@/components/TagProduct'));

function OurProduct({ data }) {
  const breakpointsSwiper = useMemo(
    () => ({
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
    }),
    []
  );
  const swiperRef = useRef(null);
  const [activeButtonPrev, setActiveButtonPrev] = useState(true);
  const [activeButtonNext, setActiveButtonNext] = useState(false);
  const [loading, setLoading] = useState(true);

  let count = 0;

  const handlePrevClick = useCallback(() => {
    const { activeIndex } = swiperRef.current.swiper;
    if (activeIndex === 1) {
      setActiveButtonPrev(true);
    }
    setActiveButtonNext(false);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  }, []);

  const handleNextClick = useCallback(() => {
    const slides = swiperRef.current.swiper.slides.length;
    const slidesPerViewTotal = swiperRef.current.swiper.params.slidesPerView;
    const { activeIndex } = swiperRef.current.swiper;
    if (activeIndex === slides - 1 - slidesPerViewTotal) {
      setActiveButtonNext(true);
    }
    setActiveButtonPrev(false);

    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
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
    <section className="mt-[71px] ">
      <div className="container px-0">
        <div className="relative sm:mb-[60px] mb-[30px]">
          <TagProduct text="Our Products" desc="Explore Our Products" />
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
            <div>
              <div className="grid lg:grid-cols-4 md:grid-cols-3 mb:grid-cols-2 grid-cols-1 gap-x-[30px]">
                <div className="xl:max-w-[270px] ">
                  <div className="w-full h-[250px]  bg-slate-300  opacity-90" />
                  <div className="mt-[16px] h-[24px] w-full bg-slate-300  opacity-90" />
                  <div className="mt-[8px] h-[20px] w-[70%] bg-slate-300  opacity-90" />
                </div>
                <div className="xl:max-w-[270px] mb:inline-block hidden">
                  <div className="w-full h-[250px]  bg-slate-300  opacity-90" />
                  <div className="mt-[16px] h-[24px] w-full bg-slate-300  opacity-90" />
                  <div className="mt-[8px] h-[20px] w-[70%] bg-slate-300  opacity-90" />
                </div>
                <div className="xl:max-w-[270px] md:inline-block hidden">
                  <div className="w-full h-[250px]  bg-slate-300  opacity-90" />
                  <div className="mt-[16px] h-[24px] w-full bg-slate-300  opacity-90" />
                  <div className="mt-[8px] h-[20px] w-[70%] bg-slate-300  opacity-90" />
                </div>
                <div className="xl:max-w-[270px] lg:inline-block hidden">
                  <div className="w-full h-[250px]  bg-slate-300  opacity-90" />
                  <div className="mt-[16px] h-[24px] w-full bg-slate-300  opacity-90" />
                  <div className="mt-[8px] h-[20px] w-[70%] bg-slate-300  opacity-90" />
                </div>
              </div>
              <div className="mt-[60px] grid lg:grid-cols-4 md:grid-cols-3 mb:grid-cols-2 grid-cols-1 gap-x-[30px]">
                <div className="xl:max-w-[270px] ">
                  <div className="w-full h-[250px]  bg-slate-300  opacity-90" />
                  <div className="mt-[16px] h-[24px] w-full bg-slate-300  opacity-90" />
                  <div className="mt-[8px] h-[20px] w-[70%] bg-slate-300  opacity-90" />
                  <div className="mt-[8px] flex gap-x-[8px]">
                    <span className="w-[20px] h-[20px] rounded-full bg-slate-300  opacity-90" />
                    <span className="w-[20px] h-[20px] rounded-full bg-slate-300  opacity-90" />
                  </div>
                </div>
                <div className="xl:max-w-[270px] mb:inline-block hidden">
                  <div className="w-full h-[250px]  bg-slate-300  opacity-90" />
                  <div className="mt-[16px] h-[24px] w-full bg-slate-300  opacity-90" />
                  <div className="mt-[8px] h-[20px] w-[70%] bg-slate-300  opacity-90" />
                  <div className="mt-[8px] flex gap-x-[8px]">
                    <span className="w-[20px] h-[20px] rounded-full bg-slate-300  opacity-90" />
                    <span className="w-[20px] h-[20px] rounded-full bg-slate-300  opacity-90" />
                  </div>
                </div>
                <div className="xl:max-w-[270px] md:inline-block hidden">
                  <div className="w-full h-[250px]  bg-slate-300  opacity-90" />
                  <div className="mt-[16px] h-[24px] w-full bg-slate-300  opacity-90" />
                  <div className="mt-[8px] h-[20px] w-[70%] bg-slate-300  opacity-90" />
                  <div className="mt-[8px] flex gap-x-[8px]">
                    <span className="w-[20px] h-[20px] rounded-full bg-slate-300  opacity-90" />
                    <span className="w-[20px] h-[20px] rounded-full bg-slate-300  opacity-90" />
                  </div>
                </div>
                <div className="xl:max-w-[270px] lg:inline-block hidden">
                  <div className="w-full h-[250px]  bg-slate-300  opacity-90" />
                  <div className="mt-[16px] h-[24px] w-full bg-slate-300  opacity-90" />
                  <div className="mt-[8px] h-[20px] w-[70%] bg-slate-300  opacity-90" />
                  <div className="mt-[8px] flex gap-x-[8px]">
                    <span className="w-[20px] h-[20px] rounded-full bg-slate-300  opacity-90" />
                    <span className="w-[20px] h-[20px] rounded-full bg-slate-300  opacity-90" />
                  </div>
                </div>
              </div>
            </div>
          }
        >
          <Swiper
            ref={swiperRef}
            spaceBetween={30}
            slidesPerView={4}
            shouldSwiperUpdate
            // modules={modulesSwiper}
            breakpoints={breakpointsSwiper}
          >
            {data?.slice(0, 15).map((item, index) => {
              let number = 8;

              const maxItem = Math.ceil(
                ((data && data.slice(0, 15)) || []).length / 2
              );
              if (maxItem > number) {
                number = maxItem;
              }
              if (count < number) {
                const nextItem = data.slice(0, 15)[number + index];

                count += 1;
                return (
                  <SwiperSlide key={item._id} className="inline-block">
                    <ItemProduct
                      id={item._id}
                      className="mb-[60px]"
                      ourProduct
                      variants={item.variants}
                      slug={item.slug}
                      discount={item.discount}
                      discountType={item.discountType}
                      discountedPrice={item.discountedPrice}
                      title={item.name}
                      image={item.cover}
                      price={item.price}
                    />
                    <SwiperSlide>
                      {nextItem !== undefined && (
                        <ItemProduct
                          id={nextItem._id}
                          ourProduct
                          color
                          variants={nextItem.variants}
                          slug={nextItem.slug}
                          discount={nextItem.discount}
                          discountType={nextItem.discountType}
                          discountedPrice={nextItem.discountedPrice}
                          title={nextItem.name}
                          image={nextItem.cover}
                          price={nextItem.price}
                        />
                      )}
                    </SwiperSlide>
                  </SwiperSlide>
                );
              }
              return undefined;
            })}
          </Swiper>
        </Placeholder>
        <div className="flex items-center justify-center lg:mt-[60px] md:mt-[30px] mt-[20px]">
          <button
            aria-label="view"
            type="button"
            className="mt-0 btn-styled btn btn-danger"
          >
            <a href="/" className="text-white no-underline">
              View All Products
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
OurProduct.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default memo(OurProduct);
