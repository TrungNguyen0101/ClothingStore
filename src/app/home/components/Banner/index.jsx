import React from 'react';
import Image from 'next/image';
import SliderBanner from '@/components/SliderBanner';
import './Banner.scss';
import BannerCategory from './BannerCategory';
const Banner = () => {
  return (
    <section className="container overflow-hidden banner">
      <div className="lg:flex-row banner_container md:flex-col ">
        <BannerCategory />

        <SliderBanner />
      </div>
    </section>
  );
};

export default Banner;
