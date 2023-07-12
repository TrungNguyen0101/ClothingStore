/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */

'use client';

import React, { memo, useEffect, useState } from 'react';
import Placeholder from 'react-placeholder';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import WishListProduct from '../../../../../components/ItemProduct/WishListProduct';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Navigation, Pagination]);
const modulesSwiper = [Navigation, Pagination];
const breakpointsSwiper = {
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
};

function WishListItem({ status, data }) {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem('YourWishList'))) {
      const sessionWishList = JSON.parse(
        sessionStorage.getItem('YourWishList')
      )?.data;

      const reesult = sessionWishList.map((id) =>
        data.data.find((product) => product._id === id)
      );
      setWishList(reesult);
    }
  }, [data]);
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
    <div>
      {status === true ? (
        <Placeholder
          ready={!loading}
          rows={5}
          customPlaceholder={
            <div className="grid lg:grid-cols-4 md:grid-cols-3 mb:grid-cols-2 grid-cols-1 gap-x-[30px]">
              <div className={classNames('xl:max-w-[270px]', {})}>
                <div className="w-full h-[250px]  bg-slate-300  opacity-90" />
                <div className="mt-[16px] h-[48px] w-full bg-slate-300  opacity-90" />
                <div className="mt-[8px] h-[20px] w-[70%] bg-slate-300  opacity-90" />
              </div>
              <div className={classNames('xl:max-w-[270px]', {})}>
                <div className="w-full h-[250px]  bg-slate-300  opacity-90" />
                <div className="mt-[16px] h-[48px] w-full bg-slate-300  opacity-90" />
                <div className="mt-[8px] h-[20px] w-[70%] bg-slate-300  opacity-90" />
              </div>
              <div className={classNames('xl:max-w-[270px]', {})}>
                <div className="w-full h-[250px]  bg-slate-300  opacity-90" />
                <div className="mt-[16px] h-[48px] w-full bg-slate-300  opacity-90" />
                <div className="mt-[8px] h-[20px] w-[70%] bg-slate-300  opacity-90" />
              </div>
              <div className={classNames('xl:max-w-[270px]', {})}>
                <div className="w-full h-[250px]  bg-slate-300  opacity-90" />
                <div className="mt-[16px] h-[48px] w-full bg-slate-300  opacity-90" />
                <div className="mt-[8px] h-[20px] w-[70%] bg-slate-300  opacity-90" />
              </div>
            </div>
          }
        >
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            modules={modulesSwiper}
            breakpoints={breakpointsSwiper}
          >
            {wishList?.length > 0 &&
              wishList.map((item) => (
                <SwiperSlide key={item.slug}>
                  <WishListProduct
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
                    delete
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </Placeholder>
      ) : (
        <div className="grid lg:grid-cols-4 lg:gap-x-[30px] gap-y-[15px]  sm:grid-cols-3 grid-cols-1 gap-x-[15px] xl:mt-[60px] mt-[30px]">
          {data.data?.length > 0 &&
            data.data
              .slice(16, 20)
              .map((item) => (
                <WishListProduct
                  key={item.slug}
                  id={item._id}
                  variants={item.variants}
                  slug={item.slug}
                  discount={item.discount}
                  discountType={item.discountType}
                  discountedPrice={item.discountedPrice}
                  title={item.name}
                  image={item.cover}
                  price={item.price}
                  newPro
                  start
                />
              ))}
        </div>
      )}
    </div>
  );
}
WishListItem.propTypes = {
  status: PropTypes.bool,
  data: PropTypes.object.isRequired,
};
export default memo(WishListItem);
