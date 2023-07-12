'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import InputRHF from '@/components/InputForm/InputRHF';
import InputTextareaRHF from '@/components/InputForm/InputTextareaRHF';

function FormContact() {
  const schema = yup
    .object({
      yourname: yup.string().required('Không được bỏ trống'),
      youremail: yup
        .string()
        .email('Nhập đúng định dạng')
        .required('Không được bỏ trống'),
      yourphone: yup
        .number()
        .required('Không được bỏ trống')
        .typeError('Vui Lòng nhập đúng định dạng'),
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
      yourname: '',
      youremail: '',
      yourphone: '',
      message: '',
    },
  });
  const handlerSubmitForm = (values) => {
    console.log(
      'file: CheckOutPage.jsx:42 ~ handlerSubmitForm ~ values:',
      values
    );
  };
  return (
    <div className="lg:pt-[32px] lg:pb-[40px] py-[20px] lg:px-[31px] px-[10px] shadow-lg w-full">
      <form
        action=""
        autoComplete="off"
        onSubmit={handleSubmit(handlerSubmitForm)}
      >
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-x-[16px] gap-y-[32px]">
          <div>
            <InputRHF
              control={control}
              name="yourname"
              placeholder="Your Name *"
            />

            <span className="text-[14px] text-red-500">
              {errors?.yourname?.message}
            </span>
          </div>
          <div>
            <InputRHF
              control={control}
              name="youremail"
              placeholder="Your Email *"
            />

            <span className="text-[14px] text-red-500">
              {errors?.youremail?.message}
            </span>
          </div>
          <div>
            <InputRHF
              control={control}
              name="yourphone"
              placeholder="Your Phone *"
            />
            <span className="text-[14px] text-red-500">
              {errors?.yourphone?.message}
            </span>
          </div>
        </div>
        <div className="mb-[32px] mt-[24px]">
          <InputTextareaRHF
            control={control}
            name="yourmessage"
            placeholder="Your Massage"
          />
        </div>
        <div className="inline-block float-right">
          <button
            type="submit"
            className=" btn btn-danger mt-0 px-[47px] py-[15px]"
          >
            <span className="leading-[24px] text-[16px] font-medium inline-block">
              Send Massage
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormContact;
