/* eslint-disable react/require-default-props */
import React, { useCallback } from 'react';
import { toast } from 'react-toastify';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

import Eye from '@/svgs/ProductSVG/eye.svg';
import Delete from '@/svgs/WishListSVG/delete.svg';

import 'react-toastify/dist/ReactToastify.css';
import '../../app/home/components/styledHome/Product.scss';

function WishListProduct({ newPro, sale, className, ...props }) {
  const handleDelete = useCallback((e) => {
    const cardID = e.target.id;
    const sessionUser = localStorage.getItem('account');
    const sessionWishList = JSON.parse(
      sessionStorage.getItem('YourWishList')
    )?.data;

    const updatedProducts = sessionWishList?.filter(
      (product) => product !== cardID
    );

    const newCart = {
      data: updatedProducts,
      userId: JSON.parse(sessionUser)?.token,
    };

    sessionStorage.setItem('YourWishList', JSON.stringify(newCart));
    toast.success('Đã xóa sản phẩm khỏi mục yêu thích', { autoClose: 2000 });
    setTimeout(() => {
      window.location.reload();
    }, [1500]);
  }, []);
  return (
    <div
      className={`product_item ${className} flex flex-col overflow-hidden w-full`}
    >
      <div className="relative product_item-show">
        <Link href={`/product/${props.slug}`}>
          <div className="product_item-image xl:max-w-[270px] h-[250px]  object-bottom flex border-[1px]">
            <Image
              src={props.image || '/image/HomeImage/2.png'}
              alt="image"
              width={500}
              height={250}
              quality={60}
              className="object-contain flex z-[-2]"
            />
          </div>
        </Link>
        {sale === true && (
          <span className="py-[4px] px-[12px] bg-[#db4444] text-black text-center rounded absolute top-[12px] left-[12px] z-12 text-[12px]">
            -50%
          </span>
        )}
        {newPro === true && (
          <span className="bg-green-500 py-[4px] px-[12px] text-black text-center rounded absolute top-[12px] left-[12px] z-12 text-[12px]">
            NEW
          </span>
        )}

        {props.delete === true ? (
          <button
            aria-label="detlete"
            id={props.id}
            type="button"
            onClick={(e) => handleDelete(e)}
            className="p-[5px] bg-gray-300 rounded-[50%] hover-icon z-30 flex justify-center items-center flex-col absolute top-[12px] right-[12px]"
          >
            <Delete className="text-[34px] pointer-events-none" />
          </button>
        ) : (
          <button
            aria-label="eye"
            type="button"
            className="p-[5px] bg-gray-300 rounded-[50%] hover-icon z-30 flex justify-center items-center flex-col absolute top-[12px] right-[12px]"
          >
            <Link aria-label="eye" href={`/product/${props.slug}`}>
              <Eye className="text-[34px] pointer-events-none" />
            </Link>
          </button>
        )}
      </div>
      <span className="text-[16px] font-medium leading-[24px] mt-[16px] mb-[8px] wishlist_title">
        {props.title}
      </span>
      <div className="mt-auto flex items-center text-red-500 gap-x-[12px] font-medium">
        <span className="text-black">{`$${props.price || 100}`}</span>
        {sale === true && (
          <span className="text-[#666666] line-through">{`$${
            props.price * 2 || 100
          }`}</span>
        )}
      </div>
    </div>
  );
}

WishListProduct.propTypes = {
  newPro: PropTypes.bool,
  sale: PropTypes.bool,
  className: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  delete: PropTypes.bool,
};
export default WishListProduct;
