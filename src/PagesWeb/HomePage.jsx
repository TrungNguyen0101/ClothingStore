import React from 'react';

import Banner from '@/app/home/components/Banner';
import ProductToday from '@/app/home/components/ProductToday';
import Category from '@/app/home/components/Category';
import ProductBest from '@/app/home/components/ProductBest';
import Music from '@/app/home/components/Musicn';
import OurProduct from '@/app/home/components/OurProduct';
import Feature from '@/app/home/components/Feature';
import Services from '@/app/home/components/Servicesn';

const HomePage = () => {
  return (
    <main className="xl:px-0 px-[15px]">
      <Banner />
      <ProductToday />
      <Category />
      <ProductBest />
      <Music />
      <OurProduct />
      <Feature />
      <Services />
    </main>
  );
};

export default HomePage;
