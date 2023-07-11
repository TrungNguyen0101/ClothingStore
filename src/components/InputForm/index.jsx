'use client';
import React from 'react';
import { useController } from 'react-hook-form';

const Input = ({ name = '', type = 'text', control, ...props }) => {
  const { field } = useController({
    control,
    name,
  });
  return (
    <input
      type={type}
      className={`pb-[8px] outline-none border-b-[1px] border-[#000000] w-full ${props.className} `}
      placeholder={props.placeholder}
      name={name}
      {...field}
      {...props}
    />
  );
};

export default Input;
