'use client';

import React, { useCallback, useState } from 'react';

import Heart from '@/svgs/HeaderSVG/Heart.svg';
import Minus from '@/svgs/ProductSVG/Minus.svg';
import Plus from '@/svgs/ProductSVG/Plus.svg';

function ProductNumber() {
  const [count, setCount] = useState(0);
  const handlerMinus = useCallback(() => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  }, [count]);
  const handlerPlus = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <div className="flex xl:items-center gap-x-[13px] mb-[37px] xl:flex-row flex-col items-start gap-y-[15px]">
      <div className="flex items-center">
        <button
          aria-label="Minus"
          type="button"
          className="flex items-center justify-center rounded-l-[4px] hover:bg-[#DB4444] w-[40px] h-[44px]  border-[1px] hover:border-transparent border-[#000000] hover-iconDetail duration-500"
          onClick={handlerMinus}
        >
          <Minus className="text-[24px] duration-500" />
        </button>
        <input
          type="text"
          defaultValue={0}
          value={count}
          disabled
          className="w-[80px] py-[8px] border-t-[1px] border-b-[1px] outline-none 
                border-[#000000] bg-white text-center text-[20px] leading-[28px] inline-block h-[44px]"
        />
        <button
          aria-label="plus"
          type="button"
          className="flex items-center justify-center rounded-r-[4px] hover:bg-[#DB4444] w-[40px] h-[44px]  border-[1px] hover:border-transparent border-[#000000] hover-iconDetail duration-500"
          onClick={handlerPlus}
        >
          <Plus className="text-[24px] duration-500" />
        </button>
      </div>
      <div className="flex items-center">
        <button
          aria-label="buy"
          type="submit"
          className=" mt-0 px-[48px] py-[10px] bg-[#DB4444] rounded-[4px] hover:opacity-60 duration-500"
        >
          <span className="leading-[24px] text-[16px] font-medium inline-block text-white">
            Buy Now
          </span>
        </button>
        <Heart className="hover-iconDetail text-[40px] p-[4px]  border-[1px] border-[#000000] rounded-[4px] hover:bg-[#DB4444] hover:border-transparent duration-500 ml-[19px]" />
      </div>
    </div>
  );
}

export default ProductNumber;
