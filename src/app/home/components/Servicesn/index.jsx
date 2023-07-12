import React, { memo } from 'react';

import Service1 from '@/svgs/HomeSVG/service1.svg';
import Service2 from '@/svgs/HomeSVG/service2.svg';
import Service3 from '@/svgs/HomeSVG/service3.svg';

function Services() {
  return (
    <div className="services  xl:mt-[140px] lg:mt-[70px] md:mt-[50px] mt-[20px] ">
      <div className="container p-0">
        <div className="flex items-stretch justify-center xl:gap-x-[80px] lg:gap-x-[50px] gap-x-[20px] sm:flex-row flex-col gap-y-[20px]">
          <div className="flex flex-col items-center text-center">
            <Service1 className="p-[9px] bg-black object-cover rounded-full border-[10px] border-[#c1c0c1] text-[80px]" />
            <h2 className="lg:text-[20px] text-[16px] font-semibold sm:mt-[24px] mt-[5px] sm:mb-[8px] mb-[5px]">
              FREE AND FAST DELIVERY
            </h2>
            <span>Free delivery for all orders over $140</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Service2 className="p-[9px] bg-black object-cover rounded-full border-[10px] border-[#c1c0c1] text-[80px]" />
            <h2 className="lg:text-[20px] text-[16px] font-semibold mt-[24px] mb-[8px]">
              24/7 CUSTOMER SERVICE
            </h2>
            <span>Friendly 24/7 customer support</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Service3 className="p-[9px] bg-black object-cover rounded-full border-[10px] border-[#c1c0c1] text-[80px]" />
            <h2 className="lg:text-[20px] text-[16px] font-semibold mt-[24px] mb-[8px]">
              MONEY BACK GUARANTEE
            </h2>
            <span>We reurn money within 30 days</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Services);
