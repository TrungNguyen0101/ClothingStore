import React from 'react';

import HeaderMain from './components/HeaderMain';
import LanguageSelect from './components/LanguageSelect';

import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="h-[48px]" />
      <section className="fixed top-0 left-0 z-20 w-full describe">
        <div className="container p-0 m-auto row max-lg:mx-0 ">
          <div className="hidden col-lg-1 xl:inline " />
          <div className="describe_desc col-lg-10 col-sm-12 col-md-10 max-sm:flex-col px-[3px] md:justify-center justify-between md:px-0 text-center">
            <h1 className="describe_desc-name leading-[18px] md:text-[14px] text-[13px]">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </h1>
            <a
              href="/"
              className="describe_desc-link max-md:text-[14px] max-lg:text-[16px] max-sm:text-[12px]"
            >
              ShopNow
            </a>
          </div>
          <LanguageSelect />
        </div>
      </section>
      <div>
        <HeaderMain />
      </div>
    </header>
  );
}

export default Header;
