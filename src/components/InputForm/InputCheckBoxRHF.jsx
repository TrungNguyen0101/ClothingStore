import React from 'react';
import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';

function InputCheckBoxRHF({ name = '', children, control, ...props }) {
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
}
InputCheckBoxRHF.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
  control: PropTypes.string,
  req: PropTypes.string,
  className: PropTypes.string,
};
InputCheckBoxRHF.defaultProps = {
  name: null,
  children: null,
  control: null,
  req: null,
  className: null,
};
export default InputCheckBoxRHF;
