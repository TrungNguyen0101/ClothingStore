'use client';
import React, { useEffect, useRef, useState } from 'react';
import DropDownRight from '@/svgs/DropDownRight.svg';
import { useMediaQuery } from '@react-hook/media-query';

import Bar from '@/svgs/Bar.svg';
import Close from '@/svgs/Close.svg';
import classNames from 'classnames';

const BannerCategory = () => {
  const [active, setActive] = useState(false);
  const dropdownRef = useRef(null);

  const isMobile = useMediaQuery('(min-width: 576px)');

  const onMenuCategory = () => {
    setActive(true);
  };
  const offMenuCategory = () => {
    setActive(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-w-[20%]">
      {isMobile === true ? (
        <div className=" banner_content-category">
          <ul className="p-0 m-0 banner_list leading-[26px]">
            <li className="flex flex-row items-center justify-between md:flex-row banner_item">
              <a href="#" className="banner_item-link">
                <span data-content="Woman’s Fashion">Woman’s Fashion</span>
              </a>
              <div className="text-right ">
                <DropDownRight className="icon text-[24px]" />
              </div>
            </li>
            <li className="flex flex-row items-center justify-between md:flex-row banner_item">
              <a href="#" className="banner_item-link">
                <span data-content=" Men’s Fashion"> Men’s Fashion</span>
              </a>
              <div className="text-right">
                <DropDownRight className="icon text-[24px]" />
              </div>
            </li>
            <li className="banner_item">
              <a href="#" className="banner_item-link">
                <span data-content="Home & Lifestyle">Electronics</span>
              </a>
            </li>
            <li className="banner_item">
              <a href="#" className="banner_item-link">
                <span data-content="Home & Lifestyle">Home & Lifestyle</span>
              </a>
            </li>
            <li className="banner_item">
              <a href="#" className="banner_item-link">
                <span data-content="Medicine">Medicine</span>
              </a>
            </li>
            <li className="banner_item">
              <a href="#" className="banner_item-link">
                <span data-content="Sports & Outdoor">Sports & Outdoor</span>
              </a>
            </li>
            <li className="banner_item">
              <a href="#" className="banner_item-link">
                <span data-content="Baby’s & Toys">Baby’s & Toys</span>
              </a>
            </li>
            <li className="banner_item">
              <a href="#" className="banner_item-link">
                <span data-content="Groceries & Pets">Groceries & Pets</span>
              </a>
            </li>
            <li className="banner_item">
              <a href="#" className="banner_item-link">
                <span data-content="Health & Beauty"> Health & Beauty</span>
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <div ref={dropdownRef} className="w-[32px]">
          <Bar className="hover-icon text-[32px] " onClick={onMenuCategory} />
          <div
            className={classNames(
              'category_mobi fixed top-[0] left-0 px-[50px] pt-[40px] h-full bg-orange-400 z-40 ',
              { active: active === true }
            )}
          >
            <Close
              className="hover-icon text-[32px] absolute top-0 right-0"
              onClick={offMenuCategory}
            />
            <ul className="p-0 m-0  leading-[26px] flex flex-col gap-y-[15px]">
              <li className="banner_item">
                <a
                  href="#"
                  className="flex items-center justify-between banner_item-link hover-icon"
                >
                  <span data-content="Woman’s Fashion">Woman’s Fashion</span>
                  <DropDownRight className=" text-[24px]" />
                </a>
              </li>
              <li className="banner_item">
                <a
                  href="#"
                  className="flex items-center justify-between banner_item-link hover-icon"
                >
                  <span data-content="Men’s Fashion"> Men’s Fashion</span>
                  <DropDownRight className=" text-[24px]" />
                </a>
              </li>
              <li className="banner_item">
                <a href="#" className="banner_item-link">
                  <span data-content="Home & Lifestyle">Home & Lifestyle</span>
                </a>
              </li>
              <li className="banner_item">
                <a href="#" className="banner_item-link">
                  <span data-content="Home & Lifestyle">Home & Lifestyle</span>
                </a>
              </li>
              <li className="banner_item">
                <a href="#" className="banner_item-link">
                  <span data-content="Medicine">Medicine</span>
                </a>
              </li>
              <li className="banner_item">
                <a href="#" className="banner_item-link">
                  <span data-content="Sports & Outdoor">Sports & Outdoor</span>
                </a>
              </li>
              <li className="banner_item">
                <a href="#" className="banner_item-link">
                  <span data-content="Baby’s & Toys">Baby’s & Toys</span>
                </a>
              </li>
              <li className="banner_item">
                <a href="#" className="banner_item-link">
                  <span data-content="Groceries & Pets">Groceries & Pets</span>
                </a>
              </li>
              <li className="banner_item">
                <a href="#" className="banner_item-link">
                  <span data-content="Health & Beauty"> Health & Beauty</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default BannerCategory;
