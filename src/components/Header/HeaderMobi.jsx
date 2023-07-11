'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

import HeaderMenu from './HeaderMenu';
import InputHeader from '../InputForm/InputHeader';
import DropdownBottom from '@/svgs/DropdownBottom.svg';
import DropdownTop from '@/svgs/DropdownTop.svg';

const HeaderMobi = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const onOpenDown = () => {
    setOpen(true);
  };
  const onCloseDown = () => {
    setOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const pathname = usePathname();
  return (
    <div className="container p-0 sm:mt-[40px] mt-[70px] gy-sm-2 gy-lg-0">
      <section className="container hidden p-0 mx-auto sm:flex navs row gy-sm-2 gy-lg-0">
        <div className="flex items-center justify-between p-0 col-lg-7 col-md-12 max-sm:flex-col">
          <h2 className="p-0 sm:m-0 navs_title max-sm:mb-[15px] font-inter">
            Exclusive
          </h2>
          <HeaderMenu />
        </div>
        <InputHeader />
      </section>
      <div className="block sm:hidden px-[15px]">
        <div ref={dropdownRef} className="w-full">
          {!open ? (
            <div
              onClick={onOpenDown}
              className="flex z-[20] w-[32px] cursor-pointer"
            >
              <DropdownBottom className="flex z-[-20] text-[32px]" />
            </div>
          ) : (
            <div
              onClick={onCloseDown}
              lassName="flex z-[20] w-[32px] cursor-pointer"
            >
              <DropdownTop className="flex z-[-20] text-[32px]" />
            </div>
          )}
          <div
            className={classNames(' rounded-lg duration-500 select-none', {
              'h-[150px] opacity-100 bg-orange-500 p-[10px] visible z-20 ':
                open === true,
              'py-0 px-[10px] h-0 opacity-0 z-[-10] invisible': open === false,
            })}
          >
            <div className="m-auto text-center">
              <h2 className="p-0 sm:m-0 navs_title max-sm:mb-[15px] font-inter">
                Exclusive
              </h2>
              <ul className="p-0 abc navs_menu nav nav-underline flex gap-x-[48px] max-sm:gap-x-[10px] max-sm:mb-[15px] justify-center">
                <li className="nav-item">
                  <Link
                    className={classNames('nav-link', {
                      active: pathname == '/',
                    })}
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={classNames('nav-link', {
                      active: pathname == '/contact',
                    })}
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={classNames('nav-link', {
                      active: pathname == '/about',
                    })}
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={classNames('nav-link', {
                      active: pathname == '/signup',
                    })}
                    href="/signup"
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
              <InputHeader />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobi;
