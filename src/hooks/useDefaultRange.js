/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import get from 'lodash/get';
import minBy from 'lodash/minBy';
import maxBy from 'lodash/maxBy';
import { useSelector } from 'react-redux';

export function useDefaultRange() {
  const category = useSelector(({ category }) => category.category);
  const games = useSelector(({ games }) => games.games);
  const platforms = useSelector(({ platforms }) => platforms.platforms);
  const int = 1, floatInt = 0.01;

  const [defaultRange, setDefaultRange] = useState(null);

  useEffect(() => {
    if (games || platforms) findRange();
  }, [category]);

  const findRange = () => {
    const field = category === 'games' ? 'rating' : 'games_count';
    const data = category === 'games' ? games.results : platforms.results;

    const minRange = get(minBy(data, item => item[field]), field);
    const maxRange = get(maxBy(data, item => item[field]), field);
    const step = (minRange ^ 0) === minRange ? int : floatInt;

    setDefaultRange({ minRange, maxRange, step });
  };

  return defaultRange
}
