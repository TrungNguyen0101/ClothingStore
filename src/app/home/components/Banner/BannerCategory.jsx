'use client';

import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Bar from '@/svgs/HomeSVG/Bar.svg';
import Close from '@/svgs/HomeSVG/Close.svg';
import DropDownRight from '@/svgs/HomeSVG/DropDownRight.svg';

import styled from './Banner.module.scss';

function BannerCategory({ category }) {
  const [active, setActive] = useState(false);
  const dropdownRef = useRef(null);

  const onMenuCategory = useCallback(() => {
    setActive(true);
  }, []);
  const offMenuCategory = useCallback(() => {
    setActive(false);
  }, []);

  const handleClickOutside = useCallback((event) => {
    if (!dropdownRef?.current?.contains(event.target)) {
      setActive(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="min-w-[15%] border-[#000000]  lg:border-r-[1px] lg:pr-[16px]  border-r-0 pr-0 pt-[40px]">
      <div className="md:inline-block hidden w-full mr-[16px]">
        <ul
          className="p-0 m-0 leading-[26px] lg:flex lg:flex-col
          gap-y-[16px] relative  lg:items-none lg:place-items-initial lg:text-start grid grid-cols-4 gap-x-[20px] text-center place-content-center"
        >
          {category.length > 0 &&
            category.map((item) => (
              <li
                key={item._id}
                className={classNames(
                  'hoverLi flex flex-row items-center justify-between md:flex-row banner_item lg:text-start relative',
                  styled.bannerItem
                )}
              >
                <a
                  href="/"
                  className={classNames(
                    'inline-block w-full break-words text-[16px] text-black wrap ',
                    styled.bannerItem_link
                  )}
                >
                  <span
                    className="inline-block leading-[24px]"
                    data-content="Woman’s Fashion"
                  >
                    {item.name}
                  </span>
                </a>
                {item.childCategories.length > 0 && (
                  <div className="text-right ">
                    <DropDownRight className="icon text-[24px]" />
                  </div>
                )}
                {item.childCategories.length > 0 &&
                  item?.childCategories?.map((result) => (
                    <div
                      key={item._id}
                      className={classNames(
                        'childCategory  absolute xl:right-[-65%] lg:right-[-60%] md:right-[-50%] z-50 bg-slate-800 text-white px-[20px] py-[2px] rounded-md',
                        styled.childCategory
                      )}
                    >
                      <span>{result.name}</span>
                    </div>
                  ))}
              </li>
            ))}
        </ul>
      </div>

      <div ref={dropdownRef} className="w-[32px] inline-block md:hidden">
        <button aria-label="onMenu" type="button" onClick={onMenuCategory}>
          <Bar className="hover-icon text-[32px] " />
        </button>
        <div
          className={classNames(
            'fixed top-[0] left-0 px-[50px] pt-[40px] h-full bg-orange-400 z-40 duration-500',
            { 'translate-x-0': active === true },
            { 'translate-x-[-500px]': active === false }
          )}
        >
          <button aria-label="offMenu" type="button" onClick={offMenuCategory}>
            <Close className="hover-icon text-[32px] absolute top-0 right-0" />
          </button>
          <ul className="p-0 m-0  leading-[26px] flex flex-col gap-y-[15px]">
            <li className={classNames(styled.bannerItem)}>
              <a
                href="/"
                className={classNames(
                  'flex items-center justify-between text-[16px] text-black hover-icon',
                  styled.bannerItem_link
                )}
              >
                <span
                  className="inline-block leading-[24px]"
                  data-content="Woman’s Fashion"
                >
                  Woman’s Fashion
                </span>
                <DropDownRight className=" text-[24px]" />
              </a>
            </li>
            <li className={classNames(styled.bannerItem)}>
              <a
                href="/"
                className={classNames(
                  'flex items-center justify-between text-[16px] text-black hover-icon',
                  styled.bannerItem_link
                )}
              >
                <span
                  className="inline-block leading-[24px]"
                  data-content="Men’s Fashion"
                >
                  Men’s Fashion
                </span>
                <DropDownRight className=" text-[24px]" />
              </a>
            </li>
            <li className={classNames(styled.bannerItem)}>
              <a
                href="/"
                className={classNames(
                  'text-[16px] text-black',
                  styled.bannerItem_link
                )}
              >
                <span
                  className="inline-block leading-[24px]"
                  data-content="Home & Lifestyle"
                >
                  Home & Lifestyle
                </span>
              </a>
            </li>
            <li className={classNames(styled.bannerItem)}>
              <a
                href="/"
                className={classNames(
                  'text-[16px] text-black',
                  styled.bannerItem_link
                )}
              >
                <span
                  className="inline-block leading-[24px]"
                  data-content="Home & Lifestyle"
                >
                  Home & Lifestyle
                </span>
              </a>
            </li>
            <li className={classNames(styled.bannerItem)}>
              <a
                href="/"
                className={classNames(
                  'text-[16px] text-black',
                  styled.bannerItem_link
                )}
              >
                <span
                  className="inline-block leading-[24px]"
                  data-content="Medicine"
                >
                  Medicine
                </span>
              </a>
            </li>
            <li className={classNames(styled.bannerItem)}>
              <a
                href="/"
                className={classNames(
                  'text-[16px] text-black',
                  styled.bannerItem_link
                )}
              >
                <span
                  className="inline-block leading-[24px]"
                  data-content="Sports & Outdoor"
                >
                  Sports & Outdoor
                </span>
              </a>
            </li>
            <li className={classNames(styled.bannerItem)}>
              <a
                href="/"
                className={classNames(
                  'text-[16px] text-black',
                  styled.bannerItem_link
                )}
              >
                <span
                  className="inline-block leading-[24px]"
                  data-content="Baby’s & Toys"
                >
                  Baby’s & Toys
                </span>
              </a>
            </li>
            <li className={classNames(styled.bannerItem)}>
              <a
                href="/"
                className={classNames(
                  'text-[16px] text-black',
                  styled.bannerItem_link
                )}
              >
                <span
                  className="inline-block leading-[24px]"
                  data-content="Groceries & Pets"
                >
                  Groceries & Pets
                </span>
              </a>
            </li>
            <li className={classNames(styled.bannerItem)}>
              <a
                href="/"
                className={classNames(
                  'text-[16px] text-black',
                  styled.bannerItem_link
                )}
              >
                <span
                  className="inline-block leading-[24px]"
                  data-content="Health & Beauty"
                >
                  {' '}
                  Health & Beauty
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
BannerCategory.propTypes = {
  category: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};
export default memo(BannerCategory);
