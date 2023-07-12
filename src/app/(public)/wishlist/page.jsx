'use client';

import React, { memo } from 'react';

import WishListItem from '@/app/(public)/wishlist/components/WishListItem';
import { AxiosGet } from '@/app/axios';

import TagWishList from './components/TagWishList';

async function getProduct() {
  try {
    const res = await AxiosGet(`/api/v1.0/products?perPage=20&page=1&sort=1`);
    const data = await res?.data?.body?.items;
    return { data };
  } catch (error) {
    return error;
  }
}
async function WishListPage() {
  const result = await getProduct();

  return (
    <section className="wishlist lg:pt-[80px]  pt-[40px]">
      <div className="container p-0">
        <div>
          <TagWishList />
          <WishListItem status data={result} />
        </div>
        <div className="tag_title xl:mt-[80px] mt-[40px]">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-x-[16px] text-red-500 ">
              <div className="w-[20px] h-[40px] rounded bg-red-500 font-semibold leading-[20px] " />
              <span className="text-[20px] leading-[26px] text-black">
                Just For You{' '}
              </span>
            </div>
            <button
              aria-label="Seeall"
              type="button"
              className="btn btn-primary px-[48px] py-[15px] border-black  bg-white m-0 duration-300 hover:opacity-60 "
            >
              <a
                href="/"
                className="text-black no-underline leading-[24px] inline-block"
              >
                See All
              </a>
            </button>
          </div>
          <WishListItem status={false} data={result} />
        </div>
      </div>
    </section>
  );
}

export default memo(WishListPage);
