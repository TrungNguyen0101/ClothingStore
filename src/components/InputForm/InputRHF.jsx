import React from 'react';
import { useController } from 'react-hook-form';

const InputRHF = ({
  name = '',
  type = 'text',
  className,
  children,
  control,
  ...props
}) => {
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
        name={name}
        type={type}
        placeholder={props.placeholder}
        className={` bg-[#f5f5f5] rounded py-[10px] px-[10px] text-[20px] duration-300   
            focus:bg-[#a9a9a9]  outline-none  text-black`}
        {...field}
        {...props}
      />
    </div>
  );
};

export default InputRHF;
