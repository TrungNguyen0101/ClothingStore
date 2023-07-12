/* eslint-disable react/require-default-props */

'use client';

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function TagProduct({ day, text, desc, mt }) {
  const [dayLeft, setDayLeft] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const updateCountdown = () => {
      if (day === true) {
        const now = new Date();

        const currentDay = now.getDay(); // Lấy ngày trong tuần (0: Chủ nhật, 1-6: Thứ 2 - Thứ 7)
        const daysInWeek = 7;
        const daysRemaining = daysInWeek - currentDay;
        setDayLeft(daysRemaining);

        const hours1 = now.getHours();
        const newHousr = 24 - hours1;
        setHours(newHousr < 10 ? `0${newHousr}` : newHousr);

        const minutes1 = now.getMinutes();
        const newMinutes = 60 - minutes1;
        setMinutes(newMinutes < 10 ? `0${newMinutes}` : newMinutes);

        const seconds1 = now.getSeconds();
        const newSeconds = 60 - seconds1;
        setSeconds(newSeconds < 10 ? `0${newSeconds}` : newSeconds);
      }
    };
    const interval = setInterval(updateCountdown, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [day]);

  return (
    <div className="flex sm:items-end sm:flex-row flex-col items-start md:gap-x-[87px] sm:gap-x-[30px]">
      <div className="tag_title ">
        <div className="flex flex-row items-center gap-x-[16px] text-red-500 ">
          <div className="w-[20px] h-[40px] rounded bg-red-500 font-semibold leading-[20px] " />
          <span className="text-[16px] font-semibold leading-[20px] text-black">
            {text}
          </span>
        </div>
        <div className="">
          <h2
            className={`md:text-[36px] sm:text-[25px] text-[19px] font-semibold leading-[48px] tracking-[0.04em]  sm:mt-[15px] mb-0 font-inter ${
              mt === true ? 'md:mt-[24px]' : 'md:mt-[20px]'
            } `}
          >
            {desc}
          </h2>
        </div>
      </div>
      {day === true && (
        <div className="flex justify-center items-end flex-row gap-x-[38px] float-bottom font-interdescribe_desc-name">
          <div className="tag_time-day">
            <span className="text-[12px] font-medium">Days</span>
            <span className="md:text-[32px] sm:text-[25px] font-bold leading-[30px] tracking-[0.04em]">
              {`0${dayLeft || 0}`}
            </span>
          </div>
          <div className="tag_time-day">
            <span className="text-[12px] font-medium">Hours</span>
            <span className="md:text-[32px] sm:text-[25px] font-bold leading-[30px] tracking-[0.04em]">
              {hours || '00'}
            </span>
          </div>
          <div className="tag_time-day">
            <span className="text-[12px] font-medium">Minutes</span>
            <span className="md:text-[32px] sm:text-[25px] font-bold leading-[30px] tracking-[0.04em]">
              {minutes || '00'}
            </span>
          </div>
          <div className="tag_time-day">
            <span className="text-[12px] font-medium">Seconds</span>
            <span className="md:text-[32px] sm:text-[25px] font-bold leading-[30px] tracking-[0.04em]">
              {seconds || '00'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
TagProduct.propTypes = {
  day: PropTypes.bool,
  text: PropTypes.string,
  desc: PropTypes.string,
  mt: PropTypes.bool,
};

export default memo(TagProduct);
