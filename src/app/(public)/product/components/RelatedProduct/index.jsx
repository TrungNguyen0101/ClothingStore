'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import ItemProduct from '@/components/ItemProduct';

import { AxiosGet } from '@/app/axios';

function RelatedProduct() {
  const [listDetailProduct, setListDetailProduct] = useState([]);
  const pathname = usePathname();
  const parts = pathname.split('/');
  const lastPart = parts[parts.length - 1];

  useEffect(() => {
    const getDetailProduct = async () => {
      const result = await AxiosGet(
        `/api/v1.0/products/related?slug=${lastPart}&limit=4`
      );
      const products = result?.data?.body;
      if (products.length > 0) {
        setListDetailProduct(products);
      }
    };
    getDetailProduct();
  }, [lastPart]);
  return (
    <div className="sm:mt-[60px] mt-[30px] grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-[30px] gap-y-[20px]">
      {listDetailProduct.length > 0 &&
        listDetailProduct.map((item) => {
          return (
            <ItemProduct
              key={item._id}
              sale
              id={item._id}
              size
              slug={item.slug}
              discount={item.discount}
              discountType={item.discountType}
              discountedPrice={item.discountedPrice}
              title={item.name}
              image={item.cover}
              price={item.price}
            />
          );
        })}
    </div>
  );
}

export default RelatedProduct;
