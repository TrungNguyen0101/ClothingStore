/* eslint-disable react/require-default-props */

'use client';

import React, { memo, useEffect, useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';

import { AxiosGet } from '@/app/axios';

import styled from './TagPage.module.scss';

function TagPage({ about = '', account = '' }) {
  const pathname = usePathname();
  const [user, setUser] = useState({});

  const splitArray = pathname.split('/').filter(Boolean);
  const arrPath = splitArray.map(
    (item) => item.charAt(0).toUpperCase() + item.slice(1)
  );
  useEffect(() => {
    async function getUser() {
      const result = await AxiosGet('/api/v1.0/users/me');
      setUser(result.data.body);
    }
    getUser();
  }, []);

  return (
    <div
      className={classNames(
        'flex sm:flex-row flex-col sm:items-center items-start sm:justify-between gap-y-[20px]',
        {
          'lg:mb-[42px] mb-[22px]': about,
          'lg:mb-[80px] mb-[40px]': !about,
        }
      )}
    >
      <div className="flex">
        <span className="flex mr-[12px]  leading-[21px] ">
          <Link className="nav-link " aria-current="page" href="/">
            <span className="text-[#000000]">Home</span>
          </Link>
        </span>
        {arrPath.length > 0 &&
          arrPath.map((path, index) => {
            let accumulatedPath = '';
            for (let i = 0; i <= index; i += 1) {
              accumulatedPath += `/${arrPath[i].toLowerCase()}`;
            }
            return (
              <span
                className={classNames(
                  'relative flex gap-x-[12px]  leading-[21px]',
                  styled.tagPage_path
                )}
                key={path}
              >
                <Link
                  className={classNames(
                    'nav-link pl-[20px] pr-[12px] text-[#0606ff]'
                  )}
                  aria-current="page"
                  href={
                    index !== arrPath.length - 1 ? accumulatedPath : pathname
                  }
                >
                  <span
                    className={classNames('', {
                      'text-[#040000]': index !== arrPath.length - 1,
                    })}
                  >
                    {path}
                  </span>
                </Link>
              </span>
            );
          })}
      </div>
      {account && (
        <span className="text-[14px] leading-[21px]">
          Welcome! <b className="text-blue-600">{user?.fullName}</b>
        </span>
      )}
    </div>
  );
}

TagPage.propTypes = {
  about: PropTypes.bool,
  account: PropTypes.bool,
};
export default memo(TagPage);
