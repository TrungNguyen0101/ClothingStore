import React, { memo } from 'react';
import Image from 'next/image';

import IconFacebook from '@/svgs/FooterSVG/Icon-Facebook.svg';
import Instagram from '@/svgs/FooterSVG/icon-instagram.svg';
import Linkedin from '@/svgs/FooterSVG/Icon-Linkedin.svg';
import Twitter from '@/svgs/FooterSVG/Icon-Twitter.svg';
import Send from '@/svgs/FooterSVG/send.svg';

function Footer() {
  return (
    <footer className=" xl:mt-[140px] lg:mt-[70px] md:mt-[50px] mt-[20px] bg-black break-words min-h-[372px] ">
      <div className="container px-0 ">
        <div className="md:pt-[80px] pt-[40px] md:pb-[60px] pb-[30px] text-white xl:flex xl:flex-row xl:gap-x-[85px] grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  sm:text-start text-center    gap-y-[40px] gap-x-[50px] ">
          <div className="flex flex-col sm:gap-y-[16px] gap-y-[6px] xl:w-[24.5%] sm:text-start">
            <h2 className="sm:text-[24px] text-[32px] font-bold font-inter">
              Exclusive
            </h2>
            <h3 className="sm:text-[20px] text-[26px] font-medium">
              Subscribe
            </h3>
            <span className="sm:text-[16px] text-[18px] leading-[24px] font-normal ">
              Get 10% off your first order
            </span>
            <div className="relative sm:w-full w-[250px] m-auto">
              <input
                type="text"
                className="outline-none border-[2px]  w-full rounded-md bg-transparent pl-[9px] py-[10px] pr-[35px]"
                placeholder="Enter your email"
              />
              <Send className="absolute  right-[10px]  top-[50%] translate-y-[-50%] text-[24px]" />
            </div>
          </div>
          <div className="flex flex-col gap-y-[16px] xl:w-[18.5%] sm:text-start">
            <h2 className="sm:text-[20px] text-[26px] font-bold">Support</h2>
            <span>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</span>
            <span>exclusive@gmail.com</span>
            <span>+88015-88888-9999</span>
          </div>
          <div className="flex flex-col gap-y-[16px] xl:w-[15%] sm:text-start">
            <h2 className="sm:text-[20px] text-[26px] font-bold">Account</h2>
            <span>My Account</span>
            <span>Login / Register</span>
            <span>Cart</span>
            <span>Wishlist</span>
            <span>Shop</span>
          </div>
          <div className="flex flex-col gap-y-[16px] xl:w-[14%] sm:text-start">
            <h2 className="sm:text-[20px] text-[26px] font-bold">Quick Link</h2>
            <span>Privacy Policy</span>
            <span>Terms Of Use</span>
            <span>FAQ</span>
            <span>Contact</span>
          </div>
          <div className="flex flex-col gap-y-[16px] xl:w-[23%] sm:text-start">
            <h2 className="sm:text-[20px] text-[26px] font-bold">
              Download App
            </h2>
            <span className="text-[12px] leading-[18px] inline-block">
              Save $3 with App New User Only
            </span>
            <div className="flex gap-x-[13px] sm:justify-start justify-center">
              <Image
                width={76}
                height={76}
                src="/image/FooterImage/QR.png"
                alt="QR"
                className="object-cover"
              />
              <div className="flex flex-col gap-y-[12px]">
                <Image
                  width={104}
                  height={500}
                  src="/image/FooterImage/gg.png"
                  alt="gg"
                  className="object-cover"
                />
                <Image
                  width={104}
                  height={500}
                  src="/image/FooterImage/apple_app.png"
                  alt="apple_app"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex items-center sm:justify-start justify-center gap-x-[20px]">
              <IconFacebook className="text-[24px]" />
              <Twitter className="text-[24px]" />
              <Instagram className="text-[24px]" />
              <Linkedin className="text-[24px]" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
