import React from 'react';

import ChangeLanguage from '../ChangeLanguage';

import './Header.scss';
import HeaderMobi from './HeaderMobi';

const Header = () => {
  return (
    <header className="header">
      <div className="h-[48px]"></div>
      <section className="fixed top-0 left-0 z-20 w-full describe">
        <div className="container p-0 m-auto row max-lg:mx-0 ">
          <div className="hidden col-lg-1 xl:inline "></div>
          <div className="describe_desc col-lg-10 col-sm-12 col-md-10 max-sm:flex-col px-[3px] md:justify-center justify-between md:px-0 text-center">
            <h1 className="describe_desc-name leading-[18px] md:text-[14px] text-[13px]">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </h1>
            <a
              href="#"
              className="describe_desc-link max-md:text-[14px] max-lg:text-[16px] max-sm:text-[12px]"
            >
              ShopNow
            </a>
          </div>
          <ChangeLanguage />
        </div>
      </section>
      <div>
        <HeaderMobi />
      </div>
    </header>
  );
};

export default Header;
