'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import classNames from 'classnames';
import Link from 'next/link';

import { AxiosGet } from '@/app/axios';
import Account1 from '@/svgs/HeaderSVG/account1.svg';
import Account2 from '@/svgs/HeaderSVG/account2.svg';
import Account3 from '@/svgs/HeaderSVG/account3.svg';
import Account4 from '@/svgs/HeaderSVG/account4.svg';
import Account5 from '@/svgs/HeaderSVG/account5.svg';
import Cart from '@/svgs/HeaderSVG/Cart1.svg';
import Heart from '@/svgs/HeaderSVG/Heart.svg';
import Search from '@/svgs/HeaderSVG/Search.svg';
import User from '@/svgs/HeaderSVG/user.svg';

import 'react-toastify/dist/ReactToastify.css';

function InputHeader() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(0);
  const [wishList, setWishList] = useState(0);

  const onDropdown = () => {
    setOpen(!open);
  };

  const hanlderLogout = () => {
    localStorage.removeItem('account');
    sessionStorage.removeItem('YourCart');
    sessionStorage.removeItem('YourWishList');
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  const handleClickOutside = (event) => {
    if (!dropdownRef?.current?.contains(event.target)) {
      setOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem('account');
      setUser(item);
    }
  }, []);

  useEffect(() => {
    async function getLength() {
      const sessionWishList = sessionStorage.getItem('YourWishList');
      const myCart = await AxiosGet('/api/v1.0/carts/me');

      // const uniqueProducts = myCart?.data?.body?.products.filter(
      //   (item, index, self) => {
      //     return (
      //       index === self.findIndex((t) => t.product._id === item.product._id)
      //     );
      //   }
      // );
      setCart(myCart?.data?.body?.products.length);

      if (sessionWishList !== null) {
        const uniqueArray = JSON.parse(sessionWishList)?.data?.filter(
          (value, index, self) => {
            return self.indexOf(value) === index;
          }
        );
        setWishList(uniqueArray.length);
      }
    }
    getLength();
  }, []);

  return (
    <div className="p-0 navs_search col-lg-5 col-md-12  max-mm:mt-[20px] max-sm:mt-[10px] max-sm:justify-center max-sm:gap-x-[4px]">
      <div className="navs_search-input">
        <input type="text" placeholder="What are you looking for?" />
        <Search className="hover-icon navs_search-icon " />
      </div>
      <div className="flex gap-x-[16px] max-sm:gap-x-[10px] ml-[24px]">
        <a href="/wishlist" className="relative ">
          <Heart className="text-[32px] hover-icon" />
          <span className=" absolute top-[-5px] right-0 w-[18px] h-[18px] text-center rounded-full bg-red-500 text-[12px] text-white flex items-center justify-center">
            {wishList}
          </span>
        </a>

        <Link href="/cart" className="relative">
          <Cart className="text-[32px] hover-icon" />
          <span className=" absolute top-[-5px] right-0 w-[18px] h-[18px] text-center rounded-full bg-red-500 text-[12px] text-white flex items-center justify-center">
            {cart}
          </span>
        </Link>

        {user !== null && (
          <div className="relative" ref={dropdownRef}>
            <button aria-label="user" type="button" onClick={onDropdown}>
              <User
                className={classNames(
                  'hover-icon text-[32px] cursor-pointer ',
                  {
                    active: open === true,
                  }
                )}
              />
            </button>
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
                <button
                  aria-label="account"
                  type="button"
                  href="/#"
                  onClick={hanlderLogout}
                  className="flex items-center justify-start gap-x-[16px] cursor-pointer hover:bg-slate-400 duration-200 hover:text-black hover:px-[5px] px-[5px] py-[3px] bg-transparent rounded-md w-full text-white no-underline"
                >
                  <Account5 className="hover-icon text-[32px] cursor-pointer" />
                  <span className="text-[14px] whitespace-nowrap">Logout</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default InputHeader;
