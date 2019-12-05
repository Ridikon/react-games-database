import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import classes from './Input.module.scss';

const Input = ({type, name, label, min, max, step, value, onChange, placeholder}) => {
    const cls = classNames({
      [classes.Input]: true,
    });
    const htmlFor = `${type}-${Math.random()}`;

    return (
        <div className={cls}>
            <label htmlFor={htmlFor}>{label}</label>
            <input
                name={name}
                id={htmlFor}
                min={min}
                max={max}
                step={step}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};

Input.defaultProps = {
  type: 'text',
  name: '',
  min: '',
  max: '',
  step: '',
  label: 'Label',
  value: '',
  onChange: () => null,
  placeholder: 'type something'
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  step: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string
};

export default Input;
