/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../../UI/Button';
import { sortRangeAction } from '../../../actions/filterActions';
import { useDefaultRange } from '../../../hooks/useDefaultRange';

import classes from './Range.module.scss'

const Range = ({ category, sortRangeAction, range }) => {
  const defaultRange = useDefaultRange();
  const [rangeValues, setRangeValues] = useState(null);
  const htmlFor = `${category}-${Math.random()}`;

  useEffect(() => {
    if (defaultRange) {
      setRangeValues(defaultRange);
      sortRangeAction(defaultRange);
    }
  }, [defaultRange]);

  useEffect(() => {
    if (!range) {
      setRangeValues(defaultRange);
      sortRangeAction(defaultRange);
    }
  }, [range]);

  const getValue = ({target: {name, value}}) => {
    setRangeValues({ ...rangeValues, [name]: value });
  };

  const applyRange = () => {
    sortRangeAction(rangeValues)
  };

  return (
    <Fragment>
      {rangeValues && (
        <div className={classes.range}>
          <div className={classes.rangeItem}>
            <label htmlFor={htmlFor}>Min {category}</label>
            <input
              name="minRange"
              value={rangeValues.minRange}
              min={defaultRange.minRange}
              max={defaultRange.maxRange}
              step={defaultRange.step}
              type="number"
              id={htmlFor}
              onChange={getValue}
            />
          </div>

          <div className={classes.rangeItem}>
            <label htmlFor={htmlFor}>Max {category}</label>
            <input
              name="maxRange"
              value={rangeValues.maxRange}
              min={defaultRange.minRange}
              max={defaultRange.maxRange}
              step={defaultRange.step}
              type="number"
              id={htmlFor}
              onChange={getValue}
            />
          </div>

          <div>
            <Button typeColor="success" size="small" onClick={applyRange}>Apply</Button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (store) => {
  return {
    category: store.category.category,
    range: store.filter.range
  }
};

const mapDispatchToProps = {
  sortRangeAction
};

Range.defaultProps = {
  category: 'games',
  sortRangeAction: () => null
};

Range.propTypes = {
  category: PropTypes.string,
  sortRangeAction: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Range);
