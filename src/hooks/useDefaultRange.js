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

  const [defaultRange, setDefaultRange] = useState(null);

  useEffect(() => {
    switch (category) {
      case 'games':
        games && findRange();
        break;
      case 'platforms':
        platforms && findRange();
        break;
      default:
        break
    }
  }, [category]);

  const findRange = () => {
    const field = category === 'games' ? 'rating' : 'games_count';
    const data = category === 'games' ? games.results : platforms.results;

    let minRange = get(minBy(data, item => item[field]), field).toString(),
      maxRange = get(maxBy(data, item => item[field]), field).toString(),
      step = (+minRange ^ 0) === +minRange ? '1' : '0.01';

    setDefaultRange({ minRange, maxRange, step });
  };

  return defaultRange
}
