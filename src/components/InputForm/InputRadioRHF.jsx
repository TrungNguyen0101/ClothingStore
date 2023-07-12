import React from 'react';
import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';

function InputRadioRHF({ checked, name, children, control, ...props }) {
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
      <div className="flex items-center font-medium cursor-pointer gap-x-3">
        <div
          className={`w-[24px] h-[24px] rounded-full ${
            checked ? 'bg-green-400' : 'bg-gray-200'
          }`}
        />
        <label htmlFor={props.value} className="text-[16px]  select-none">
          {children} {props.req && <span className="text-red-500">*</span>}
        </label>
      </div>
    </div>
  );
}
InputRadioRHF.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string,
  children: PropTypes.node,
  control: PropTypes.string,
  req: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};
InputRadioRHF.defaultProps = {
  checked: null,
  name: null,
  children: null,
  control: null,
  placeholder: null,
  req: null,
  type: null,
  value: null,
};
export default InputRadioRHF;
