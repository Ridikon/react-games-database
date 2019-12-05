/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { batch, connect } from 'react-redux';
import minBy from 'lodash/minBy';
import maxBy from 'lodash/maxBy';
import get from 'lodash/get';
import * as PropTypes from 'prop-types';

import Select from '../../components/Form/Select';
import Range from '../../components/Form/Range';
import Input from '../../components/Form/Input/Input';
import Button from '../../components/UI/Button';

import { changeCategoryAction } from '../../actions/categoryActions';
import { filterResetAction, querySearchAction, sortingAction, sortRangeAction } from '../../actions/filterActions';
import { setGamesRangeAction } from '../../actions/gamesActions';
import { setPlatformsRangeAction } from '../../actions/platformsActions';

import classes from './Filter.module.scss';
import sortingOptions from '../../mocked-data/sortingOptions';
import categories from '../../mocked-data/categories';

const Filter = ({
                  games,
                  platforms,
                  category,
                  sortedAt,
                  searchText,
                  gamesRange,
                  platformsRange,
                  changeCategoryAction,
                  sortingAction,
                  setGamesRangeAction,
                  setPlatformsRangeAction,
                  sortRangeAction,
                  querySearchAction,
                  filterResetAction
                }) => {
  const [rangeValues, setRangeValues] = useState([]);

  useEffect(() => {
    if (games) {
      setGamesRangeAction(setRange(games.results, 'rating'));
    }

    if (platforms) {
      setPlatformsRangeAction(setRange(platforms.results, 'games_count'));
    }
  }, [games, platforms]);

  useEffect(() => {
    switch (category) {
      case 'games':
        setRangeValues(gamesRange);
        sortRangeAction(gamesRange);
        break;
      case 'platforms':
        setRangeValues(platformsRange);
        sortRangeAction(platformsRange);
        break;
      default:
        setRangeValues(gamesRange);
        sortRangeAction(gamesRange);
    }
  }, [category, gamesRange, platformsRange]);

  const setRange = (data, field) => {
    let minRange = get(minBy(data, item => item[field]), field).toString(),
      maxRange = get(maxBy(data, item => item[field]), field).toString(),
      step = (+minRange ^ 0) === +minRange ? '1' : '0.01';

    return {minRange, maxRange, step}
  };

  const getRangeValue = (value) => {
    sortRangeAction(value);
    setRangeValues(value);
  };

  const getSearchValue = (e) => {
    querySearchAction(e.target.value)
  };

  const filterReset = () => {
    const range = {
      minRange: category === 'games' ? gamesRange.minRange : platformsRange.minRange,
      maxRange: category === 'games' ? gamesRange.maxRange : platformsRange.maxRange,
      step: category === 'games' ? gamesRange.step : platformsRange.step
    };

    batch(() => {
      filterResetAction();
      sortRangeAction(range);
      setRangeValues(range);
    });
  };

  const getLabel = () => {
    return category === 'games' ? 'rating' : 'games count'
  };

  return (
    <div className={classes.filter}>
      <Select value={category} label="Chose category" onChange={changeCategoryAction} options={categories}/>
      <Select value={sortedAt} label="Sort" onChange={sortingAction} options={sortingOptions}/>
      <Range
        label={getLabel()}
        min={rangeValues.minRange}
        max={rangeValues.maxRange}
        step={rangeValues.step}
        rangeValue={getRangeValue}
      />
      <Input value={searchText} label="Search" placeholder="Enter the text" onChange={getSearchValue}/>

      <Button typeColor="warning" size="small" onClick={filterReset}>Reset filter</Button>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    category: store.category.category,
    sortedAt: store.filter.sortedAt,
    searchText: store.filter.searchText,
    games: store.games.games,
    platforms: store.platforms.platforms,
    gamesRange: store.games.gamesRange,
    platformsRange: store.platforms.platformsRange
  }
};

const mapDispatchToProps = {
  changeCategoryAction,
  sortingAction,
  setGamesRangeAction,
  setPlatformsRangeAction,
  sortRangeAction,
  querySearchAction,
  filterResetAction
};

Filter.defaultProps = {
  games: null,
  platforms: null,
  gamesRange: null,
  platformsRange: null,
  category: '',
  sortedAt: '',
  searchText: '',
  changeCategoryAction: () => null,
  sortingAction: () => null,
  setGamesRangeAction: () => null,
  setPlatformsRangeAction: () => null,
  sortRangeAction: () => null,
  querySearchAction: () => null,
  filterResetAction: () => null,
};

Filter.propTypes = {
  category: PropTypes.string,
  sortedAt: PropTypes.string,
  searchText: PropTypes.string,
  games: PropTypes.object,
  platforms: PropTypes.object,
  gamesRange: PropTypes.object,
  platformsRange: PropTypes.object,
  changeCategoryAction: PropTypes.func,
  sortingAction: PropTypes.func,
  setGamesRangeAction: PropTypes.func,
  setPlatformsRangeAction: PropTypes.func,
  sortRangeAction: PropTypes.func,
  querySearchAction: PropTypes.func,
  filterResetAction: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
