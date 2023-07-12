/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';

function InputRHF({
  name = '',
  type = 'text',
  className,
  children,
  control,
  ...props
}) {
  const { field } = useController({
    control,
    name,
  });

  return (
    <div className="flex flex-col text-[#969696]">
      <label htmlFor={name} className="text-[16px] mb-[8px]">
        {children}{' '}
        {props.req === 'required' && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        disabled
        name={name}
        type={type}
        placeholder={props.placeholder}
        className={` bg-[#f5f5f5] rounded py-[10px] px-[10px] leading-[24px] duration-300   
            focus:bg-[#f97e7e] focus:placeholder-black text-[16px] leading outline-none  text-black ${className} `}
        {...field}
        {...props}
      />
    </div>
  );
}
InputRHF.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  control: PropTypes.object,
  req: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

InputRHF.defaultProps = {
  name: null,
  disabled: false,
  className: null,
  children: null,
  control: null,
  placeholder: null,
  req: null,
  type: null,
};

export default InputRHF;
