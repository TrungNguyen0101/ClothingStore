'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

import Input from '@/components/InputForm';
import { yupResolver } from '@hookform/resolvers/yup';
const FormSignIn = () => {
  const [listAccount, setListAccount] = useState([]);
  console.log(
    'file: FormSignIn.jsx:14 ~ FormSignIn ~ listAccount:',
    listAccount
  );
  const router = useRouter();
  let shouldStop = false;

  const schema = yup
    .object({
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
      email: '',
      password: '',
    },
  });

  //Submit Form
  const handlerSubmitForm = (values) => {
    listAccount.forEach((item) => {
      if (shouldStop) {
        return; // Dừng lặp
      }
      if (
        (item.email === values.email || item.phone === values.email) &&
        item.password === values.password
      ) {
        toast.success('Đăng nhập thành công', { autoClose: 2000 });
        sessionStorage.setItem('account', JSON.stringify(item));
        setTimeout(() => {
          router.push('/');
        }, 1700);
        shouldStop = true;
      } else {
        toast.error('Sai tài khoản khoặc mật khẩu', { autoClose: 2000 });
        shouldStop = true;
      }
    });
  };

  //Call API
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/users`)
      .then((res) => {
        const persons = res.data;
        setListAccount(persons);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="md:mt-[48px] mt-[20px] w-full ">
      <form onSubmit={handleSubmit(handlerSubmitForm)} autoComplete="off">
        <div className="mb-[40px] ">
          <Input
            control={control}
            name="email"
            placeholder="Email or Phone Number"
          />
          <span className="text-[14px] text-red-500">
            {errors?.name?.message}
          </span>
        </div>
        <div className="mb-[40px] ">
          <Input
            type="password"
            name="password"
            control={control}
            placeholder="Password"
          />
          <span className="text-[14px] text-red-500">
            {errors?.name?.message}
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
};

export default FormSignIn;
