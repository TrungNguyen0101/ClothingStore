import Image from 'next/image';
import React from 'react';

import Start from '@/svgs/start.svg';
import Delete from '@/svgs/delete.svg';

import '../../app/home/components/styledHome/Product.scss';

const WishListProduct = ({ newPro, sale, className, ...props }) => {
  return (
    <div className={`product_item ${className} flex flex-col`}>
      <div className="relative product_item-show">
        <div className="cursor-pointer activeShow">
          <a href="#" className="text-white no-underline">
            Add To Cart
          </a>
        </div>
        <div className="product_item-image">
          <Image
            src={props.image}
            alt=""
            width={270}
            height={250}
            className="object-contain w-[270px] h-[250px]"
          />
        </div>
        {sale === true && <span className="product_item-discount ">-50%</span>}
        {newPro === true && (
          <span className="product_item-discount bg-green-500">NEW</span>
        )}
        <div className="product_item-icon">
          <div className="product_item-icon-eye">
            <a href="#">
              <Delete className="text-[34px]" />
            </a>
          </div>
        </div>
      </div>
      <span className="text-[16px] font-medium leading-[24px] mt-[16px] mb-[8px] wishlist_title">
        {props.title}
      </span>
      <div className="product_item-number mt-auto">
        <span className="">{`$${props.price || 100}`}</span>
        {sale === true && (
          <span className="text-[#666666] line-through">{`$${
            props.price * 2 || 100
          }`}</span>
        )}
      </div>
      {props.start && (
        <div className="flex items-center mt-[8px]">
          <Start className="icon text-[20px]" />
          <Start className="icon text-[20px]" />
          <Start className="icon text-[20px]" />
          <Start className="icon text-[20px]" />
          <Start className="icon text-[20px]" />
          <Start className="icon text-[20px]" />
          <span className="ml-[8px]">{`${props.count || '(10)'} `}</span>
        </div>
      )}
    </div>
  );
};

export default WishListProduct;
