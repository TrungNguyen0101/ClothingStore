'use client';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

const CartPage = () => {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(1);
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        const persons = res.data;
        setListProduct(persons);
      })
      .catch((error) => console.log(error));
  }, []);

  const handlerPrice = (item, event) => {
    if (item.id == event.target.name) {
      setCount(event.target.value);
      localStorage.setItem(
        event.target.name,
        JSON.stringify({
          value: event.target.value,
          price: event.target.value * item.price,
          id: event.target.name,
        })
      );
    }
  };

  useEffect(() => {
    let kq = [];
    listProduct.slice(4, 8).map((item) => {
      const result = JSON.parse(localStorage.getItem(item.id));
      kq.push(result);
    });

    setProduct(kq);
  }, [listProduct, count]);

  return (
    <section className="xl:pt-[80px] pt-[40px] sm:px-0 px-[20px] ">
      <div className="container p-0">
        <div className="xl:mb-[80px] mb-[40px]">
          <span className="text-[#999999]">
            <a href="/" className=" text-[#999999] mr-[12px] no-underline">
              Home
            </a>
            / {` `}
          </span>
          <span className="ml-[12px]">Cart</span>
        </div>
        <div className="overflow-x-auto mb-[24px]">
          <div className="flex flex-col xl:gap-y-[40px] gap-y-[20px]  sm:w-full w-[600px]">
            <div className="row flex items-center justify-between text-[16px] leading-[24px] py-[23px] px-[40px] shadow-custom m-0 ">
              <div className="col-3">
                <span>Product</span>
              </div>
              <div className="col-3">
                <span>Price</span>
              </div>
              <div className="col-3">
                <span>Quantity</span>
              </div>
              <div className="col-3">
                <span>Subtotal</span>
              </div>
            </div>
            {listProduct.length > 0 &&
              listProduct.slice(4, 8).map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className="row text-[16px] leading-[24px] py-[29px] px-[40px] shadow-custom justify-content-center flex items-center m-0"
                  >
                    <div className="flex items-center xl:gap-x-[22px] gap-x-[10px] col-3">
                      <Image
                        src={item.image}
                        alt=""
                        width={50}
                        height={39}
                        className="w-[50px] max-h-[39px] object-cover "
                      />
                      <span className="wishlist_title">{item.title}</span>
                    </div>
                    <div className="col-3">
                      <span>${item.price}</span>
                    </div>
                    <div className="col-3">
                      <input
                        type="number"
                        className="border max-w-[72px] p-[10px]"
                        defaultValue={1}
                        value={
                          product[index]?.id == item.id
                            ? product[index]?.value
                            : 1
                        }
                        name={item.id}
                        onChange={(e) => handlerPrice(item, e)}
                      />
                    </div>
                    <div className="col-3">
                      {product.length > 0 && product[index]?.id == item.id ? (
                        <span>${product[index]?.price}</span>
                      ) : (
                        <span>${item.price}</span>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="flex items-center justify-between sm:px-0 px-[20px] sm:flex-row flex-col gap-y-[10px] sm:m-0 m-auto">
          <button
            type="button"
            className="m-0 bg-white border-black btn-123 btn"
          >
            <a href="#" className="text-black no-underline">
              Return To Shop
            </a>
          </button>
          <button
            type="button"
            className="m-0 bg-white border-black btn-123 btn"
          >
            <a href="#" className="text-black no-underline">
              Update Cart
            </a>
          </button>
        </div>
        <div className="flex  justify-center items-center md:justify-between md:items-start md:flex-row flex-col xl:mt-[80px] mt-[40px] gap-y-[15px]  sm:mx-0 mx-auto">
          <div className=" flex lg:items-center gap-x-[16px] lg:flex-row md:flex-col md:items-start gap-y-[10px] sm:flex-row sm:items-center flex-col flex-start">
            <input
              type="text"
              className="outline-none px-[24px] py-[16px] xl:w-[300px] border-[1px] border-black "
              placeholder="Coupon Code"
            />
            <button type="button" className="mt-0 btn-123 btn btn-danger">
              <a href="#" className="text-white no-underline">
                Apply Coupon
              </a>
            </button>
          </div>
          <div className="px-[24px] py-[32px] border-[1px] border-black xl:w-[470px] ">
            <h2 className="text-[20px] leading-[28px] font-medium mb-[24px]">
              Cart Total
            </h2>
            <div className="">
              <div className="flex items-center justify-between pb-[16p] border-b-[1px] border-black mb-[16px]">
                <span>Subtotal:</span>
                <span>$1750</span>
              </div>
              <div className="flex items-center justify-between pb-[16p] border-b-[1px] border-black mb-[16px]">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex items-center justify-between pb-[16p]  mb-[16px]">
                <span>Total:</span>
                <span>$1750</span>
              </div>
            </div>
            <div className="text-center">
              <button type="button" className="mt-0 btn-123 btn btn-danger">
                <a href="/checkout" className="text-white no-underline">
                  Procees to checkout
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
