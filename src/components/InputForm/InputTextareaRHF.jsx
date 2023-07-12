import React from 'react';
import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';

function InputTextareaRHF({
  name = '',
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
      <textarea
        id={name}
        name={name}
        placeholder={props.placeholder}
        className={` bg-[#f5f5f5] rounded py-[10px] px-[10px] text-[20px] duration-300   
             outline-none   lg:h-[207px] focus:bg-[#f97e7e] text-black focus:placeholder-black `}
        {...field}
        {...props}
      />
    </div>
  );
}
InputTextareaRHF.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  // eslint-disable-next-line react/forbid-prop-types
  control: PropTypes.object, // Update the prop type to object
  req: PropTypes.string,
  placeholder: PropTypes.string,
};

InputTextareaRHF.defaultProps = {
  name: null,
  className: null,
  children: null,
  control: null,
  placeholder: null,
  req: null,
};
export default InputTextareaRHF;
