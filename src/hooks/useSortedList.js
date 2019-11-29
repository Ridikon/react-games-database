import { useState, useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import orderBy from 'lodash/orderBy';

export function useSortedList(categoryList) {
  const category = useSelector(({ category }) => category.category);
  const searchText = useSelector(({ filter }) => filter.searchText);
  const sortedAt = useSelector(({ filter }) => filter.sortedAt);
  const sortedRange = useSelector(({ filter }) => filter.range, shallowEqual);
  const [sortedList, setSortedList] = useState(null);

  useEffect(() => {
    if (!searchText && !sortedAt) {
      setSortedList(null);
    }

    if (categoryList && categoryList.length) {
      sortData();
    }

  }, [categoryList, searchText, sortedAt, sortedRange]);

  const getSortingStr = () => category === 'games' ? 'rating' : 'games_count';
  const isFilteringByText = (text, item) => new RegExp(`${text}`, 'i').test(item.name);
  const isFilteringByRange = (item) => (item[getSortingStr()] >= sortedRange.minRange) && (item[getSortingStr()] <= sortedRange.maxRange)

  const sortData = () => {
    const data = categoryList.filter(item => (isFilteringByText(searchText, item) && isFilteringByRange(item)));
    const sortedData = sortedAt ? orderBy(data, [getSortingStr()], [sortedAt]) : data;
    setSortedList(sortedData);
  };

  return { sortedList };
}
