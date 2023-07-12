'use client';

import React, { lazy, memo } from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ListMyCart = lazy(() => import('./components/ListMyCart'));
const TagPage = lazy(() => import('@/components/TagPage'));

async function CartPage() {
  return (
    <section className="xl:pt-[80px] pt-[40px] sm:px-0 px-5">
      <div className="container p-0">
        <TagPage />
        <ListMyCart />
      </div>
      <ToastContainer />
    </section>
  );
}

export default memo(CartPage);
