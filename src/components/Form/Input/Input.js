import React from 'react';
import PropTypes from 'prop-types';

import classes from './Input.module.scss';

const Input = (props) => {
  return (
    <div className={classes.Input}>
      <label htmlFor={props.name}>{props.label}</label>
      <input id={props.name} {...props} />
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
  min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string
};

export default Input;
