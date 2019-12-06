/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import get from 'lodash/get';
import minBy from 'lodash/minBy';
import maxBy from 'lodash/maxBy';
import isInteger from 'lodash/isInteger';

import { getRangeName } from '../helpers/getRangeName';
import { constCategories } from '../constants/categories-constants';
import { sortRangeAction } from '../actions/filterActions';

const { gamesCategory } = constCategories;

export function useDefaultRange() {
  const [rangeValues, setRangeValues] = useState(null);
  const [defaultRange, setDefaultRange] = useState(null);

  const category = useSelector(({ category }) => category);
  const range = useSelector(({ filter }) => filter.range);
  const {categoryTitle, categoryData} = category;
  const dispatch  = useDispatch();
  const int = 1, floatInt = 0.01;

  useEffect(() => {
    if (defaultRange) {
      setRangeValues(defaultRange);
      dispatch(sortRangeAction(defaultRange));
    }
  }, [defaultRange]);

  useEffect(() => {
    if (!range) {
      setRangeValues(defaultRange);
      dispatch(sortRangeAction(defaultRange));
    }
  }, [range]);

  useEffect(() => {
    if (categoryData) findRange();
  }, [categoryTitle]);

  const findRange = () => {
    const field = getRangeName(categoryTitle);
    const data = categoryTitle === gamesCategory ? categoryData.results : categoryData.results;

    const minRange = get(minBy(data, item => item[field]), field);
    const maxRange = get(maxBy(data, item => item[field]), field);
    const step = isInteger(minRange) ? int : floatInt;

    setDefaultRange({ minRange, maxRange, step });
  };

  return {defaultRange, rangeValues, setRangeValues}
}
