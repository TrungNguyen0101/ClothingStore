import React, { lazy, memo } from 'react';

import { AxiosGet } from '../axios';

const Services = lazy(() => import('./components/Servicesn'));
const ProductToday = lazy(() => import('./components/ProductToday'));
const ProductBest = lazy(() => import('./components/ProductBest'));
const OurProduct = lazy(() => import('./components/OurProduct'));
const Music = lazy(() => import('./components/Musicn'));
const Feature = lazy(() => import('./components/Feature'));
const Category = lazy(() => import('./components/Category'));
const Banner = lazy(() => import('./components/Banner'));

async function getProduct() {
  try {
    const res = await AxiosGet(`/api/v1.0/products?perPage=20&page=1&sort=1`);
    const data = await res?.data?.body?.items;
    return {
      data,
      date: true,
    };
  } catch (error) {
    return error;
  }
}
async function getSlide() {
  try {
    const res = await AxiosGet(`/api/v1.0/slides`);
    const res1 = await AxiosGet(`/api/v1.0/product-categories`);
    const data = await res?.data?.body;
    const data1 = await res1?.data?.body;
    return { data, category: data1 };
  } catch (error) {
    return error;
  }
}
const HomePage = async () => {
  const product = await getProduct();
  const slide = await getSlide();
  return (
    <main className="xl:px-0 px-[20px]">
      <Banner data={slide.data} category={slide.category} />
      <ProductToday data={product.data} date={product.date} />
      <Category />
      <ProductBest data={product.data} />
      <Music date={product.date} />
      <OurProduct data={product.data} />
      <Feature />
      <Services />
    </main>
  );
};

export default memo(HomePage);
