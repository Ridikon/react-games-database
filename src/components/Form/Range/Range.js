import React from 'react';
import PropTypes from 'prop-types';

import classes from './Range.module.scss'

const Range = ({ label, value, min, max, step, rangeValue }) => {
  const htmlFor = `${label}-${Math.random()}`;

  const getRangeValue = (e) => {
    value = e.target.value;
    rangeValue(value)
  };

  return (
    <div className={classes.Range}>
      <label htmlFor={htmlFor}>{label}: {value}</label>
      <input
        min={min}
        max={max}
        type="range"
        step={step}
        id={htmlFor}
        onChange={getRangeValue}
      />
    </div>
  );
};

Range.defaultProps = {
  label: 'Label',
  value: '0',
  rangeValue: () => null,
  min: '0',
  max: '11'
};

Range.propTypes = {
  label: PropTypes.string,
  rangeValue: PropTypes.func,
  value: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string
};

export default Range;
