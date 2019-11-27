/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import classes from './Range.module.scss'
import Button from '../../UI/Button';

const Range = ({ label, min, max, step, rangeValue }) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const htmlFor = `${label}-${Math.random()}`;

  useEffect(() => {
    setMinValue(min);
    setMaxValue(max);
  }, [min, max]);

  const getMin = (e) => {
    setMinValue(e.target.value);
  };

  const getMax = (e) => {
    setMaxValue(e.target.value);
  };

  const applyRange = useCallback(() => {
    rangeValue([minValue, maxValue])
  }, [minValue, maxValue]);

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

      <div>
        <Button size="small" onClick={applyRange}>Apply</Button>
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
