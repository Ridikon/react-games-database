import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import classes from './Input.module.scss';

const Input = ({type, label, value, onChange, placeholder}) => {
    const cls = classNames({
      [classes.Input]: true,
    });
    const htmlFor = `${type}-${Math.random()}`;

    return (
        <div className={cls}>
            <label htmlFor={htmlFor}>{label}</label>
            <input
                id={htmlFor}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};

Input.defaultProps = {
  label: 'Label',
  value: '',
  onChange: () => null,
  type: 'text',
  placeholder: 'type something'
};

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string
};

export default Input;
