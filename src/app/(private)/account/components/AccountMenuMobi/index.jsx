'use client';

import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import Bar from '@/svgs/HomeSVG/Bar.svg';
import Close from '@/svgs/HomeSVG/Close.svg';

function AccountMenuMobi() {
  const dropdownRef = useRef(null);
  const [active, setActive] = useState(false);

  const onMenuAccount = (e) => {
    e.preventDefault();
    setActive(true);
  };
  const offMenuAccount = () => {
    setActive(false);
  };

  const handleClickOutside = (event) => {
    if (!dropdownRef?.current?.contains(event?.target)) {
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
    <div ref={dropdownRef} className="md:hidden block w-[32px]">
      <button
        aria-label="onMenu"
        type="button"
        onClick={(e) => onMenuAccount(e)}
      >
        <Bar className="hover-icon text-[32px] " />
      </button>
      <div
        className={classNames(
          ' duration-300 fixed top-[0] left-0 px-[50px] pt-[40px] h-full bg-orange-400 z-40 ',
          { 'translate-x-0': active === true },
          { 'translate-x-[-500px]': active === false }
        )}
      >
        <button aria-label="offMenu" type="button" onClick={offMenuAccount}>
          <Close className="hover-icon text-[32px] absolute top-0 right-0" />
        </button>
        <h3 className="leading-[24px] text-[16px] mb-[16px]">
          Manage My Account
        </h3>
        <div className=" pl-[35px] inline-block duration-200">
          <Link className="nav-link " href="/account">
            <span className="text-[#DB4444]  mb-[8px] inline-block ">
              My Profile
            </span>
          </Link>
          <Link className="nav-link  mb-[8px]" href="/account">
            <span className="text-white mb-[8px] inline-block hover:text-[#DB4444] ">
              Address Book
            </span>
          </Link>
          <Link className="nav-link " href="/account">
            <span className="text-white inline-block hover:text-[#DB4444] ">
              My Payment Options
            </span>
          </Link>
        </div>
        <h3 className="mt-[24px] mb-[16px] leading-[24px] text-[16px]">
          My Orders
        </h3>
        <div className=" pl-[35px] inline-block">
          <Link className="nav-link " href="/account">
            <span className="text-white mb-[8px] inline-block hover:text-[#DB4444] ">
              My Returns
            </span>
          </Link>
          <Link className="nav-link  mb-[8px]" href="/account">
            <span className="text-white inline-block hover:text-[#DB4444]">
              My Cancellations
            </span>
          </Link>
        </div>
        <h3 className="leading-[24px] text-[16px] mt-[16px]">My WishList</h3>
      </div>
    </div>
  );
}

export default AccountMenuMobi;
