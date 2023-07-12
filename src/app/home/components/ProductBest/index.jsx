'use client';

import React, {
  lazy,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Placeholder from 'react-placeholder';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';

import '../styledHome/Product.scss';

const ItemProduct = lazy(() => import('@/components/ItemProduct'));
const TagProduct = lazy(() => import('@/components/TagProduct'));
function ProductBest({ data }) {
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

  const result = data.filter((item) => item.discountType === 'PRICE');

  const [loading, setLoading] = useState(true);

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
    <section className="container px-0  mb-[50px] lg:mt-[70px] md:mt-[50px] sm:mt-[20px] mt-[20px] duration-500">
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
            <a href="/" className="text-white no-underline">
              View All
            </a>
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
          spaceBetween={30}
          slidesPerView={4}
          shouldSwiperUpdate
          breakpoints={breakpointsSwiper}
        >
          {result?.length > 0 &&
            result.map((item) => (
              <SwiperSlide key={item._id}>
                <ItemProduct
                  id={item._id}
                  sale
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
    </section>
  );
}
ProductBest.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default memo(ProductBest);
