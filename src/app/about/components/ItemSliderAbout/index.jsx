import Image from 'next/image';
import React from 'react';

import Instagram from '@/svgs/Instagram.svg';
import Twitter from '@/svgs/Twitter.svg';
import Linkedin from '@/svgs/Linkedin.svg';
import Link from 'next/link';
const ItemSliderAbout = () => {
  return (
    <div>
      <div className="mb-[32px]">
        <Image
          src="/image/avatarAbout1.png"
          alt=""
          width={370}
          height={430}
          className="xl:max-w-[370px] h-[430px] object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-[8px]">
        <h2 className="text-[32px] leading-[30px] font-inter font-medium m-0 inline-block ">
          Tom Cruise
        </h2>
        <span>Founder & Chairman</span>
        <div className="flex gap-x-[16px] mt-[8px]">
          <Link href="/about" target="_blank">
            <Twitter className="text-[24px]" />
          </Link>
          <Link href="/about" target="_blank">
            <Instagram className="text-[24px]" />
          </Link>
          <Link href="/about" target="_blank">
            <Linkedin className="text-[24px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemSliderAbout;
