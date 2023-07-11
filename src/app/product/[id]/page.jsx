'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import classNames from 'classnames';

import Start from '@/svgs/start.svg';
import Minus from '@/svgs/Minus.svg';
import Plus from '@/svgs/Plus.svg';
import Heart from '@/svgs/Heart.svg';
import Return from '@/svgs/Return.svg';
import Delivery from '@/svgs/Delivery.svg';
import '@/app/home/components/styledHome/Product.scss';
import TagProduct from '@/components/TagProduct';
import ItemProduct from '@/components/ItemProduct';
const page = ({ params, ...props }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [size, setSize] = useState('M');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [count, setCount] = useState(0);

  const hanlderChangeSize = (size) => {
    setSize(size);
  };

  const handlerMinus = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  const handlerPlus = () => {
    setCount(count + 1);
  };
  return (
    <section className="xl:pt-[80px] pt-[40px] xl:px-0 px-[20px] ">
      <div className="container p-0">
        <div className="flex lg:mb-[80px] mb-[40px]">
          <span className="flex mr-[12px]">
            <Link className="nav-link " aria-current="page" href="/">
              <span className="text-[#999999] ">Home</span>
            </Link>
          </span>
          {pathname === `/product/${params.id}` && (
            <span className="flex gap-x-[12px] ">
              <span className="text-[#999999]">/</span>
              <Link className="nav-link" aria-current="page" href="/contact">
                {params.id}
              </Link>
            </span>
          )}
        </div>
        <div className="flex gap-x-[70px] justify-between lg:flex-row flex-col gap-y-[30px]">
          <div className="flex sm:flex-row gap-x-[30px] flex-col gap-y-[20px]">
            <div className="sm:flex gap-y-[16px] flex-col gap-x-[10px] grid grid-cols-2   place-items-center">
              <Image
                src="/image/product1.png"
                width={170}
                height={138}
                alt=""
                className="object-cover"
              />
              <Image
                src="/image/product2.png"
                width={170}
                height={138}
                alt=""
                className="object-cover"
              />
              <Image
                src="/image/product3.png"
                width={170}
                height={138}
                alt=""
                className="object-cover"
              />
              <Image
                src="/image/product4.png"
                width={170}
                height={138}
                alt=""
                className="object-cover"
              />
            </div>
            <Image
              src="/image/product.png"
              width={500}
              height={600}
              alt=""
              className="object-cover"
            />
          </div>
          <div className="flex items-start flex-col lg:max-w-[34.2%] sm:w-[70%] lg:mx-0">
            <h3 className="font-semibold text-[24px] leading-[24px] mb-[16px] ">
              Havic HV G-92 Gamepad
            </h3>
            <div className="flex sm:items-center items-start mb-[16px] sm:flex-row flex-col gap-y-[10px]">
              <div className="flex ">
                <Start className="icon text-[20px]" />
                <Start className="icon text-[20px]" />
                <Start className="icon text-[20px]" />
                <Start className="icon text-[20px]" />
                <Start className="icon text-[20px]" />
                <Start className="icon text-[20px]" />
              </div>
              <span className="sm:ml-[8px] text-[14px]  leading-[21px] text-[#808080] pr-[16px] border-[#808080] sm:border-r-[1px] sm:mr-[16px]">
                {props.number || '(150 Reviews)'}
              </span>
              <span className=" text-[14px]  leading-[21px] text-[#00FF66]">
                In Stock
              </span>
            </div>
            <span className="text-[24px] leading-[24px] font-inter tracking-[0.03em] mb-[24px]">
              {props.money || '$192.00'}
            </span>
            <p className=" text-[14px]  leading-[21px] pb-[24px] border-[#808080] border-b-[1px] mb-[24px]">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
            <div className="flex gap-x-[24px] items-center mb-[24px]">
              <span className="font-inter text-[20px] leading-[20px]">
                Colours:
              </span>
              <div className="flex flex-row gap-x-[8px] ">
                <div className="relative product_item-circle active"></div>
                <div className="product_item-circle bg-[#E07575]"></div>
              </div>
            </div>
            <div className="flex gap-x-[24px] items-center mb-[24px]">
              <span className="font-inter text-[20px] leading-[20px]">
                Size:
              </span>
              <div className="flex items-center gap-x-[8px]">
                <span
                  className={classNames(
                    'text-[14px] leading-[21px] font-medium text-[#000000] flex items-center justify-center cursor-pointer border-[#000000] border-[1px] rounded-md w-[32px] h-[32px]',
                    {
                      'bg-[#DB4444] text-white border-[#DB4444]': size === 'SX',
                    }
                  )}
                  onClick={() => hanlderChangeSize('SX')}
                >
                  XS
                </span>
                <span
                  className={classNames(
                    'text-[14px] leading-[21px] font-medium text-[#000000] flex items-center justify-center cursor-pointer border-[#000000] border-[1px] rounded-md w-[32px] h-[32px]',
                    {
                      'bg-[#DB4444] text-white border-[#DB4444]': size === 'S',
                    }
                  )}
                  onClick={() => hanlderChangeSize('S')}
                >
                  S
                </span>
                <span
                  className={classNames(
                    'text-[14px] leading-[21px] font-medium text-[#000000] flex items-center justify-center cursor-pointer border-[#000000] border-[1px] rounded-md w-[32px] h-[32px]',
                    {
                      'bg-[#DB4444] text-white border-[#DB4444]': size === 'M',
                    }
                  )}
                  onClick={() => hanlderChangeSize('M')}
                >
                  M
                </span>
                <span
                  className={classNames(
                    'text-[14px] leading-[21px] font-medium text-[#000000] flex items-center justify-center cursor-pointer border-[#000000] border-[1px] rounded-md w-[32px] h-[32px]',
                    {
                      'bg-[#DB4444] text-white border-[#DB4444]': size === 'L',
                    }
                  )}
                  onClick={() => hanlderChangeSize('L')}
                >
                  L
                </span>
                <span
                  className={classNames(
                    'text-[14px] leading-[21px] font-medium text-[#000000] flex items-center justify-center cursor-pointer border-[#000000] border-[1px] rounded-md w-[32px] h-[32px]',
                    {
                      'bg-[#DB4444] text-white border-[#DB4444]': size === 'XL',
                    }
                  )}
                  onClick={() => hanlderChangeSize('XL')}
                >
                  XL
                </span>
              </div>
            </div>
            <div className="flex xl:items-center gap-x-[13px] mb-[37px] xl:flex-row flex-col items-start gap-y-[15px]">
              <div className="flex items-center">
                <button
                  className="flex items-center justify-center rounded-l-[4px] hover:bg-[#DB4444] w-[40px] h-[44px]  border-[1px] hover:border-transparent border-[#000000] hover-iconDetail duration-500"
                  onClick={handlerMinus}
                >
                  <Minus className="text-[24px] duration-500" />
                </button>
                <input
                  type="text"
                  defaultValue={0}
                  value={count}
                  disabled={true}
                  className="w-[80px] py-[8px] border-t-[1px] border-b-[1px] outline-none 
                border-[#000000] bg-white text-center text-[20px] leading-[28px] inline-block h-[44px]"
                />
                <button
                  className="flex items-center justify-center rounded-r-[4px] hover:bg-[#DB4444] w-[40px] h-[44px]  border-[1px] hover:border-transparent border-[#000000] hover-iconDetail duration-500"
                  onClick={handlerPlus}
                >
                  <Plus className="text-[24px] duration-500" />
                </button>
              </div>
              <div className="flex items-center">
                <button
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
            <div className="py-[24px]  border-[1px] border-[#000000] w-full">
              <div className="flex gap-x-[16px] items-center pb-[16px] px-[16px] sm:flex-row flex-col">
                <Delivery className="text-[40px]" />
                <div className="flex flex-col gap-y-[8px] sm:items-start items-center sm:text-start text-center">
                  <span className="leading-[24px] text-[16px]">
                    Free Delivery
                  </span>
                  <a
                    href="#"
                    className="leading-[18px] text-[12px] text-[#000000] sm:text-start"
                  >
                    Enter your postal code for Delivery Availability
                  </a>
                </div>
              </div>
              <div className="border-b-[1px] border-[#000000] "></div>
              <div className="flex gap-x-[16px] items-center pt-[16px] px-[16px] sm:flex-row flex-col">
                <Return className="text-[40px]" />
                <div className="flex flex-col gap-y-[8px] sm:items-start items-center sm:text-start text-center">
                  <span className="leading-[24px] text-[16px]">
                    Return Delivery
                  </span>
                  <span className="leading-[18px] text-[12px] text-[#000000]">
                    Free 30 Days Delivery Returns.{' '}
                    <a
                      className="leading-[18px] text-[12px] text-[#000000]"
                      href="#"
                    >
                      Details
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mt-[140px] md:mt-[70px] sm:mt-[30px] mt-[20px]">
          <TagProduct day={false} mt={true} text="Related Item" />
          <div className="sm:mt-[60px] mt-[30px] grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-[30px]">
            <ItemProduct sale={true} />
            <ItemProduct sale={true} />
            <ItemProduct sale={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
