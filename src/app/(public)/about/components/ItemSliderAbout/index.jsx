import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Instagram from '@/svgs/AboutSVG/Instagram.svg';
import Linkedin from '@/svgs/AboutSVG/Linkedin.svg';
import Twitter from '@/svgs/AboutSVG/Twitter.svg';

function ItemSliderAbout() {
  return (
    <div>
      <div className="mb-[32px]">
        <Image
          src="/image/AboutImage/avatarAbout1.png"
          alt="avatarAbout1"
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
}

export default ItemSliderAbout;
