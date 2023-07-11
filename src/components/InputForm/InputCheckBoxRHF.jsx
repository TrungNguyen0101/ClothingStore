import React from 'react';
import { useController } from 'react-hook-form';

const InputCheckBoxRHF = ({ name = '', children, control, ...props }) => {
  const { field } = useController({
    control,
    name,
  });
  return (
    <div className="flex items-center gap-x-[16px]">
      <input
        id={name}
        name={name}
        type="checkbox"
        className={props.className}
        {...props}
        {...field}
      />
      <label htmlFor={name} className="text-[16px]  select-none">
        {children} {props.req && <span className="text-red-500">*</span>}
      </label>
    </div>
  );
};

export default InputCheckBoxRHF;
