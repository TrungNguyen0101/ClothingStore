import WishListItem from '@/components/WishListItem';
import React from 'react';

const WishListPage = () => {
  return (
    <section className="wishlist lg:pt-[80px]  pt-[40px]">
      <div className="container p-0">
        <div>
          <div className="flex flex-row items-center justify-between xl:mb-[60px] mb-[30px]">
            <span className="text-[20px] leading-[26px]">Wishlist </span>
            <button
              type="button"
              className=" btn-primary px-[48px] py-[16px]  border-black border-[1px] bg-white m-0 duration-300 hover:opacity-60 "
            >
              <a
                href="#"
                className="text-black no-underline leading-[24px] inline-block"
              >
                Move All To Bag
              </a>
            </button>
          </div>
          <WishListItem status={true} />
        </div>
        <div className="tag_title xl:mt-[80px] mt-[40px]">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-x-[16px] text-red-500 ">
              <div className="w-[20px] h-[40px] rounded bg-red-500 font-semibold leading-[20px] "></div>
              <span className="text-[20px] leading-[26px]">Just For You </span>
            </div>
            <button
              type="button"
              className="btn btn-primary px-[48px] py-[15px] border-black  bg-white m-0 duration-300 hover:opacity-60 "
            >
              <a
                href="#"
                className="text-black no-underline leading-[24px] inline-block"
              >
                See All
              </a>
            </button>
          </div>
          <WishListItem status={false} />
        </div>
      </div>
    </section>
  );
};

export default WishListPage;
