'use client';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

const TagProduct = ({ day, text, desc, mt }) => {
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
    <div className="flex sm:items-end sm:flex-row flex-col items-start md:gap-x-[87px] sm:gap-x-[30px]">
      <div className="tag_title ">
        <div className="flex flex-row items-center gap-x-[16px] text-red-500 ">
          <div className="w-[20px] h-[40px] rounded bg-red-500 font-semibold leading-[20px] "></div>
          <span className="text-[16px] font-semibold leading-[20px]">
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
        <div className="tag_time float-bottom font-interdescribe_desc-name">
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
};

export default TagProduct;
