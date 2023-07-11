import React from 'react';

const ItemCategory = ({ text, children }) => {
  return (
    <div className="category_item  md:pb-[23px] md:pt-[24px] md:px-[30px] py-[15px] px-[21px] w-full">
      <div>{children}</div>
      <span className="w-full break-words category_item-text mt-[16px] leading-[24px] sm-text-[16px] text-[14px]">
        {text}
      </span>
    </div>
  );
};

export default ItemCategory;
