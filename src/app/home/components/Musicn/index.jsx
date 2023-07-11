'use client';
import { inter } from '@/app/layout';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import './Music.scss';
const Music = () => {
  const [dayLeft, setDayLeft] = useState(null);
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();

      const currentDay = now.getDay(); // Lấy ngày trong tuần (0: Chủ nhật, 1-6: Thứ 2 - Thứ 7)
      const daysInWeek = 7;
      const daysRemaining = daysInWeek - currentDay;
      setDayLeft(daysRemaining);

      const hours = now.getHours();
      const newHousr = 24 - hours;
      setHours(newHousr < 10 ? `0${newHousr}` : newHousr);

      const minutes = now.getMinutes();
      const newMinutes = 60 - minutes;
      setMinutes(newMinutes < 10 ? `0${newMinutes}` : newMinutes);

      const seconds = now.getSeconds();
      const newSeconds = 60 - seconds;
      setSeconds(newSeconds < 10 ? `0${newSeconds}` : newSeconds);
    };
    // Cập nhật thời gian đếm ngược mỗi giây
    const interval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <section
      className={`container music lg:pt-[69px] lg:pb-[69px] lg:px-[60px] sm:py-[30px] sm:px-[40px] lg:flex-row flex-col py-[10px] px-[10px] xl:mt-[140px] lg:mt-[70px] md:mt-[50px] mt-[20px]`}
    >
      <div className="text-white music_item ">
        <h4 className="text-[#00FF66] font-semibold leading-[20px] text-[16px] m-0">
          Categories
        </h4>
        <h2 className="lg:text-[48px] md:text-[37px] font-semibold lg:leading-[60px] leading-[40px] lg:tracking-[0.04em] tracking-[0.02em] whitespace-pre-wrap mx-0 mt-[32px] font-inter">
          Enhance Your Music Experience
        </h2>
        <div className="music_time mt-[32px] flex lg:gap-x-[24px] sm:gap-x-[40px] gap-x-[5px]  lg:justify-start">
          <div className="px-[16px] py-[12px] bg-white rounded-[100%] text-black flex flex-col items-center">
            <span className="font-semibold leading-5">{dayLeft || '00'}</span>
            <span className="text-[11px] font-normal leading-[18px]">Days</span>
          </div>
          <div className="px-[16px] py-[12px] bg-white rounded-[100%] text-black flex flex-col items-center">
            <span className="font-semibold leading-5">{hours || '00'}</span>
            <span className="text-[11px] font-normal leading-[18px]">
              Hours
            </span>
          </div>
          <div className="px-[16px] py-[12px] bg-white rounded-[100%] text-black flex flex-col items-center">
            <span className="font-semibold leading-5">{minutes || '00'}</span>
            <span className="text-[11px] font-normal leading-[18px]">
              Hours
            </span>
          </div>
          <div className="px-[16px] py-[12px] bg-white rounded-[100%] text-black flex flex-col items-center">
            <span className="font-semibold leading-5">{seconds || '00'}</span>
            <span className="text-[11px] font-normal leading-[18px]">
              Hours
            </span>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-danger bg-[#00FF66]  mt-[40px] font-medium hover:bg-[#f56666] "
          >
            Buy Now!
          </button>
        </div>
      </div>
      <div className="music_image">
        <Image src="/image/Loa.png" alt="" width={500} height={500} />
      </div>
    </section>
  );
};

export default Music;
