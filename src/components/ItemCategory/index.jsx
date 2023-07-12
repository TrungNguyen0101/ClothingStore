import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styled from './Category.module.scss';

function ItemCategory({ text, children }) {
  return (
    <div
      className={classNames(
        'md:pb-[23px] md:pt-[24px] md:px-[30px] py-[15px] px-[21px] w-full cursor-pointer border-[#0000004d] border-[1px] rounded duration-500 text-center flex items-center justify-center flex-col',
        styled.categoryItem
      )}
    >
      <div>{children}</div>
      <span
        className={classNames(
          'w-full break-words category_item-text mt-[16px] leading-[24px] sm-text-[16px] text-[14px]',
          styled['categoryItem-text']
        )}
      >
        {text}
      </span>
    </div>
  );
}
ItemCategory.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default ItemCategory;
