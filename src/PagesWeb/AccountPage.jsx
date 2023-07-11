'use client';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';

import InputRHF from '@/components/InputForm/InputRHF';
import Bar from '@/svgs/Bar.svg';
import Close from '@/svgs/Close.svg';

const AccountPage = () => {
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const [active, setActive] = useState(false);

  const schema = yup
    .object({
      fisrtname: yup.string().required('Không được bỏ trống'),
      lastname: yup.string().required('Không được bỏ trống'),
      address: yup.string().required('Không được bỏ trống'),
      email: yup
        .string()
        .email('Nhập đúng định dạng')
        .required('Không được bỏ trống'),
      currentPassword: yup.string().required('Không được bỏ trống'),
      newPassword: yup.string().required('Không được bỏ trống'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('newPassword'), null], 'Nhập mật khẩu chưa chính xác')
        .required('Không được bỏ trống'),
    })
    .required();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      fisrtname: '',
      lastname: '',
      email: '',
      address: '',
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });
  const handlerSubmitForm = (values) => {
    console.log(
      'file: CheckOutPage.jsx:42 ~ handlerSubmitForm ~ values:',
      values
    );
  };
  const handlerCancelForm = () => {
    reset({
      fisrtname: '',
      lastname: '',
      email: '',
      address: '',
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };

  const onMenuAccount = () => {
    setActive(true);
  };
  const offMenuAccount = () => {
    console.log(1);
    setActive(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <section className="xl:pt-[80px] pt-[40px] xl:px-0 px-[20px] ">
      <div className="container p-0">
        <div className="flex lg:mb-[80px] mb-[40px]">
          <span className="flex mr-[12px]">
            <Link className="nav-link " aria-current="page" href="/">
              <span className="text-[#999999] ">Home</span>
            </Link>
          </span>

          {pathname === '/account' && (
            <span className="flex gap-x-[12px] ">
              <span className="text-[#999999]">/</span>
              <Link className="nav-link" aria-current="page" href="/account">
                My Account
              </Link>
            </span>
          )}
        </div>
        <div className="flex justify-between gap-x-[20px] sm:flex-row flex-col gap-y-[10px]">
          <div className="md:block hidden">
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
              <Link className="nav-link  " href="/account">
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
          <div ref={dropdownRef} className="md:hidden block">
            <Bar className="hover-icon text-[32px]" onClick={onMenuAccount} />
            <div
              className={classNames(
                'translate-x-[-500px] duration-300 fixed top-[0] left-0 px-[50px] pt-[40px] h-full bg-orange-400 z-40 ',
                { 'translate-x-0': active === true }
              )}
            >
              <Close
                className="hover-icon text-[32px] absolute top-0 right-0"
                onClick={offMenuAccount}
              />
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
                  <span className="text-white mb-[8px] inline-block hover:text-[#DB4444] ">
                    Address Book
                  </span>
                </Link>
                <Link className="nav-link  " href="/account">
                  <span className="text-white inline-block hover:text-[#DB4444] ">
                    My Payment Options
                  </span>
                </Link>
              </div>
              <h3 className="mt-[24px] mb-[16px] leading-[24px] text-[16px]">
                My Orders
              </h3>
              <div className=" pl-[35px] inline-block">
                <Link className="nav-link " href="/account">
                  <span className="text-white mb-[8px] inline-block hover:text-[#DB4444] ">
                    My Returns
                  </span>
                </Link>
                <Link className="nav-link  mb-[8px]" href="/account">
                  <span className="text-white inline-block hover:text-[#DB4444]">
                    My Cancellations
                  </span>
                </Link>
              </div>
              <h3 className="leading-[24px] text-[16px] mt-[16px]">
                My WishList
              </h3>
            </div>
          </div>
          <div className="lg:px-[80px] sm:px-[40px] px-[10px] lg:py-[40px] py-[20px] shadow-sm lg:w-[74.3%] w-full">
            <h2 className="text-[#DB4444] text-[20px] leading-[28px] font-medium mb-[16px] inline-block">
              Edit Your Profile
            </h2>
            <form
              action=""
              autoComplete="off"
              onSubmit={handleSubmit(handlerSubmitForm)}
            >
              <div className="grid sm:grid-cols-2 grid-cols-1 lg:gap-x-[50px] gap-x-[15px] gap-y-[24px]">
                <div>
                  <InputRHF
                    control={control}
                    name="fisrtname"
                    placeholder="Fisrt name"
                    req="required"
                  >
                    First Name
                  </InputRHF>
                  <span className="text-[14px] text-red-500">
                    {errors?.fisrtname?.message}
                  </span>
                </div>
                <div>
                  <InputRHF
                    control={control}
                    name="lastname"
                    placeholder="Last name"
                    req="required"
                  >
                    Last Name
                  </InputRHF>
                  <span className="text-[14px] text-red-500">
                    {errors?.lastname?.message}
                  </span>
                </div>
                <div>
                  <InputRHF
                    control={control}
                    name="email"
                    placeholder="Email"
                    req="required"
                  >
                    Email
                  </InputRHF>
                  <span className="text-[14px] text-red-500">
                    {errors?.email?.message}
                  </span>
                </div>
                <div>
                  <InputRHF
                    control={control}
                    name="address"
                    placeholder="Address"
                    req="required"
                  >
                    Address
                  </InputRHF>
                  <span className="text-[14px] text-red-500">
                    {errors?.address?.message}
                  </span>
                </div>
              </div>
              <div className="mt-[24px] mb-[16px]">
                <InputRHF
                  control={control}
                  name="currentPassword"
                  placeholder="Current Passwod"
                  req="required"
                >
                  Password Changes
                </InputRHF>
                <span className="text-[14px] text-red-500">
                  {errors?.currentPassword?.message}
                </span>
              </div>
              <div className="mb-[16px]">
                <InputRHF
                  control={control}
                  name="newPassword"
                  placeholder="New Passwod"
                />
                <span className="text-[14px] text-red-500">
                  {errors?.newPassword?.message}
                </span>
              </div>
              <div className="mb-[24px]">
                <InputRHF
                  control={control}
                  name="confirmPassword"
                  placeholder="Confirm New Passwod"
                />
                <span className="text-[14px] text-red-500">
                  {errors?.confirmPassword?.message}
                </span>
              </div>
              <div className="float-right">
                <button onClick={handlerCancelForm}>
                  <span>Cancel</span>
                </button>
                <button
                  type="submit"
                  className={classNames(
                    ' btn btn-danger mt-0 px-[48px] py-[16px] ml-[32px]',
                    {
                      'opacity-60': isValid === false,
                    }
                  )}
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountPage;
