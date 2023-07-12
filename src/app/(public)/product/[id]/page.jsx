import React from 'react';

import TagPage from '@/components/TagPage';
import TagProduct from '@/components/TagProduct';

import DetailProuduct from '../components/DetailProuduct';
import RelatedProduct from '../components/RelatedProduct';

import '@/app/home/components/styledHome/Product.scss';

function ProductDetailPage() {
  return (
    <section className="xl:pt-[80px] pt-[40px] xl:px-0 px-[20px] ">
      <div className="container p-0">
        <TagPage />
        <DetailProuduct />
        <div className="lg:mt-[140px] md:mt-[70px] sm:mt-[30px] mt-[20px]">
          <TagProduct day={false} mt text="Related Item" />
          <RelatedProduct />
        </div>
      </div>
    </section>
  );
}

export default ProductDetailPage;
