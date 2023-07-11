import Image from 'next/image';
import React from 'react';
import ArrowRight from '@/svgs/ArrowRight.svg';

const ImageBanner = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-start sm:items-center sm:flex-row ">
        <div className="flex flex-col lg:w-[50%] w-[20%]">
          <div className="flex flex-row items-center sm:gap-x-[24px] gap-x-[5px] mb-[20px]">
            <div>
              <Image src="/image/apple.png" alt="" width={40} height={49} />
            </div>
            <span className="sm:text-[16px] text-[14px]">iPhone 14 Series</span>
          </div>
          <h2
            className={`xl:text-[48px] lg:text-[40px] sm:text-[26px] text-[14px] sm:leading-[40px] leading-[20px]  font-semibold lg:leading-[60px] max-w-[294px] tracking-[0.04rem]  sm:mb-[21px] mb-0 font-inter`}
          >
            Up to 10% off Voucher
          </h2>
          <div className="duration-300 flex items-cetner flex-row gap-x-[8px] text-white cursor-pointer hover-icon mt-[22px]">
            <a
              href="#"
              className="text-white no-underline pb-1  border-b-[1px] border-[#FAFAFA] sm:text-[16px] text-[12px]"
            >
              Shop Now
            </a>
            <ArrowRight className="text-[24px] "></ArrowRight>
          </div>
        </div>
        <div className="overflow-hidden sm:w-[50%] w-[25%] sm:mt-0 mt-[30px]">
          <Image
            src="/image/banner.png"
            alt=""
            fill={true}
            className="relative object-cover max-w-[496px] "
          />
        </div>
      </div>
    </div>
  );
};

export default ImageBanner;
