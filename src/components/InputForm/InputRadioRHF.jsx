import React from 'react';
import { useController } from 'react-hook-form';

const InputRadioRHF = ({ checked, name, children, control, ...props }) => {
  const { field } = useController({
    control,
    name,
  });
  return (
    <div className="flex gap-x-[16px]">
      <input
        onChange={() => {}}
        checked={checked}
        type="radio"
        id={props.value}
        className="hidden-input"
        {...field}
        {...props}
      />
      <div className="flex items-center gap-x-3 font-medium cursor-pointer">
        <div
          className={`w-[24px] h-[24px] rounded-full ${
            checked ? 'bg-green-400' : 'bg-gray-200'
          }`}
        ></div>
        <label htmlFor={props.value} className="text-[16px]  select-none">
          {children} {props.req && <span className="text-red-500">*</span>}
        </label>
      </div>
    </div>
  );
};

export default InputRadioRHF;
