'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Image from 'next/image';
import Link from 'next/link';

import { AxiosDelete, AxiosGet, AxiosPut, formatNumber } from '@/app/axios';
import Cancel from '@/svgs/CartSVG/Cancel.svg';

import 'react-toastify/dist/ReactToastify.css';

function ListMyCart() {
  const [sizes, setSizes] = useState([]);
  const [listMyCart, setListMyCart] = useState([]);
  const [totalMoney, setTotalMoney] = useState(0);

  const hanleSubmit = useCallback(() => {
    try {
      const values = listMyCart.map(({ quantity, _id, size }) => ({
        quantity,
        _id,
        size,
      }));
      // Gắn lại size cho product
      if (sizes.length > 0) {
        sizes.forEach(({ _id, size }) => {
          const item = values.find((el) => el._id === _id);
          if (item) {
            item.size = size;
          }
        });
      }
    } catch (error) {
      toast.error(error.response.data.message, { autoClose: 1500 });
    }
  }, [listMyCart, sizes]);

  const handleChangeProduct = useCallback((array1, array2) => {
    const changes = [];

    for (let i = 0; i < array1.length; i += 1) {
      const obj1 = array1[i];
      const obj2 = array2.find((obj) => obj._id === obj1._id);

      if (!obj2 || obj1.quantity !== obj2.quantity || obj1.size !== obj2.size) {
        changes.push(obj1._id);
      }
    }

    return changes;
  }, []);

  const handeUpdate = useCallback(async () => {
    const obj2 = listMyCart.map(({ quantity, _id, size }) => ({
      quantity,
      _id,
      size,
    }));
    if (sizes.length > 0) {
      sizes.forEach(({ _id, size }) => {
        const item = obj2.find((el) => el._id === _id);
        if (item) {
          item.size = size;
        }
      });
    }
    const result = await AxiosGet('/api/v1.0/carts/me');
    const obj1 = result?.data?.body?.products?.map(
      ({ quantity, _id, size }) => ({
        quantity,
        _id,
        size,
      })
    );
    const arrChange = handleChangeProduct(obj1, obj2);
    const values = obj2.filter((item) => arrChange.includes(item._id));
    if (values.length > 0) {
      const promises = values.map((item) => {
        return AxiosPut(`/api/v1.0/carts/me/product-items/${item?._id}`, {
          quantity: item.quantity,
          size: item.size,
          note: '',
        });
      });
      Promise.all(promises);
      toast.success('Cập nhập thành công', { autoClose: 1300 });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      toast.error('Không có sản phẩm nào thay đổi', { autoClose: 1300 });
    }
  }, [handleChangeProduct, listMyCart, sizes]);

  const handleSizeChange = (itemId, newSize) => {
    const existingSize = sizes.find((size) => size._id === itemId);

    if (existingSize) {
      // Cập nhật size cho mục đã tồn tại trong mảng sizes
      const updatedSizes = sizes.map((size) =>
        size._id === itemId ? { ...size, size: newSize } : size
      );
      setSizes(updatedSizes);
    } else {
      // Thêm mới size cho mục chưa tồn tại trong mảng sizes
      setSizes([...sizes, { _id: itemId, size: newSize }]);
    }
  };

  const handleChange = useCallback(
    (index, event) => {
      const newPrice = parseFloat(event.target.value);
      if (newPrice > 0) {
        const updatedProducts = [...listMyCart];

        updatedProducts[index].totalPrice =
          listMyCart[index].product.discountedPrice * Number(newPrice);
        updatedProducts[index].quantity = newPrice;

        setListMyCart(updatedProducts);
      }
    },
    [listMyCart]
  );

  const handleDelete = async (e) => {
    const { id } = e.target;
    try {
      await AxiosDelete(`/api/v1.0/carts/me/product-items/${id}`);
      toast.success('Xóa sản phẩm thành công', { autoClose: 1500 });
      setTimeout(() => {
        window.location.reload();
      }, [1000]);
    } catch (error) {
      toast.error(error.response.data.message, { autoClose: 1500 });
    }
  };

  useEffect(() => {
    const getMycart = async () => {
      const result = await AxiosGet('/api/v1.0/carts/me');
      const products = result?.data?.body.products;
      setListMyCart(products);
    };
    getMycart();
  }, []);

  useEffect(() => {
    const total = listMyCart.reduce((accumulator, current) => {
      const productTotal = current.product.discountedPrice * current.quantity;
      return accumulator + productTotal;
    }, 0);
    setTotalMoney(formatNumber(total));
  }, [listMyCart]);
  return (
    <div>
      <div className="overflow-x-auto mb-[24px]">
        <div className="flex flex-col xl:gap-y-[40px] gap-y-[20px]  sm:w-full w-[600px]">
          <div className="row flex items-center justify-between text-[16px] leading-[24px] py-[24px] px-[40px] shadow-custom m-0 ">
            <div className="col-3">
              <span>Product</span>
            </div>
            <div className="col-2">
              <span>Size</span>
            </div>
            <div className="col-2">
              <span>Price</span>
            </div>
            <div className="col-2">
              <span>Quantity</span>
            </div>
            <div className="col-3">
              <span>Subtotal</span>
            </div>
          </div>
          {listMyCart?.length > 0 &&
            listMyCart?.map((item, index) => {
              return (
                <div
                  key={item._id}
                  className="row text-[16px] leading-[24px] py-[29px] px-[40px] shadow-custom justify-content-center flex items-center m-0"
                >
                  <div className="flex items-center xl:gap-x-[22px] gap-x-[10px] col-3 relative">
                    <button
                      aria-label="Delete"
                      type="button"
                      id={item._id}
                      className=" absolute top-[-10px] left-0 z-10"
                      onClick={(e) => handleDelete(e)}
                    >
                      <Cancel className="text-[24px] pointer-events-none" />
                    </button>
                    <Image
                      src={item.product.cover}
                      alt="imageProduct"
                      width={50}
                      height={39}
                      className="w-[50px] max-h-[39px] object-cover "
                    />
                    <label
                      htmlFor={item.product.name}
                      className="wishlist_title"
                    >
                      {item.product.name}
                    </label>
                  </div>
                  <div className="col-2 ">
                    {item.size !== null ? (
                      <select
                        className="xl:w-[40%] w-[75px] py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:rounded-lg"
                        onChange={(e) =>
                          handleSizeChange(item._id, e.target.value)
                        }
                      >
                        {item.product.variants.map((result) => {
                          return (
                            <option
                              key={result._id}
                              value={result.size}
                              selected={result.size === item.size}
                              className="inline-block p-0 text-[14px] rounded-lg"
                            >
                              {result.size}
                            </option>
                          );
                        })}
                      </select>
                    ) : (
                      <span className="text-center">oversize</span>
                    )}
                  </div>
                  <div className="col-2">
                    <span>
                      {formatNumber(item.product.discountedPrice)} VNĐ
                    </span>
                  </div>
                  <div className="col-2">
                    <input
                      id={item.product.name}
                      min="1"
                      type="number"
                      className="py-[6px] px-[12px] h-[44px] rounded border w-[72px]"
                      defaultValue={item?.quantity}
                      onChange={(event) => handleChange(index, event)}
                    />
                  </div>
                  <div className="col-3">
                    <span>{` ${formatNumber(
                      item?.totalPrice ||
                        item.product.discountedPrice * item.quantity
                    )} VNĐ`}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="flex items-center justify-between sm:flex-row flex-col sm:m-0 m-auto">
        <button
          aria-label="returnShop"
          type="button"
          className="m-0 bg-white border-black btn-123 btn px-12 py-4 sm:w-auto w-full sm:mb-0 mb-[10px]"
        >
          <Link href="/" className="w-full h-full text-black no-underline ">
            Return To Shop
          </Link>
        </button>
        <button
          aria-label="update"
          type="button"
          onClick={handeUpdate}
          className="m-0 bg-white border-black btn-123 btn px-12 py-4 sm:w-auto w-full"
        >
          Update Cart
        </button>
      </div>

      <div className="flex  justify-center items-center md:justify-between md:items-start md:flex-row flex-col xl:mt-[80px] mt-[40px] gap-y-[15px] md:gap-y-0  sm:mx-0 mx-auto gap-x-[15px]">
        <div className=" flex xl:items-center  xl:flex-row md:flex-col md:items-start  sm:flex-row sm:items-center flex-col flex-start  w-full md:w-[45%]  md:justify-start justify-between flex-1">
          <input
            type="text"
            className="outline-none px-6 py-4 sm:w-[300px] w-full border border-black mr-[16px] xl:mb-0 md:mb-[10px] sm:mb-0 mb-[10px]"
            placeholder="Coupon Code"
          />
          <button
            aria-label="applyCoupon"
            type="button"
            className="mt-0 btn btn-danger px-12 py-4"
          >
            Apply Coupon
          </button>
        </div>
        <div className="px-6 py-[31px] border border-black md:w-[45%] w-full ">
          <h2 className="text-[20px] leading-[28px] font-medium mb-[24px]">
            Cart Total
          </h2>
          <div className="">
            <div className="flex items-center justify-between pb-[15px] border-b-[1px] border-black  mb-[16px]">
              <span>Subtotal:</span>
              <span>{totalMoney} VNĐ</span>
            </div>
            <div className="flex items-center justify-between pb-[15px] border-b-[1px] border-black mb-[16px]">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex items-center justify-between mb-[16px]">
              <span>Total:</span>
              <span>{totalMoney} VNĐ</span>
            </div>
          </div>
          <div className="text-center">
            <button
              aria-label="checkout"
              type="button"
              className="mt-0 btn btn-danger px-12 py-4"
              onClick={hanleSubmit}
            >
              Procees to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListMyCart;
