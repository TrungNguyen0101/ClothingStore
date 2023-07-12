'use client';

import React from 'react';
import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';

function Input({ name, type = 'text', control, ...props }) {
  const { field } = useController({
    control,
    name,
  });
  return (
    <input
      type={type}
      className={`pb-[8px] px-[10px] outline-none border-b-[1px] border-[#ec0909] w-full ${props.className} `}
      placeholder={props.placeholder}
      name={name}
      {...field}
      {...props}
    />
  );
}
Input.propTypes = {
  name: PropTypes.string,
  control: PropTypes.elementType,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
};
Input.defaultProps = {
  name: '',
  control: null,
  placeholder: '',
  type: '',
  className: '',
};

export default Input;
