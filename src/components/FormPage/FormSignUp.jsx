'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as yup from 'yup';

import { AxiosPost } from '@/app/axios';
import Google from '@/svgs/HomeSVG/google.svg';

import Input from '../InputForm';

import 'react-toastify/dist/ReactToastify.css';

function FormSignUp() {
  const router = useRouter();

  const schema = yup
    .object({
      fullName: yup.string().required('Không được bỏ trống'),
      email: yup.string().required('Không được bỏ trống'),
      phoneNumber: yup
        .string()
        .matches(/^0/, 'Số điện thoại phải bắt đầu bằng số 0')
        .min(10, 'Số điện thoại phải có ít nhất 10 chữ số')
        .required('Không được bỏ trống')
        .typeError('Vui lòng nhập đúng định dạng'),
      password: yup.string().required('Không được bỏ trống'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Nhập mật khẩu chưa chính xác')
        .required('Không được bỏ trống'),
      birthday: yup
        .date()
        .required('Không được bỏ trống')
        .max(
          new Date(Date.now() - 18 * 365 * 24 * 60 * 60 * 1000),
          'Ngày sinh phải lớn hơn 18 tuổi'
        )
        .min(
          new Date(Date.now() - 150 * 365 * 24 * 60 * 60 * 1000),
          'Ngày sinh phải nhỏ hơn 150 tuổi'
        )
        .typeError('Vui lòng nhập đúng định dạng'),
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
      fullName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      birthday: '',
    },
  });

  const handlerSubmitForm = async (values) => {
    try {
      const originalDate = new Date(values?.birthday);
      // Lấy các thành phần ngày, tháng, năm
      const year = originalDate.getFullYear();
      const month = (originalDate.getMonth() + 1).toString().padStart(2, '0');
      const day = originalDate.getDate().toString().padStart(2, '0');
      // Tạo chuỗi ngày mới theo định dạng yyyy-mm-d
      const formattedDate = `${year}-${month}-${day}`;
      const newValues = { ...values };
      newValues.birthday = formattedDate;
      newValues.phoneNumber = values.phoneNumber;

      const result = await AxiosPost('/api/v1.0/auth/register', newValues);

      toast.success(result.data.message);
      setTimeout(() => {
        router.push('/signin');
      }, 1500);
    } catch (error) {
      // toast.error(error?.response?.data?.message);
      toast.error('Thông tin chưa chính xác', { autoClose: 1500 });
    }
  };
  return (
    <div className="md:mt-[48px] mt-[20px] w-full max-w-[500px]">
      <form onSubmit={handleSubmit(handlerSubmitForm)} autoComplete="off">
        <div className="mb-[30px]">
          <Input
            className="pb-[8px] mb-[10px] outline-none border-b-[1px] border-[#808080]  w-full"
            control={control}
            name="fullName"
            placeholder="Full Name"
          />
          <span className="text-[14px] text-red-500">
            {errors?.fullName?.message}
          </span>
        </div>
        <div className="mb-[30px]">
          <Input
            className="pb-[8px] mb-[10px] outline-none border-b-[1px] border-[#808080]  w-full"
            control={control}
            type="email"
            name="email"
            placeholder="Email"
          />
          <span className="text-[14px] text-red-500">
            {errors?.email?.message}
          </span>
        </div>
        <div className="mb-[30px]">
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
        <div className="mb-[30px]">
          <Input
            className="pb-[8px]  outline-none border-b-[1px] border-[#808080]  w-full"
            control={control}
            type="password"
            name="password"
            placeholder="Password"
          />
          <span className="text-[14px] text-red-500">
            {errors?.password?.message}
          </span>
        </div>
        <div className="mb-[30px]">
          <Input
            className="pb-[8px]  outline-none border-b-[1px] border-[#808080]  w-full"
            control={control}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          <span className="text-[14px] text-red-500">
            {errors?.confirmPassword?.message}
          </span>
        </div>
        <div className="mb-[30px]">
          <Input
            className="pb-[8px]  outline-none border-b-[1px] border-[#808080]  w-full"
            control={control}
            type="date"
            name="birthday"
          />
          <span className="text-[14px] text-red-500">
            {errors?.birthday?.message}
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
            className="btn btn-danger mt-0  py-[15px] m-auto w-full border-[#000000] border-[1px] bg-white flex items-center gap-[16px] justify-center "
          >
            <Google className="text-[24px]" />
            <span className="text-black">Sign up with Google</span>
          </button>
        </div>
      </form>
      <div className="mt-[34px] flex items-center justify-center gap-x-[16px] lg:flex-row flex-col">
        <span>Already have account?</span>
        <Link href="/signin" className="text-black">
          Log in
        </Link>
      </div>
    </div>
  );
}

export default FormSignUp;
