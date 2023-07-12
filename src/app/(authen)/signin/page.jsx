import React from 'react';
import { ToastContainer } from 'react-toastify';
import Image from 'next/image';

import FormSignIn from '@/components/FormPage/FormSignIn';

import 'react-toastify/dist/ReactToastify.css';

function SignInPage() {
  return (
    <section>
      <div className="signup md:pt-[60px] pt-[30px] ">
        <div className="container flex sm:flex-row flex-col items-center justify-center   xl:max-w-[1305px] gap-y-6 sm:justify-between m-0  px-[20px] xl:px-0 sm:pl-0 gap-x-10">
          <div className="sm:w-[61.7%] w-full max-h-[781px]">
            <Image
              src="/image/SignImage/signUp.png"
              alt="signUp"
              className="relative object-cover w-full max-h-[781px]"
              fill
            />
          </div>
          <div className="xl:w-[28.4%] flex flex-col items-center justify-center w-full sm:w-auto md:items-start">
            <h2 className="xl:text-[36px] lg:text-[28px] md:text-[25px] sm:text-[28px] text-[20px]  font-medium xl:tracking-[1.44px] leading-[30px] mb-[24px] font-inter">
              Log in to Exclusive
            </h2>
            <span>Enter your details below</span>
            <FormSignIn />
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default SignInPage;
