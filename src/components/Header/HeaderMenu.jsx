'use client';
import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HeaderMenu = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname();

  return (
    <ul className="p-0 abc navs_menu nav nav-underline flex gap-x-[48px] max-sm:gap-x-[10px] max-sm:mb-[15px]">
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
  );
};

export default HeaderMenu;
