import React, { lazy } from 'react';
import Image from 'next/image';

import AboutIcon1 from '@/svgs/AboutSVG/about_icon1.svg';
import AboutIcon2 from '@/svgs/AboutSVG/about_icon2.svg';
import AboutIcon3 from '@/svgs/AboutSVG/about_icon3.svg';
import AboutIcon4 from '@/svgs/AboutSVG/about_icon4.svg';

const Services = lazy(() => import('@/app/home/components/Servicesn'));
const SliderAbout = lazy(() =>
  import('@/app/(public)/about/components/SliderAbout')
);
const TagPage = lazy(() => import('@/components/TagPage'));

function AboutPage() {
  return (
    <section className="xl:pt-[80px] pt-[40px] xl:px-0 px-[20px] relative overflow-hidden">
      <div className="container p-0 ">
        <TagPage about />
        <div className="  lg:mt-[42px] mt-[22px] m-0 flex items-center lg:gap-x-[75px] gap-x-[45px] p-0 md:flex-row flex-col">
          <div className="flex flex-col 1">
            <h1 className="sm:text-[54px] text-[40px] leading-[64px] font-semibold tracking-[0.04em] md:mb-[40px] mb-[20px]">
              Our Story
            </h1>
            <p className="leading-[26px] font-normal mb-[24px]">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p className="leading-[26px] font-normal mb-[24px]">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="md:w-[49%] w-full">
            <div className="md:w-[50vw] w-full ">
              <Image
                src="/image/AboutImage/ourStory.png"
                alt="ourStory"
                fill
                className="relative object-cover w-full max-h-[609px] "
              />
            </div>
          </div>
        </div>
        <div className="xl:mt-[140px] lg:mt-[70px] md:mt-[50px] mt-[20px]">
          <div className="p-0">
            <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-x-[30px] gap-x-[10px] sm:flex-row flex-col gap-y-[20px]">
              <div className="flex items-center flex-col text-center py-[31px] border-[1px] border-[#7D8184] md:px-[15px] px-[10px]   rounded-[4px] hover-iconAbout xl:min-h-[230px] ">
                <AboutIcon1 className="p-[9px] bg-black object-cover rounded-full border-[11px] border-[#c1c0c1] text-[80px] duration-500" />
                <h2 className="text-[32px] leading-[30px] font-semibold sm:mt-[24px] mt-[5px] sm:mb-[8px] mb-[5px] ">
                  10.5k
                </h2>
                <span className="xl:text-[16px] lg:text-[28px] text-[20px]">
                  Sallers active our site
                </span>
              </div>
              <div className="flex items-center flex-col text-center py-[31px] border-[1px] border-[#7D8184] md:px-[15px] px-[10px]   rounded-[4px] hover-iconAbout xl:min-h-[230px] ">
                <AboutIcon2 className="p-[9px] bg-black object-cover rounded-full border-[11px] border-[#c1c0c1] text-[80px] duration-500" />
                <h2 className="text-[32px] leading-[30px] font-semibold sm:mt-[24px] mt-[5px] sm:mb-[8px] mb-[5px] ">
                  45.5k
                </h2>
                <span className="xl:text-[16px] lg:text-[28px] text-[20px]">
                  Customer active in our site
                </span>
              </div>
              <div className="flex items-center flex-col text-center py-[31px] border-[1px] border-[#7D8184] md:px-[15px] px-[10px]   rounded-[4px] hover-iconAbout xl:min-h-[230px] ">
                <AboutIcon3 className="p-[9px] bg-black object-cover rounded-full border-[11px] border-[#c1c0c1] text-[80px] duration-500" />
                <h2 className="text-[32px] leading-[30px] font-semibold sm:mt-[24px] mt-[5px] sm:mb-[8px] mb-[5px] ">
                  25k
                </h2>
                <span className="xl:text-[16px] lg:text-[28px] text-[20px]">
                  Anual gross sale in our site
                </span>
              </div>
              <div className="flex items-center flex-col text-center py-[31px] border-[1px] border-[#7D8184] md:px-[15px] px-[10px]   rounded-[4px] hover-iconAbout xl:min-h-[230px] ">
                <AboutIcon4 className="p-[9px] bg-black object-cover rounded-full border-[11px] border-[#c1c0c1] text-[80px] duration-500" />
                <h2 className="text-[32px] leading-[30px] font-semibold sm:mt-[24px] mt-[5px] sm:mb-[8px] mb-[5px] ">
                  10.5k
                </h2>
                <span className="xl:text-[16px] lg:text-[28px] text-[20px]">
                  Mopnthly Produduct Sale
                </span>
              </div>
            </div>
            <div className=" xl:mt-[142px] lg:mt-[70px] md:mt-[50px] mt-[20px] ">
              <SliderAbout />
            </div>

            <Services />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
