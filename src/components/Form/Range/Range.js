/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../../UI/Button';
import Input from '../Input/Input';
import { sortRangeAction } from '../../../actions/filterActions';
import { useDefaultRange } from '../../../hooks/useDefaultRange';
import { getRangeName } from '../../../helpers/getRangeName';

import { constCategories } from '../../../constants/categories-constants';
import classes from './Range.module.scss'

const Range = ({ categoryTitle, sortRangeAction }) => {
  const { defaultRange, rangeValues, setRangeValues } = useDefaultRange();
  const rangeName = getRangeName(categoryTitle);

  const handleRangeChange = ({ target: { name, value } }) => {
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
            <Input
              label={`Min ${rangeName}`}
              name="minRange"
              value={rangeValues.minRange}
              min={defaultRange.minRange}
              max={defaultRange.maxRange}
              step={defaultRange.step}
              type="number"
              onChange={handleRangeChange}
            />
          </div>

          <div className={classes.rangeItem}>
            <Input
              label={`Max ${rangeName}`}
              name="maxRange"
              value={rangeValues.maxRange}
              min={defaultRange.minRange}
              max={defaultRange.maxRange}
              step={defaultRange.step}
              type="number"
              onChange={handleRangeChange}
            />
          </div>

          <Button typeColor="success" size="small" onClick={applyRange}>Apply</Button>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (store) => ({
  categoryTitle: store.category.categoryTitle
});

const mapDispatchToProps = {
  sortRangeAction
};

Range.defaultProps = {
  categoryTitle: constCategories.gamesCategory,
  sortRangeAction: () => null
};

Range.propTypes = {
  categoryTitle: PropTypes.string,
  sortRangeAction: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Range);
