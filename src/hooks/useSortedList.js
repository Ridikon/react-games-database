/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import orderBy from 'lodash/orderBy';
import { getRangeName } from '../helpers/getRangeName';

export function useSortedList() {
  const [sortedList, setSortedList] = useState(null);

  const category = useSelector(({ category }) => category);
  const filter = useSelector(({ filter }) => filter, shallowEqual);
  const {range, sortedAt, searchText} = filter;
  const {categoryTitle, categoryData} = category;

  useEffect(() => {
    if (!searchText && !sortedAt && !range) {
      setSortedList(null);
    }

    if (categoryData && categoryData.results.length) {
      sortData();
    }
  }, [filter]);

  const rangeField = getRangeName(categoryTitle);
  const isFilteringByText = (text, item) => new RegExp(`${text}`, 'i').test(item.name);
  const isFilteringByRange = (item) => range && (item[rangeField] >= range.minRange) && (item[rangeField] <= range.maxRange);

  const sortData = () => {
    const data = categoryData.results.filter(item => (isFilteringByText(searchText, item) && isFilteringByRange(item)));
    const sortedData = sortedAt ? orderBy(data, [rangeField], [sortedAt]) : data;
    setSortedList(sortedData);
  };

  return { sortedList };
}
