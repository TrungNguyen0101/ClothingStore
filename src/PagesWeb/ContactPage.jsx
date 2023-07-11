'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useRef, useState } from 'react';

import ContactPhone from '@/svgs/ContactPhone.svg';
import ContactMail from '@/svgs/ContactMail.svg';
import InputRHF from '@/components/InputForm/InputRHF';
import InputTextareaRHF from '@/components/InputForm/InputTextareaRHF';
const ContactPage = () => {
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const [active, setActive] = useState(false);

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
      //   address: yup.string().required('Không được bỏ trống'),
      //   currentPassword: yup.string().required('Không được bỏ trống'),
      //   newPassword: yup.string().required('Không được bỏ trống'),
      //   confirmPassword: yup
      //     .string()
      //     .oneOf([yup.ref('newPassword'), null], 'Nhập mật khẩu chưa chính xác')
      //     .required('Không được bỏ trống'),
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
    <section className="xl:pt-[80px] pt-[40px] xl:px-0 px-[20px] ">
      <div className="container p-0">
        <div className="flex lg:mb-[80px] mb-[40px]">
          <span className="flex mr-[12px]">
            <Link className="nav-link " aria-current="page" href="/">
              <span className="text-[#999999] ">Home</span>
            </Link>
          </span>
          {pathname === '/contact' && (
            <span className="flex gap-x-[12px] ">
              <span className="text-[#999999]">/</span>
              <Link className="nav-link" aria-current="page" href="/contact">
                Cantact
              </Link>
            </span>
          )}
        </div>
        <div className="flex lg:flex-row flex-col items-stretch  xl:gap-x-[30px] gap-x-[10px] gap-y-[20px]">
          <div className="flex lg:flex-col sm:flex-row flex-col lg:justify-start sm:justify-between justify-center  shadow-lg lg:px-[35px] px-[15px] lg:py-[40px] py-[20px] lg:max-w-[29%] ">
            <div className="flex flex-col lg:pb-[32px]  lg:border-b-[1px] border-black mb-[32px] lg-w-auto w-full">
              <div className="flex items-center gap-x-[16px] mb-[24px]">
                <ContactPhone className="text-[40px]" />
                <span>Call To Us</span>
              </div>
              <span className="text-[14px] font-normal leading-[21px] mb-[16px] ">
                We are available 24/7, 7 days a week.
              </span>
              <span className="text-[14px] font-normal leading-[21px] ">
                Phone: +8801611112222
              </span>
            </div>
            <div className="flex flex-col w-full lg-w-auto ">
              <div className="flex items-center gap-x-[16px] mb-[24px]">
                <ContactMail className="text-[40px]" />
                <span>Write To US</span>
              </div>
              <span className="text-[14px] font-normal leading-[21px] mb-[16px]">
                Fill out our form and we will contact you within 24 hours.
              </span>
              <span className="text-[14px] font-normal leading-[21px] mb-[16px] ">
                Emails: customer@exclusive.com
              </span>
              <span className="text-[14px] font-normal leading-[21px] ">
                Emails: support@exclusive.com
              </span>
            </div>
          </div>
          <div className="lg:pt-[32px] lg:pb-[40px] py-[20px] lg:px-[31px] px-[10px] shadow-lg">
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
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
