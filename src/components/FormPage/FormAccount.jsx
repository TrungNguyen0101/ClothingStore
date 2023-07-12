'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import * as yup from 'yup';

import { AxiosGet, AxiosPut } from '@/app/axios';

import InputRHF from '../InputForm/InputRHF';

import 'react-toastify/dist/ReactToastify.css';

function FormAccount() {
  const [user, setUser] = useState({});
  const schema = yup
    .object({
      fullName: yup.string().required('Không được bỏ trống'),
      phoneNumber: yup.string().required('Không được bỏ trống'),
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
    reset,
    setValue,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      currentPassword: '',
      newPassword: '',
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

      await AxiosPut('/api/v1.0/users/me', {
        fullName: newValues.fullName,
        phoneNumber: newValues.phoneNumber,
        birthday: newValues.birthday,
        avatar: '123',
      });
      await AxiosPut('/api/v1.0/users/me/password', {
        password: newValues.currentPassword,
        newPassword: newValues.newPassword,
        confirmPassword: newValues.confirmPassword,
      });
      toast.success('Cập nhập thành công', { autoClose: 1300 });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error(error?.response?.data?.message, { autoClose: 1300 });
    }
  };
  const handlerCancelForm = () => {
    reset({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };

  useEffect(() => {
    async function getUser() {
      const result = await AxiosGet('/api/v1.0/users/me');
      setUser(result.data.body);
    }
    getUser();
  }, []);

  useEffect(() => {
    setValue('fullName', user.fullName, { shouldTouch: true });
    setValue('email', user.email, { shouldTouch: true });
    setValue('phoneNumber', user.phoneNumber, { shouldTouch: true });
    setValue('birthday', user.birthday, { shouldTouch: true });
  }, [setValue, user.birthday, user.email, user.fullName, user.phoneNumber]);

  return (
    <form
      action=""
      autoComplete="off"
      onSubmit={handleSubmit(handlerSubmitForm)}
    >
      <div className="grid sm:grid-cols-2 grid-cols-1 lg:gap-x-[50px] gap-x-[15px] gap-y-[24px]">
        <div>
          <InputRHF
            control={control}
            name="fullName"
            placeholder="Full name"
            req="required"
            defaultValues={getValues('fullName')}
          >
            Full Name
          </InputRHF>
          <span className="text-[14px] text-red-500">
            {errors?.fullName?.message}
          </span>
        </div>
        <div>
          <InputRHF
            control={control}
            type="date"
            name="birthday"
            req="required"
          >
            Birthday
          </InputRHF>
          <span className="text-[14px] text-red-500">
            {errors?.birthday?.message}
          </span>
        </div>
        <div>
          <InputRHF
            control={control}
            name="phoneNumber"
            placeholder="Phone"
            disabled
          >
            Phone
          </InputRHF>
          <span className="text-[14px] text-red-500">
            {errors?.phoneNumber?.message}
          </span>
        </div>

        <div>
          <InputRHF control={control} name="email" placeholder="Email" disabled>
            Email
          </InputRHF>
          <span className="text-[14px] text-red-500">
            {errors?.email?.message}
          </span>
        </div>
      </div>
      <div className="mt-[24px] mb-[16px]">
        <InputRHF
          type="password"
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
          type="password"
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
          type="password"
          name="confirmPassword"
          placeholder="Confirm New Passwod"
        />
        <span className="text-[14px] text-red-500">
          {errors?.confirmPassword?.message}
        </span>
      </div>
      <div className="float-right">
        <button type="button" onClick={handlerCancelForm}>
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
          Save Changes
        </button>
      </div>
    </form>
  );
}

export default FormAccount;
