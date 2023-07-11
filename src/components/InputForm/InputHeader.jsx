'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

import Heart from '@/svgs/Heart.svg';
import User from '@/svgs/user.svg';
import Account1 from '@/svgs/account1.svg';
import Account2 from '@/svgs/account2.svg';
import Account3 from '@/svgs/account3.svg';
import Account4 from '@/svgs/account4.svg';
import Account5 from '@/svgs/account1.svg';

import Cart from '@/svgs/Cart1.svg';
import Search from '@/svgs/Search.svg';
import classNames from 'classnames';

const InputHeader = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  let user = true;
  //   const [user, setUser] = useState({});
  //   useEffect(() => {
  //     // Perform localStorage action
  //     const item = localStorage.getItem('account');
  //     setUser(item);
  //   }, []);

  const onDropdown = (event) => {
    setOpen(!open);
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

  return (
    <div className="p-0 navs_search col-lg-5 col-md-12  max-mm:mt-[20px] max-sm:mt-[10px] max-sm:justify-center max-sm:gap-x-[4px]">
      <div className="navs_search-input">
        <input type="text" placeholder="What are you looking for?" />
        <Search className="hover-icon navs_search-icon " />
      </div>
      <div className="flex gap-x-[16px] max-sm:gap-x-[10px] ">
        <Link href="/wishlist">
          <Heart className="text-[32px] hover-icon" />
        </Link>
        <Link href="/cart">
          <Cart className="text-[32px] hover-icon" />
        </Link>
        {user !== null && (
          <div className="relative" ref={dropdownRef}>
            <User
              className={classNames('hover-icon text-[32px] cursor-pointer ', {
                active: open === true,
              })}
              onClick={onDropdown}
            />
            {open && (
              <div className="absolute top-[110%] right-[-30%] px-[15px] py-[17px] bg-gradient-to-r from-[#574158] to-[#9d9d9d]  text-white rounded-md z-20 gap-y-[15px] flex items-start justify-start flex-col w-[234px] duration-200">
                <Link
                  href="/account"
                  className="flex items-center justify-start gap-x-[16px] cursor-pointer hover:bg-slate-400 duration-200 hover:text-black hover:px-[5px] px-[5px] py-[3px] bg-transparent rounded-md w-full text-white no-underline"
                >
                  <Account1 className="hover-icon text-[32px] cursor-pointer" />
                  <span className="text-[14px] ">Manage My Account</span>
                </Link>

                <Link
                  href="/#"
                  className="flex items-center justify-start gap-x-[16px] cursor-pointer hover:bg-slate-400 duration-200 hover:text-black hover:px-[5px] px-[5px] py-[3px] bg-transparent rounded-md w-full text-white no-underline"
                >
                  <Account2 className="hover-icon text-[32px] cursor-pointer" />
                  <span className="text-[14px] whitespace-nowrap">
                    My Order
                  </span>
                </Link>
                <Link
                  href="/#"
                  className="flex items-center justify-start gap-x-[16px] cursor-pointer hover:bg-slate-400 duration-200 hover:text-black hover:px-[5px] px-[5px] py-[3px] bg-transparent rounded-md w-full text-white no-underline"
                >
                  <Account3 className="hover-icon text-[32px] cursor-pointer" />
                  <span className="text-[14px] whitespace-nowrap">
                    My Cancellations
                  </span>
                </Link>
                <Link
                  href="/#"
                  className="flex items-center justify-start gap-x-[16px] cursor-pointer hover:bg-slate-400 duration-200 hover:text-black hover:px-[5px] px-[5px] py-[3px] bg-transparent rounded-md w-full text-white no-underline"
                >
                  <Account4 className="hover-icon text-[32px] cursor-pointer" />
                  <span className="text-[14px] whitespace-nowrap">
                    My Reviews
                  </span>
                </Link>
                <Link
                  href="/#"
                  className="flex items-center justify-start gap-x-[16px] cursor-pointer hover:bg-slate-400 duration-200 hover:text-black hover:px-[5px] px-[5px] py-[3px] bg-transparent rounded-md w-full text-white no-underline"
                >
                  <Account5 className="hover-icon text-[32px] cursor-pointer" />
                  <span className="text-[14px] whitespace-nowrap">Logout</span>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputHeader;
