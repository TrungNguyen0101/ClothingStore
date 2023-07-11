'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

import Input from '@/components/InputForm';
import { yupResolver } from '@hookform/resolvers/yup';
import Google from '@/svgs/google.svg';

const FormSignUp = () => {
  const schema = yup
    .object({
      name: yup.string().required('Không được bỏ trống'),
      email: yup.string().required('Không được bỏ trống'),
      password: yup.string().required('Không được bỏ trống'),
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
      name: '',
      email: '',
      password: '',
    },
  });

  const handlerSubmitForm = (values) => {
    console.log(
      'file: CheckOutPage.jsx:42 ~ handlerSubmitForm ~ values:',
      values
    );
  };
  return (
    <div className="md:mt-[48px] mt-[20px] w-full max-w-[500px]">
      <form onSubmit={handleSubmit(handlerSubmitForm)} autoComplete="off">
        <div className="mb-[40px] ">
          <Input control={control} name="name" placeholder="Name" />
          <span className="text-[14px] text-red-500">
            {errors?.name?.message}
          </span>
        </div>
        <div className="mb-[40px]">
          <Input
            control={control}
            type="email"
            name="email"
            placeholder="Email or Phone Number"
          />
          <span className="text-[14px] text-red-500">
            {errors?.email?.message}
          </span>
        </div>
        <div className="mb-[40px]">
          <Input
            control={control}
            type="password"
            name="password"
            placeholder="Password"
          />
          <span className="text-[14px] text-red-500">
            {errors?.password?.message}
          </span>
        </div>
        <button
          type="submit"
          className=" btn btn-danger mt-0  py-[16px]  m-auto w-full bg-red-500   hover:opacity-70 duration-200 border-0 "
        >
          <span className="text-white leading-[24px] font-medium text-[16px] inline-block ">
            Create Account
          </span>
        </button>
        <div className="mt-[16px]">
          <button
            type="button"
            class="btn btn-danger mt-0  py-[15px] m-auto w-full border-[#000000] border-[1px] bg-white flex items-center gap-[16px] justify-center "
          >
            <Google className="text-[24px]"></Google>
            <span className="text-black">Sign up with Google</span>
          </button>
        </div>
      </form>
      <div className="mt-[34px] flex items-center justify-center gap-x-[16px] lg:flex-row flex-col">
        <span>Already have account?</span>
        <a href="/signin" className="text-black">
          Log in
        </a>
      </div>
    </div>
  );
};

export default FormSignUp;
