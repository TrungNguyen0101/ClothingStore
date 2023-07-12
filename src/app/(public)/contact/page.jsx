import React, { lazy, memo } from 'react';

import ContactMail from '@/svgs/ContactSVG/ContactMail.svg';
import ContactPhone from '@/svgs/ContactSVG/ContactPhone.svg';

const TagPage = lazy(() => import('@/components/TagPage'));
const FormContact = lazy(() => import('@/components/FormPage/FormContact'));

function ContactPage() {
  return (
    <section className="xl:pt-[80px] pt-[40px] xl:px-0 px-[20px] ">
      <div className="container p-0">
        <TagPage />
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
          <FormContact />
        </div>
      </div>
    </section>
  );
}

export default memo(ContactPage);
