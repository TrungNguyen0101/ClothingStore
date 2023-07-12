'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Placeholder from 'react-placeholder';
import { toast } from 'react-toastify';
import classNames from 'classnames';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { AxiosGet, AxiosPost, AxiosPut, formatNumber } from '@/app/axios';
import Heart from '@/svgs/HeaderSVG/Heart.svg';
import Delivery from '@/svgs/ProductSVG/Delivery.svg';
import Minus from '@/svgs/ProductSVG/Minus.svg';
import Plus from '@/svgs/ProductSVG/Plus.svg';
import Return from '@/svgs/ProductSVG/Return.svg';

import 'react-toastify/dist/ReactToastify.css';

function DetailProuduct() {
  const [product, setProduct] = useState({});
  const [image, setImage] = useState('');
  const [listMyCart, setListMyCart] = useState([]);
  const [ArrSize, setArrSize] = useState({});
  const [count, setCount] = useState(1);
  const [size, setSize] = useState(null);

  const pathname = usePathname();
  const parts = pathname.split('/');
  const lastPart = parts[parts.length - 1];

  const handlerMinus = useCallback(() => {
    if (count === 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  }, [count]);
  const handlerPlus = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const hanlderChangeSize = (size1) => {
    setSize(size1);
  };

  const handlerSetURLImage = (url) => {
    setImage(url);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function checkAddProduct(id) {
    for (let i = 0; i < listMyCart.length; i += 1) {
      if (
        listMyCart[i].product?._id === id &&
        (listMyCart[i]?.size === size || listMyCart[i]?.size === null)
      ) {
        // update
        return true;
      }
    }
    return false;
  }

  const handlerAddCart = useCallback(async () => {
    const result = listMyCart.find(
      (item) =>
        item.product?._id === product?._id &&
        (item.size === size || item.size === null)
    );
    const values = {
      product: product?._id,
      quantity: Number(count) + Number(result?.quantity || 0),
      size,
    };
    const sessionUser = localStorage.getItem('account');

    if (sessionUser !== null) {
      try {
        if (
          product.variants?.length > 0 &&
          product?.variants[0]?.size !== null &&
          size === null
        ) {
          toast.error('Vui lòng chọn size', {
            autoClose: 1300,
          });
        } else {
          if (checkAddProduct(values.product) === false) {
            await AxiosPost('/api/v1.0/carts/me/products', values);
          } else {
            const valuesUpdate = {
              quantity: values.quantity,
              size: size || '',
              note: '',
            };
            await AxiosPut(
              `/api/v1.0/carts/me/product-items/${result?._id}`,
              valuesUpdate
            );
          }
          toast.success('Thêm thành công', {
            autoClose: 1300,
          });
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      } catch (error) {
        toast.error('Thêm thất bại', {
          autoClose: 1300,
        });
      }
    } else {
      toast.error('Vui lòng đăng nhập', {
        autoClose: 1300,
      });
    }
  }, [
    checkAddProduct,
    count,
    listMyCart,
    product?._id,
    product.variants,
    size,
  ]);

  useEffect(() => {
    async function getDetailProduct() {
      const result = await AxiosGet(`/api/v1.0/products/${lastPart}`);
      if (result.data.body.variants.length > 0) {
        setArrSize(result.data.body.variants);
      }
      setProduct(result?.data?.body);
    }
    getDetailProduct();
  }, [lastPart]);

  useEffect(() => {
    const getMycart = async () => {
      const result = await AxiosGet('/api/v1.0/carts/me');
      const products = result?.data?.body.products;
      setListMyCart(products);
    };
    getMycart();
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    handleLoad();

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  return (
    <Placeholder
      ready={!loading}
      rows={5}
      customPlaceholder={
        <div className="flex gap-x-[70px] justify-between lg:flex-row flex-col gap-y-[30px]">
          <div className="flex sm:flex-row gap-x-[30px] flex-col gap-y-[20px]">
            <div className="sm:flex gap-y-[16px] flex-col gap-x-[10px] grid grid-cols-2  place-items-center">
              <div className="w-[170px]  min-h-[137px] bg-slate-500 opacity-30" />
              <div className="w-[170px]  min-h-[137px] bg-slate-500 opacity-30" />
              <div className="w-[170px]  min-h-[137px] bg-slate-500 opacity-30" />
              <div className="w-[170px]  min-h-[137px] bg-slate-500 opacity-30" />
            </div>
            <div className="min-w-[500px] min-h-[600px] bg-slate-500 opacity-30" />
          </div>
          <div className="flex items-start flex-col lg:max-w-[34.2%] sm:w-[70%] lg:mx-0">
            <div className="bg-slate-500 opacity-30 w-full h-[48px] mb-[16px] " />
            <div className="bg-slate-500 opacity-30 w-[50%] h-[24px] mb-[16px] " />
            <div className="bg-slate-500 opacity-30 w-full h-[130px] mb-[24px] pb-[24px]" />
            <div className="bg-slate-500 opacity-30 w-full h-[32px] mb-[24px] " />
            <div className="flex xl:items-center gap-x-[13px] mb-[37px] xl:flex-row flex-col items-start gap-y-[15px] w-full h-[48px] ">
              <div className="bg-slate-500 opacity-30 w-[40%] h-full " />
              <div className="bg-slate-500 opacity-30 w-[40%] h-full " />
              <div className="bg-slate-500 opacity-30 w-[20%] h-full " />
            </div>
            <div className="bg-slate-500 opacity-30 w-full h-[200px]" />
          </div>
        </div>
      }
    >
      <div className="flex gap-x-[70px] justify-between lg:flex-row flex-col gap-y-[30px]">
        <div className="flex sm:flex-row gap-x-[30px] flex-col gap-y-[20px]">
          <div className="sm:flex gap-y-[16px] flex-col gap-x-[10px] grid grid-cols-2  place-items-center">
            {product?.images?.length > 0 &&
              product?.images?.map((item) => (
                <button
                  aria-label="URLimage"
                  type="button"
                  key={item}
                  className="max-h-[130px] mb-[16px] "
                  onClick={() => handlerSetURLImage(item)}
                >
                  <Image
                    src={item}
                    width={170}
                    height={138}
                    alt={item}
                    className="object-cover h-full cursor-pointer"
                  />
                </button>
              ))}
          </div>
          <div className="max-h-[600px] overflow-hidden">
            <Image
              src={image || product?.cover}
              width={500}
              height={600}
              alt="product"
              className="object-cover"
            />
          </div>
        </div>
        {product && (
          <div className="flex items-start flex-col lg:max-w-[34.2%] sm:w-[70%] lg:mx-0">
            <h3 className="font-semibold text-[24px] leading-[24px] mb-[16px] uppercase ">
              {product.name}
            </h3>
            <div className="flex sm:items-center items-start mb-[16px] sm:flex-row flex-col gap-y-[10px]">
              <span className="text-red-500 mr-[8px]">{`${
                formatNumber(product.discountedPrice) || 100
              } VNĐ`}</span>
              <span className="text-[#666666] line-through">
                {formatNumber(product.price) || 0} VNĐ
              </span>
            </div>
            <p className=" text-[14px]  leading-[21px] pb-[24px] border-[#808080] border-b-[1px] mb-[24px]">
              {product.description}
            </p>

            <div className="flex gap-x-[24px] items-center mb-[24px]">
              <span className="font-inter text-[20px] leading-[20px]">
                Size:
                {ArrSize.length > 0 && ArrSize[0].size === null && ' Oversize'}
              </span>
              {ArrSize.length > 0 &&
                ArrSize[0].size !== null &&
                product.variants.map((item) => (
                  <div className="flex items-center gap-x-[8px]" key={item._id}>
                    <button
                      aria-label="changeSize"
                      type="button"
                      onClick={() => hanlderChangeSize(`${item.size}`)}
                    >
                      <span
                        className={classNames(
                          'text-[14px] leading-[21px] font-medium text-[#000000] flex items-center justify-center cursor-pointer border-[#000000] border-[1px] rounded-md w-[32px] h-[32px]',
                          {
                            'bg-[#DB4444] text-white border-[#DB4444]':
                              size === `${item.size}`,
                          }
                        )}
                      >
                        {item.size}
                      </span>
                    </button>
                  </div>
                ))}
            </div>
            <div className="flex xl:items-center gap-x-[13px] mb-[37px] xl:flex-row flex-col items-start gap-y-[15px]">
              <div className="flex items-center">
                <button
                  aria-label="Minus"
                  type="button"
                  className="flex items-center justify-center rounded-l-[4px] hover:bg-[#DB4444] w-[40px] h-[44px]  border-[1px] hover:border-transparent border-[#000000] hover-iconDetail duration-500"
                  onClick={handlerMinus}
                >
                  <Minus className="text-[24px] duration-500" />
                </button>
                <input
                  type="text"
                  defaultValue={0}
                  value={count}
                  disabled
                  className="w-[80px] py-[8px] border-t-[1px] border-b-[1px] outline-none 
                border-[#000000] bg-white text-center text-[20px] leading-[28px] inline-block h-[44px]"
                />
                <button
                  aria-label="Plus"
                  type="button"
                  className="flex items-center justify-center rounded-r-[4px] hover:bg-[#DB4444] w-[40px] h-[44px]  border-[1px] hover:border-transparent border-[#000000] hover-iconDetail duration-500"
                  onClick={handlerPlus}
                >
                  <Plus className="text-[24px] duration-500" />
                </button>
              </div>
              <div className="flex items-center">
                <button
                  aria-label="add"
                  type="submit"
                  onClick={handlerAddCart}
                  className=" mt-0 px-[48px] py-[10px] bg-[#DB4444] rounded-[4px] hover:opacity-60 duration-500"
                >
                  <span className="leading-[24px] text-[16px] font-medium inline-block text-white">
                    Buy Now
                  </span>
                </button>
                <Heart className="hover-iconDetail text-[40px] p-[4px]  border-[1px] border-[#000000] rounded-[4px] hover:bg-[#DB4444] hover:border-transparent duration-500 ml-[19px]" />
              </div>
            </div>
            <div className="py-[24px]  border-[1px] border-[#000000] w-full">
              <div className="flex gap-x-[16px] items-center pb-[16px] px-[16px] sm:flex-row flex-col">
                <Delivery className="text-[40px]" />
                <div className="flex flex-col gap-y-[8px] sm:items-start items-center sm:text-start text-center">
                  <span className="leading-[24px] text-[16px]">
                    Free Delivery
                  </span>
                  <a
                    href="/"
                    className="leading-[18px] text-[12px] text-[#000000] sm:text-start"
                  >
                    Enter your postal code for Delivery Availability
                  </a>
                </div>
              </div>
              <div className="border-b-[1px] border-[#000000] " />
              <div className="flex gap-x-[16px] items-center pt-[16px] px-[16px] sm:flex-row flex-col">
                <Return className="text-[40px]" />
                <div className="flex flex-col gap-y-[8px] sm:items-start items-center sm:text-start text-center">
                  <span className="leading-[24px] text-[16px]">
                    Return Delivery
                  </span>
                  <span className="leading-[18px] text-[12px] text-[#000000]">
                    Free 30 Days Delivery Returns.
                    <a
                      className="leading-[18px] text-[12px] text-[#000000]"
                      href="/"
                    >
                      Details
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Placeholder>
  );
}

export default DetailProuduct;
