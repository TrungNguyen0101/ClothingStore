'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WishListProduct from '../ItemProduct/WishListProduct';

const WishListItem = ({ status }) => {
  const [listProduct, setListProduct] = useState([]);
  //Call API
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        const persons = res.data;
        setListProduct(persons);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {status === true ? (
        <div className="grid lg:grid-cols-4 lg:gap-x-[30px]  gap-y-[15px] sm:grid-cols-3 grid-cols-1 gap-x-[15px] xl:gap-x-[30px]">
          {listProduct.length > 0 &&
            listProduct
              .slice(0, 4)
              .map((item) => (
                <WishListProduct
                  key={item.id}
                  sale={true}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  start={false}
                />
              ))}
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 lg:gap-x-[30px] gap-y-[15px]  sm:grid-cols-3 grid-cols-1 gap-x-[15px] xl:mt-[60px] mt-[30px]">
          {listProduct.length > 0 &&
            listProduct
              .slice(4, 8)
              .map((item) => (
                <WishListProduct
                  key={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  newPro={true}
                  start={true}
                />
              ))}
        </div>
      )}
    </div>
  );
};

export default WishListItem;
