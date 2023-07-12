import React from 'react';
import Link from 'next/link';

import FormAccount from '@/components/FormPage/FormAccount';
import TagPage from '@/components/TagPage';

import AccountMenuMobi from './components/AccountMenuMobi';

function AccountPage() {
  return (
    <section className="xl:pt-[80px] pt-[40px] xl:px-0 px-[20px] ">
      <div className="container p-0">
        <TagPage account />

        <div className="flex justify-between gap-x-[20px] sm:flex-row flex-col gap-y-[10px]">
          <div className="hidden md:block">
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
                <span className="text-[#999999] mb-[8px] inline-block hover:text-[#DB4444] ">
                  Address Book
                </span>
              </Link>
              <Link className="nav-link " href="/account">
                <span className="text-[#999999] inline-block hover:text-[#DB4444] ">
                  My Payment Options
                </span>
              </Link>
            </div>
            <h3 className="mt-[24px] mb-[16px] leading-[24px] text-[16px]">
              My Orders
            </h3>
            <div className=" pl-[35px] inline-block">
              <Link className="nav-link " href="/account">
                <span className="text-[#999999] mb-[8px] inline-block hover:text-[#DB4444] ">
                  My Returns
                </span>
              </Link>
              <Link className="nav-link  mb-[8px]" href="/account">
                <span className="text-[#999999] inline-block hover:text-[#DB4444]">
                  My Cancellations
                </span>
              </Link>
            </div>
            <h3 className="leading-[24px] text-[16px] mt-[16px]">
              My WishList
            </h3>
          </div>
          <AccountMenuMobi />
          <div className="lg:px-[80px] sm:px-[40px] px-[10px] lg:py-[40px] py-[20px] shadow-sm lg:w-[74.3%] w-full">
            <h2 className="text-[#DB4444] text-[20px] leading-[28px] font-medium mb-[16px] inline-block">
              Edit Your Profile
            </h2>
            <FormAccount />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountPage;
