'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import classNames from 'classnames';
import Image from 'next/image';
import * as yup from 'yup';

import InputCheckBoxRHF from '@/components/InputForm/InputCheckBoxRHF';
import InputRadioRHF from '@/components/InputForm/InputRadioRHF';
import InputRHF from '@/components/InputForm/InputRHF';
import TagPage from '@/components/TagPage';

function CheckOutPage() {
  const [listProduct, setListProduct] = useState([]);
  let totalPrice = 0;

  const schema = yup
    .object({
      fisrtname: yup.string().required('Không được bỏ trống'),
      company: yup.string().required('Không được bỏ trống'),
      city: yup.string().required('Không được bỏ trống'),
      phone: yup
        .number()
        .required('Không được bỏ trống')
        .typeError('Vui Lòng nhập đúng định dạng'),
      email: yup
        .string()
        .email('Nhập đúng định dạng')
        .required('Không được bỏ trống'),
    })
    .required();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      fisrtname: '',
      company: '',
      address: '',
      optional: '',
      city: '',
      phone: '',
      email: '',
      checkbox: false,
      delivery: 1,
    },
  });

  const handlerSubmitForm = (values) => {
    console.log(
      'file: CheckOutPage.jsx:42 ~ handlerSubmitForm ~ values:',
      values
    );
  };

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        const persons = res.data;
        setListProduct(persons);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  const watchStatus = watch('delivery');
  return (
    <section className="xl:pt-[80px] pt-[40px] xl:px-0 px-[20px] ">
      <div className="container p-0">
        <TagPage />
        <div>
          <h2 className="font-inter text-[36px] leading-[30px] font-medium m-0 inline-block tracking-[1.44px]">
            Billing Details
          </h2>
          <div className="lg:mt-[43px] mt-[20px] ">
            <form
              action=""
              autoComplete="off"
              className="flex sm:flex-row flex-col justify-between gap-x-[10px]"
              onSubmit={handleSubmit(handlerSubmitForm)}
            >
              <div className="md:w-[40%] sm:w-[45%]">
                <div className="mb-[32px]">
                  <InputRHF
                    className="h-[50px]"
                    control={control}
                    name="fisrtname"
                    req="required"
                  >
                    First Name
                  </InputRHF>
                  <span className="text-[14px] text-red-500">
                    {errors?.fisrtname?.message}
                  </span>
                </div>
                <div className="mb-[32px]">
                  <InputRHF
                    className="h-[50px]"
                    control={control}
                    name="company"
                    req="required"
                  >
                    Company Name
                  </InputRHF>
                  <span className="text-[14px] text-red-500">
                    {errors?.company?.message}
                  </span>
                </div>
                <div className="mb-[32px]">
                  <InputRHF
                    className="h-[50px]"
                    control={control}
                    name="address"
                  >
                    Street Address
                  </InputRHF>
                </div>
                <div className="mb-[32px]">
                  <InputRHF
                    className="h-[50px]"
                    control={control}
                    name="optional"
                  >
                    Apartment, floor, etc. (optional)
                  </InputRHF>
                </div>
                <div className="mb-[32px]">
                  <InputRHF
                    className="h-[50px]"
                    control={control}
                    name="city"
                    req="required"
                  >
                    Town/City
                  </InputRHF>
                  <span className="text-[14px] text-red-500">
                    {errors?.city?.message}
                  </span>
                </div>
                <div className="mb-[32px]">
                  <InputRHF
                    className="h-[50px]"
                    control={control}
                    name="phone"
                    req="required"
                  >
                    Phone Number
                  </InputRHF>
                  <span className="text-[14px] text-red-500">
                    {errors?.phone?.message}
                  </span>
                </div>
                <div className="mb-[24px]">
                  <InputRHF
                    className="h-[50px]"
                    control={control}
                    name="email"
                    type="email"
                    req="required"
                  >
                    Email Address
                  </InputRHF>
                  <span className="text-[14px] text-red-500">
                    {errors?.email?.message}
                  </span>
                </div>
                <div className="">
                  <InputCheckBoxRHF
                    control={control}
                    name="checkbox"
                    className="xl:w-[24px] lg:w-[30px] w-[40px]"
                  >
                    Save this information for faster check-out next time
                  </InputCheckBoxRHF>
                </div>
              </div>
              <div className="md:w-[45%] sm:w-[50%]">
                {listProduct.length > 0 &&
                  listProduct.slice(0, 2).map((item) => {
                    totalPrice += item.price;
                    return (
                      <div key={item.id} className=" h-[54px] mb-[32px]">
                        <div className="flex items-center justify-between ">
                          <div className="flex items-center  xl:gap-x-[22px] gap-x-[10px] w-[50%] ">
                            <div className="w-[20%]">
                              <Image
                                src={item.image}
                                alt="ImageProduct"
                                width={54}
                                height={34}
                                className=" object-cover w-[54px] h-[54px]"
                              />
                            </div>
                            <span className="checkout_title w-[80%] leading-[24px]">
                              {item.title}
                            </span>
                          </div>
                          <span className="leading-[24px]">${item.price}</span>
                        </div>
                      </div>
                    );
                  })}
                <div className="mb-[32px]">
                  <div className="flex items-center justify-between font-normal pb-[16px] border-b-[1px] border-black mb-[16px]">
                    <span className="leading-[24px]">Subtotal:</span>
                    <span className="leading-[24px]">{totalPrice}</span>
                  </div>
                  <div className="flex items-center justify-between font-normal pb-[16px] border-b-[1px] border-black mb-[16px]">
                    <span className="leading-[24px]">Shipping:</span>
                    <span className="leading-[24px]">Free</span>
                  </div>
                  <div className="flex items-center justify-between font-normal">
                    <span className="leading-[24px]">Total:</span>
                    <span className="leading-[24px]">{totalPrice}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-y-[34px] mb-[32px]">
                  <div className="flex items-center justify-between">
                    <InputRadioRHF
                      name="delivery"
                      control={control}
                      value={1}
                      checked={Number(watchStatus) === 1}
                    >
                      Bank
                    </InputRadioRHF>
                    <div className="flex items-center gap-x-[8px]">
                      <Image
                        src="/image/CheckOutImage/bank1.png"
                        alt="bank1"
                        width={42}
                        height={28}
                        className="object-cover "
                      />
                      <Image
                        src="/image/CheckOutImage/bank2.png"
                        alt="bank2"
                        width={42}
                        height={28}
                        className="object-cover "
                      />
                      <Image
                        src="/image/CheckOutImage/bank3.png"
                        alt="bank3"
                        width={42}
                        height={28}
                        className="object-cover "
                      />
                      <Image
                        src="/image/CheckOutImage/bank4.png"
                        alt="bank4"
                        width={42}
                        height={28}
                        className="object-cover "
                      />
                    </div>
                  </div>
                  <InputRadioRHF
                    name="delivery"
                    control={control}
                    value={2}
                    checked={Number(watchStatus) === 2}
                  >
                    Cash on delivery
                  </InputRadioRHF>
                </div>
                <div className="flex xl:items-center justify-between xl:flex-row flex-col flex-start gap-y-[15px]">
                  <input
                    type="text"
                    className="outline-none px-[24px] py-[15px] xl:w-[300px] border-[1px] border-black "
                    placeholder="Coupon Code"
                  />
                  <button
                    aria-label="applyCoupon"
                    type="button"
                    className=" btn btn-danger mt-0 px-[48px] py-[16px]"
                  >
                    <span className="text-white leading-[24px] font-medium text-[16px]">
                      Apply Coupon
                    </span>
                  </button>
                </div>
                <div className="mt-[32px] pb-[30px] ">
                  <button
                    aria-label="placeOrdere"
                    type="submit"
                    className={classNames(
                      ' btn btn-danger mt-0 px-[48px] py-[16px]',
                      {
                        'opacity-60': isValid === false,
                      }
                    )}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckOutPage;
