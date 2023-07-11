import React from 'react';
import FormSignIn from '@/components/FormAuthen/FormSignIn';
import Image from 'next/image';

const SignInPage = () => {
  return (
    <section>
      {/* <div className="signup md:pt-[59px] pt-[30px] ">
        <div className="container flex justify-between p-0 h-[805px] relative">
          <div className="sm:w-[60%] w-full absolute left-[-50%] max-w-[805px] max-h-[781px]">
            <Image
              src="/image/signUp.png"
              alt=""
              className="relative object-cover w-full"
              fill={true}
            />
          </div>
          <div className="absolute right-0 top-[50%]">
            <div className="flex flex-col items-center justify-center w-full sm:w-auto md:items-start">
              <h2 className="xl:text-[36px] lg:text-[28px] md:text-[25px] sm:text-[34px] text-[20px]  font-medium xl:tracking-[0.07rem] leading-[30px] mb-[24px]">
                Log in to Exclusive
              </h2>
              <span>Enter your details below</span>
              <FormSignIn />
            </div>
          </div>
        </div>
      </div> */}
      <div className="signup md:pt-[59px] pt-[30px] ">
        <div className="container flex sm:flex-row flex-col items-center justify-center   xl:max-w-[1305px] gap-y-6 sm:justify-between m-0  px-[20px] sm:pl-0 gap-x-10">
          <div className="sm:w-[60%] w-full">
            <Image
              src="/image/signUp.png"
              alt=""
              className="relative object-cover w-full"
              fill={true}
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full sm:w-auto md:items-start">
            <h2 className="xl:text-[36px] lg:text-[28px] md:text-[25px] sm:text-[28px] text-[20px]  font-medium xl:tracking-[0.07rem] leading-[30px] mb-[24px]">
              Log in to Exclusive
            </h2>
            <span>Enter your details below</span>
            <FormSignIn />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
