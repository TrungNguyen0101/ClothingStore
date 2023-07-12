'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import * as yup from 'yup';

import Input from '@/components/InputForm';

import { AxiosPost } from '@/app/axios';

import 'react-toastify/dist/ReactToastify.css';

function FormSignIn() {
  const router = useRouter();

  const schema = yup
    .object({
      phoneNumber: yup.string().required('Không được bỏ trống'),
      password: yup.string().required('Không được bỏ trống'),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      phoneNumber: '',
      password: '',
    },
  });

  const handlerSubmitForm = async (values) => {
    const result = await AxiosPost('/api/v1.0/auth/login', values);
    if (result.data.message === 'success') {
      toast.success('Đăng nhập thành công', { autoClose: 1500 });
      localStorage.setItem('account', JSON.stringify(result.data.body));
      setTimeout(() => {
        router.push('/');
      }, 100);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      toast.error('Sai số điện thoại hoặc mật khẩu', { autoClose: 2000 });
    }
  };

  return (
    <div className="md:mt-[48px] mt-[20px] w-full ">
      <form onSubmit={handleSubmit(handlerSubmitForm)} autoComplete="off">
        <div className="mb-[40px] ">
          <Input
            className="pb-[8px]  outline-none border-b-[1px] border-[#808080]  w-full"
            control={control}
            name="phoneNumber"
            placeholder="Phone Number"
          />
          <span className="text-[14px] text-red-500">
            {errors?.phoneNumber?.message}
          </span>
        </div>
        <div className="mb-[40px] ">
          <Input
            className="pb-[8px]  outline-none border-b-[1px] border-[#808080]  w-full"
            type="password"
            name="password"
            control={control}
            placeholder="Password"
          />
          <span className="text-[14px] text-red-500">
            {errors?.password?.message}
          </span>
        </div>
        <div className="flex items-center justify-between lg:flex-row flex-col gap-y-[10px] gap-x-[10px]">
          <button
            type="submit"
            className="btn btn-primary  lg:w-auto w-full bg-red-500  inline-block hover:opacity-70 duration-200 px-[48px] py-[16px] border-0"
          >
            <span className="text-white leading-[24px] font-medium text-[16px] inline-block ">
              Log In
            </span>
          </button>

          <a href="/#" className="inline-block text-red-500 no-underline">
            Forget Password?
          </a>
        </div>
      </form>
    </div>
  );
}

export default FormSignIn;
