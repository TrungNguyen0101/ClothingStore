import Link from 'next/link';
import React from 'react';

const Error404 = () => {
  return (
    <section className="xl:pt-[80px] pt-[40px] xl:px-0 px-[20px] ">
      <div className="container p-0">
        <div className="flex lg:mb-[140px] mb-[70px]">
          <span className="flex mr-[12px]">
            <Link className="nav-link " aria-current="page" href="/">
              <span className="text-[#999999] ">Home</span>
            </Link>
          </span>
          <span className="flex text-[#999999] gap-x-[12px] mr-[12px]">
            <span>/</span>
            <span className=" text-black">404 Error</span>
          </span>
        </div>
        <div className="flex items-center flex-col justify-center">
          <div className="mx-auto text-center inline-block md:mb-[80px] mb-[40px]">
            <h1 className="xl:text-[110px] md:text-[80px] text-[60px] xl:leading-[115px] leading-[70px] font-inter font-medium mb-[40px]">
              404 Not Found
            </h1>
            <span className="text-[16px] leading-[24px]">
              Your visited page not found. You may go home page.
            </span>
          </div>
          <div className="inline-block">
            <div className=" btn btn-danger mt-0 px-[47px] py-[15px]">
              <Link href="/">
                <span className="leading-[24px] text-[16px] font-medium inline-block text-white">
                  Send Massage
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error404;
