import React, { memo } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

import ArrowRight from '@/svgs/HomeSVG/ArrowRight.svg';

function ImageBanner({ image, title }) {
  return (
    <div className="relative flex items-center w-full sm:h-[344px] overflow-hidden">
      <div className="bg-black opacity-30 absolute top-0 left-0 z-30 w-full h-full" />
      <div className="flex flex-col l z-40 absolute  rounded-xl p-[20px]">
        <div className="flex flex-row items-center sm:gap-x-[24px] gap-x-[5px] mb-[20px]">
          <div>
            <Image
              src="/image/FooterImage/apple.png"
              alt="apple"
              width={40}
              loading="eager"
              height={49}
              quality={80}
            />
          </div>
          <span className="sm:text-[16px] text-[14px]">iPhone 14 Series</span>
        </div>
        <h2 className="xl:text-[48px] lg:text-[40px] sm:text-[26px] text-[14px] sm:leading-[40px] leading-[20px]  font-semibold lg:leading-[60px] max-w-[294px] tracking-[0.04rem]  sm:mb-[21px] mb-0 font-inter contents uppercase">
          {title}
        </h2>
        <div className="duration-300 flex items-cetner flex-row gap-x-[8px] text-white cursor-pointer hover-icon mt-[22px]">
          <a
            href="/"
            className="text-white no-underline pb-1  border-b-[1px] border-[#FAFAFA] sm:text-[16px] text-[12px]"
          >
            Shop Now
          </a>
          <ArrowRight className="text-[24px] " />
        </div>
      </div>
      <div>
        <Image
          src={image}
          alt="banner"
          width={950}
          height={344}
          priority
          quality={30}
          loading="eager"
          className="object-cover"
        />
      </div>
    </div>
  );
}

ImageBanner.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default memo(ImageBanner);
