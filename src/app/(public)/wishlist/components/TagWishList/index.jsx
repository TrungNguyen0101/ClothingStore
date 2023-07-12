'use client';

import React, { useEffect, useState } from 'react';

function TagWishList() {
  const [countWishList, setCountWishList] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const sessionWishList = JSON.parse(
        sessionStorage.getItem('YourWishList')
      );
      setCountWishList(sessionWishList?.data?.length);
    }
  }, []);
  return (
    <div className="flex flex-row items-center justify-between xl:mb-[60px] mb-[30px]">
      <span className="text-[20px] leading-[26px]">
        Wishlist ({countWishList || 0})
      </span>
      <button
        aria-label="MoveAll"
        type="button"
        className=" btn-primary px-[48px] py-[16px]  border-black border-[1px] bg-white m-0 duration-300 hover:opacity-60 "
      >
        <a
          href="/"
          className="text-black no-underline leading-[24px] inline-block"
        >
          Move All To Bag
        </a>
      </button>
    </div>
  );
}

export default TagWishList;
