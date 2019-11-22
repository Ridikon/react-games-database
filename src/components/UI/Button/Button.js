import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import classes from './Button.module.scss';

const Button = ({children, disabled, typeColor, size, type, onClick}) => {
  let cls = classNames({
    [classes.button]: true,
    [classes[typeColor]]: typeColor,
    [classes[size]]: size,
    [classes.disabled]: disabled
  });

  return (
    <button onClick={onClick} type={type} disabled={disabled} className={cls}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: '',
  disabled: false,
  typeColor: 'primary',
  size: 'large',
  type: 'button'
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  disabled: PropTypes.bool,
  typeColor: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
