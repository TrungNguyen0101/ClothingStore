import React, { lazy, memo } from 'react';
import PropTypes from 'prop-types';

import BannerCategory from './BannerCategory';

const SliderBanner = lazy(() => import('@/components/SliderBanner'));

function Banner({ data, category }) {
  return (
    <section className="container px-0 overflow-hidden banner">
      <div className=" lg:flex-row  flex-col flex items-stretch gap-x-[45px]">
        <BannerCategory category={category} />
        <SliderBanner data={data} />
      </div>
    </section>
  );
}
Banner.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  category: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};
export default memo(Banner);
