import React from 'react';
import PropTypes from 'prop-types';

import classes from './Input.module.scss';

const Input = (props) => {
  const htmlFor = `${props.type}-${Math.random()}`;

  return (
    <div className={classes.Input}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input id={htmlFor} {...props} />
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
