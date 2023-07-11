import React from 'react';
import FormSignUp from '@/components/FormAuthen/FormSignUp';
import Image from 'next/image';
const SignUpPage = () => {
  return (
    <section>
      <div className="signup  md:pt-[60px] pt-[30px]">
        <div className="container row xl:max-w-[1305px] gap-y-6 max-w-[1070px] m-0 xl:px-0 px-[20px]">
          <div className="col-xl-8 col-md-7 col-12 p-x-[20px] xl:w-[71.5%] md:p-0">
            <Image
              src="/image/signUp.png"
              alt=""
              className="object-cover"
              width={805}
              height={781}
            />
          </div>
          <div className="p-0 col-xl-0 xl:w-0 col-md-1"></div>
          <div className="col-xl-3 col-md-4 col-12 p-0 xl:w-[28.5%] flex justify-center flex-col m-auto items-center md:items-start">
            <h2 className="xl:text-[34px] lg:text-[28px] md:text-[25px] sm:text-[34px] text-[20px]  font-medium tracking-[4%] leading-[30px] mb-[24px] ">
              Create an account
            </h2>
            <span>Enter your details below</span>
            <FormSignUp></FormSignUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
