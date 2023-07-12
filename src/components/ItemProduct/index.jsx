/* eslint-disable react/require-default-props */

'use client';

import React, { memo, useCallback, useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';
import { toast } from 'react-toastify';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { AxiosGet, AxiosPost, AxiosPut, formatNumber } from '@/app/axios';
import Heart from '@/svgs/HeaderSVG/Heart.svg';
import Eye from '@/svgs/ProductSVG/eye.svg';

import 'react-toastify/dist/ReactToastify.css';

function ItemProduct({ sale, color, className, ourProduct, ...props }) {
  const [listMyCart, setListMyCart] = useState([]);

  const [size, setSize] = useState(null);
  const price = formatNumber(props?.price);
  const discountedPrice = formatNumber(props?.discountedPrice);

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

  const hanlderChangeSize = (size1) => {
    setSize(size1);
  };

  const handlerAddCart = useCallback(async () => {
    const values = {
      product: props?.id,
      quantity: 1,
      size,
    };
    const sessionUser = localStorage.getItem('account');

    if (sessionUser !== null) {
      try {
        if (
          props.variants?.length > 0 &&
          props?.variants[0] !== null &&
          size === null
        ) {
          toast.error('Vui lòng chọn size', {
            autoClose: 1300,
          });
        } else {
          if (checkAddProduct(values.product) === false) {
            await AxiosPost('/api/v1.0/carts/me/products', values);
          } else {
            // Tìm product có cùng ID và cùng size
            const result = listMyCart.find(
              (item) =>
                item.product?._id === values.product &&
                (item.size === size || item.size === null)
            );

            const valuesUpdate = {
              quantity: Number(result?.quantity) + 1,
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
  }, [checkAddProduct, listMyCart, props?.id, props?.variants, size]);

  const handlerAddWishList = useCallback(() => {
    const data = props?.id;
    const sessionWishList = sessionStorage.getItem('YourWishList');
    const sessionUser = localStorage.getItem('account');

    if (sessionUser !== null) {
      if (sessionWishList === null) {
        const newWishList = {
          data: [data],
          userId: JSON.parse(sessionUser)?.token,
        };
        sessionStorage.setItem('YourWishList', JSON.stringify(newWishList));
        toast.success('Đã thêm sản phẩm vào danh mục yêu thích', {
          autoClose: 1300,
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        const existingData = JSON.parse(sessionWishList);
        if (existingData.data.includes(data)) {
          toast.error('Sản phẩm đã tồn tại trong danh mục yêu thích', {
            autoClose: 1300,
          });
        } else {
          existingData.data.push(data);
          sessionStorage.setItem('YourWishList', JSON.stringify(existingData));
          toast.success('Đã thêm sản phẩm vào danh mục yêu thích', {
            autoClose: 1300,
          });
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        }
      }
    } else {
      toast.error('Vui lòng đăng nhập', {
        autoClose: 1300,
      });
    }
  }, [props?.id]);

  useEffect(() => {
    const getMycart = async () => {
      const result = await AxiosGet('/api/v1.0/carts/me');
      const products = result?.data?.body.products;
      setListMyCart(products);
    };
    getMycart();
  }, []);

  return (
    <div
      className={classNames(
        `flex flex-col select-none w-full overflow-hidden cursor-pointer`,
        className
      )}
    >
      <div className="relative product_item-show">
        {props?.size !== true && (
          <button
            type="button"
            className="cursor-pointer activeShow"
            onClick={handlerAddCart}
          >
            <span className="text-white ">Add To Cart</span>
          </button>
        )}
        <div className="product_item-image xl:max-w-[270px] h-[250px]  object-bottom flex border-[1px]">
          <LazyLoad>
            <Image
              src={props?.image || '/image/HomeImage/2.png'}
              alt="image"
              fill
              quality={60}
              className="flex z-[-2]"
            />
          </LazyLoad>
        </div>
        {sale === true && (
          <span className="py-[4px] px-[12px] bg-[#db4444] text-black text-center rounded absolute top-[12px] left-[12px] z-12 text-[12px]">
            {props.discountType === 'PERCENT'
              ? `-${props?.discount}%`
              : `-${formatNumber(props?.discount)} VNĐ`}
          </span>
        )}
        <div className="flex justify-center items-center flex-col absolute top-[12px] right-[12px]">
          <div className="p-[5px] bg-gray-300 rounded-[50%] hover-icon w-[34px] h-[34px]">
            <Link aria-label="eye" href={`/product/${props.slug}`}>
              <Eye className="icon w-[24px] h-[24px] text-[24px]" />
            </Link>
          </div>
          <button
            aria-label="heart"
            type="button"
            onClick={handlerAddWishList}
            className="p-[5px] bg-gray-300 rounded-[50%] mt-[8px] hover-icon"
          >
            <Heart className="icon " />
          </button>
        </div>
      </div>

      {ourProduct ? (
        <div className="mt-[16px] flex flex-col gap-y-[8px]">
          <span
            className="text-[17px] font-medium leading-[24px] ourProduct uppercase"
            title={props.title}
          >
            {props.title || 'HAVIT HV-G92 Gamepad'}
          </span>
          <div className="flex items-start gap-x-[8px] text-[16px] flex-col">
            <div className="flex gap-x-[8px] items-center ">
              <span className="font-inter text-[20px] leading-[32px] ">
                {props.variants?.length > 0 &&
                  props?.variants[0] === null &&
                  ' Oversize'}
              </span>
              {props.variants[0] !== null &&
                props.variants.map((item) => {
                  return (
                    <div className="flex items-center gap-x-[8px]" key={item}>
                      <button
                        type="button"
                        onClick={() => hanlderChangeSize(`${item}`)}
                      >
                        <span
                          className={classNames(
                            'text-[14px] leading-[21px] font-medium text-[#000000] flex items-center justify-center cursor-pointer border-[#000000] border-[1px] rounded-md w-[32px] h-[32px]',
                            {
                              'bg-[#DB4444] text-white border-[#DB4444]':
                                size === `${item}`,
                            }
                          )}
                        >
                          {item}
                        </span>
                      </button>
                    </div>
                  );
                })}
            </div>
            <div className="flex items-center text-red-500 gap-x-[12px] font-medium">
              <span className="text-black">{`${
                discountedPrice || 100
              } VNĐ`}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col gap-y-[8px] h-[100%] mt-[16px]">
          <span className="text-[17px] font-medium leading-[24px] NoourProduct uppercase">
            {props.title || 'HAVIT HV-G92 Gamepad'}
          </span>
          <div className="mt-auto">
            <div className="flex gap-x-[8px] items-center mb-[10px]">
              <span className="font-inter text-[20px] leading-[20px]">
                {props.variants?.length > 0 &&
                  props?.variants[0] === null &&
                  ' Oversize'}
              </span>
              {props.variants?.length > 0 &&
                props.variants[0] !== null &&
                props.variants.map((item) => {
                  return (
                    <div className="flex items-center gap-x-[8px]" key={item}>
                      <button
                        type="button"
                        onClick={() => hanlderChangeSize(`${item}`)}
                      >
                        <span
                          className={classNames(
                            'text-[14px] leading-[21px] font-medium text-[#000000] flex items-center justify-center cursor-pointer border-[#000000] border-[1px] rounded-md w-[32px] h-[32px]',
                            {
                              'bg-[#DB4444] text-white border-[#DB4444]':
                                size === `${item}`,
                            }
                          )}
                        >
                          {item}
                        </span>
                      </button>
                    </div>
                  );
                })}
            </div>
            <div className="flex items-center text-red-500 gap-x-[12px] font-medium">
              <span className="text-black">{`${
                discountedPrice || 100
              } VNĐ`}</span>
              <span className="text-[#666666] line-through">
                {price || 0} VNĐ
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

ItemProduct.propTypes = {
  className: PropTypes.string,
  ourProduct: PropTypes.bool,
  color: PropTypes.bool,
  id: PropTypes.string,
  title: PropTypes.string,
  slug: PropTypes.string,
  discountType: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  discountedPrice: PropTypes.number,
  discount: PropTypes.number,
  variants: PropTypes.arrayOf(PropTypes.string),
  sale: PropTypes.bool,
  size: PropTypes.bool,
};

export default memo(ItemProduct);
