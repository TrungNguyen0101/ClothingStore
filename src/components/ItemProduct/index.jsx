import Image from 'next/image';
import React from 'react';
import Eye from '@/svgs/eye.svg';
import Heart from '@/svgs/Heart.svg';
import Start from '@/svgs/start.svg';

const ItemProduct = ({ sale, number, color, money, className, ourProduct }) => {
  return (
    <div
      className={`product_item ${className} flex flex-col select-none w-full`}
    >
      <div className="relative product_item-show">
        <div className="cursor-pointer activeShow">
          <a href="#" className="text-white no-underline">
            Add To Cart
          </a>
        </div>
        <div className="product_item-image xl:max-w-[270px] h-[250px]  object-bottom">
          <Image
            src="/image/2.png"
            alt=""
            width={500}
            height={250}
            className="object-cover w-full  object-bottom"
          />
        </div>
        {sale === true && <span className="product_item-discount ">-40%</span>}
        <div className="product_item-icon">
          <div className="product_item-icon-eye hover-icon">
            <a href="#">
              <Eye className="icon " />
            </a>
          </div>
          <div className="product_item-icon-heart hover-icon">
            <a href="#">
              <Heart className="icon " />
            </a>
          </div>
        </div>
      </div>

      {ourProduct ? (
        <div className="mt-[16px] flex flex-col gap-y-[8px]">
          <span className="text-[17px] font-medium leading-[24px] ourProduct">
            HAVIT HV-G92 Gamepad
          </span>
          <div className="flex items-center gap-x-[8px] text-[16px]">
            <div className="product_item-number">
              <span>{`$${money || 100}`}</span>
            </div>
            <div className="flex items-center ">
              <Start className="icon text-[20px]" />
              <Start className="icon text-[20px]" />
              <Start className="icon text-[20px]" />
              <Start className="icon text-[20px]" />
              <Start className="icon text-[20px]" />
              <Start className="icon text-[20px]" />
              <span className="ml-[8px] text-[14px]  leading-[20px]">
                {number || '(10)'}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col gap-y-[8px] h-[100%] mt-[16px]">
          <span className="text-[17px] font-medium leading-[24px]">
            HAVIT HV-G92 Gamepad
          </span>
          <div className="mt-auto">
            <div className="product_item-number">
              <span>{`$${money || 100}`}</span>
              <span className="text-[#666666] line-through">$160</span>
            </div>
            <div className="flex items-center mt-[7px]">
              <Start className="icon text-[20px]" />
              <Start className="icon text-[20px]" />
              <Start className="icon text-[20px]" />
              <Start className="icon text-[20px]" />
              <Start className="icon text-[20px]" />
              <Start className="icon text-[20px]" />
              <span className="ml-[8px] text-[14px] leading-[20px]">
                {number || '(10)'}
              </span>
            </div>
          </div>
        </div>
      )}
      {color === true && (
        <div className="flex flex-row gap-x-[8px] mt-[8px]  ">
          <div className="relative product_item-circle active"></div>
          <div className="product_item-circle"></div>
        </div>
      )}
    </div>
  );
};

export default ItemProduct;
