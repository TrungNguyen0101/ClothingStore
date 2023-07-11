import TagProduct from '@/components/TagProduct';
import Image from 'next/image';
import React from 'react';

const Feature = () => {
  return (
    <section className="feature xl:mt-[140px] lg:mt-[70px] md:mt-[50px] mt-[20px]">
      <div className="container px-0 ">
        <TagProduct text="Featured" desc="New Arrival" />
        <div className="grid lg:grid-cols-2 grid-cols-1 md:mt-[60px] mt-[30px] lg:gap-x-[30px] ">
          <div className="relative">
            <Image
              src="/image/feature_1.png"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              alt=""
              className="object-cover w-full md:h-[400px] lg:h-full h-[300px] object-bottom"
            />
            <div className="text-white absolute left-[32px] bottom-[32px] max-w-[242px]">
              <h3 className="text-[24px] leading-[24px] font-semibold font-inter mb-[16px]">
                PlayStation 5
              </h3>
              <span className="text-[14px] mb-[16px] block">
                Black and White version of the PS5 coming out on sale.
              </span>
              <a
                href="#"
                className="inline-block text-[16px] text-white no-underline border-b-[1px] hover:opacity-70 duration-200"
              >
                <span>Shop Now</span>
              </a>
            </div>
          </div>
          <div className="">
            <div className="relative lg:mt-0 sm:mt-[30px] mt-[15px]">
              <Image
                src="/image/feature_2.png"
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                alt=""
                className="w-full "
              />
              <div className="text-white absolute left-[32px] sm:bottom-[32px] bottom-[20px] max-w-[242px]">
                <h3 className="sm:text-[24px] text-[18px] leading-[24px] font-semibold font-inter sm:mb-[16px]mb-[8px]">
                  Women’s Collections
                </h3>
                <span className="text-[14px] sm:mb-[16px]mb-[8px] block">
                  Featured woman collections that give you another vibe.
                </span>
                <a
                  href="#"
                  className="inline-block text-[16px] text-white no-underline border-b-[1px] hover:opacity-70 duration-200"
                >
                  <span>Shop Now</span>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:mt-[32px] mt-[15px] sm:gap-x-[30px] gap-x-[15px]">
              <div className="relative">
                <Image
                  src="/image/feature_2.1.png"
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  alt=""
                  className="object-cover h-full"
                />
                <div className="text-white absolute sm:left-[32px] left-[10px] sm:bottom-[32px] bottom-[10px] xl:max-w-[191px] lg:max-w-[120px]">
                  <h3 className="sm:text-[24px] text-[16px] leading-[24px] font-semibold font-inter mb-[8px]">
                    Speakers
                  </h3>
                  <span className="sm:text-[14px] text-[12px] mb-[8px] block">
                    Amazon wireless speakers
                  </span>
                  <a
                    href="#"
                    className="inline-block sm:text-[16px] text-[14px] text-white no-underline border-b-[1px] hover:opacity-70 duration-200"
                  >
                    <span>Shop Now</span>
                  </a>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/image/feature_2.2.png"
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  alt=""
                  className="object-cover h-full"
                />
                <div className="text-white absolute sm:left-[32px] left-[10px] sm:bottom-[32px] bottom-[10px] xl:max-w-[191px] lg:max-w-[120px]">
                  <h3 className="sm:text-[24px] text-[16px] leading-[24px] font-semibold font-inter mb-[8px]">
                    Perfume
                  </h3>
                  <span className="sm:text-[14px] text-[12px] mb-[8px] block">
                    GUCCI INTENSE OUD EDP
                  </span>
                  <a
                    href="#"
                    className="inline-block sm:text-[16px] text-[14px] text-white no-underline border-b-[1px] hover:opacity-70 duration-200"
                  >
                    <span>Shop Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
