/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import orderBy from 'lodash/orderBy';

export function useSortedList(categoryList) {
  const [sortedList, setSortedList] = useState(null);

  const category = useSelector(({ category }) => category.category);
  const filter = useSelector(({ filter }) => filter, shallowEqual);
  const {range, sortedAt, searchText} = filter;

  useEffect(() => {
    if (!searchText && !sortedAt && !range) {
      setSortedList(null);
    }

    if (categoryList && categoryList.length) {
      sortData();
    }
  }, [categoryList, filter]);

  const getSortingStr = () => category === 'games' ? 'rating' : 'games_count';
  const isFilteringByText = (text, item) => new RegExp(`${text}`, 'i').test(item.name);
  const isFilteringByRange = (item) => range && (item[getSortingStr()] >= range.minRange) && (item[getSortingStr()] <= range.maxRange);

  const sortData = () => {
    const data = categoryList.filter(item => (isFilteringByText(searchText, item) && isFilteringByRange(item)));
    const sortedData = sortedAt ? orderBy(data, [getSortingStr()], [sortedAt]) : data;
    setSortedList(sortedData);
  };

  return { sortedList };
}
