'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const index = ({ ...props }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname();
  return (
    <div className="flex lg:mb-[42px] mb-[22px]">
      <span className="flex mr-[12px]  leading-[21px] ">
        <Link className="nav-link " aria-current="page" href="/">
          <span className="text-[#999999]">Home</span>
        </Link>
      </span>
      {pathname === '/about' && (
        <span className="flex gap-x-[12px]  leading-[21px]">
          <span className="text-[#999999]">/</span>
          <Link className="nav-link" aria-current="page" href="/about">
            <span>About</span>
          </Link>
        </span>
      )}
    </div>
  );
};

export default index;
