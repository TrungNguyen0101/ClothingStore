'use client';

import React, { lazy, memo } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';

const ImageBanner = lazy(() => import('@/components/SliderBanner/ImageBanner'));

function SliderBanner({ data }) {
  return (
    <div className="container p-0 overflow-hidden h-[384px]">
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        shouldSwiperUpdate
      >
        {data.length > 0 &&
          data.map((item) => (
            <SwiperSlide key={item._id} className=" text-[white] mt-[40px] ">
              <ImageBanner image={item.image} title={item.title} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
SliderBanner.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};
export default memo(SliderBanner);
