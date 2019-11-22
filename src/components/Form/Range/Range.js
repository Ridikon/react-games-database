import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import classes from './Range.module.scss'

const Range = ({ label, min, max, step, rangeValue }) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const htmlFor = `${label}-${Math.random()}`;
  const getRange = _.debounce(() => rangeValue([minValue, maxValue]), 1500);
  const getToFixedNum = () => ((+step ^ 0) === +step) ? 0 : 2;
  const prepareValue = (val) => Number(val).toFixed(getToFixedNum()).toString();

  useEffect(() => {
    setMinValue(min);
    setMaxValue(max);
  }, [min, max]);

  const getMin = (e) => {
    setMinValue(prepareValue(e.target.value));
    getRange()
  };

  const getMax = (e) => {
    setMaxValue(prepareValue(e.target.value));
    getRange()
  };

  return (
    <div className={classes.range}>
      <div className={classes.rangeItem}>
        <label htmlFor={htmlFor}>Min {label}</label>
        <input
          value={minValue}
          min={min}
          max={max}
          step={step}
          type="number"
          id={htmlFor}
          onChange={getMin}
        />
      </div>

      <div className={classes.rangeItem}>
        <label htmlFor={htmlFor}>Max {label}</label>
        <input
          value={maxValue}
          min={min}
          max={max}
          step={step}
          type="number"
          id={htmlFor}
          onChange={getMax}
        />
      </div>
    </div>
  );
};

Range.defaultProps = {
  label: 'Label',
  rangeValue: () => null,
  min: '0',
  max: '11',
  step: '1'
};

Range.propTypes = {
  label: PropTypes.string,
  rangeValue: PropTypes.func,
  min: PropTypes.string,
  max: PropTypes.string,
  step: PropTypes.string
};

export default Range;
