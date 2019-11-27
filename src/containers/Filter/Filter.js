/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Select from '../../components/Form/Select';
import Range from '../../components/Form/Range';
import { changeCategoryAction } from '../../actions/categoryActions';
import { filterResetAction, querySearchAction, sortingAction, sortRangeAction } from '../../actions/filterActions';
import { setGamesRangeAction } from '../../actions/gamesActions';
import { setPlatformsRangeAction } from '../../actions/platformsActions';
import classes from './Filter.module.scss';
import Input from '../../components/Form/Input/Input';
import Button from '../../components/UI/Button';

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

  const categories = [
    { text: 'Games', value: 'games' },
    { text: 'Platforms', value: 'platforms' }
  ];

  const sortingOptions = [
    { text: 'ASC', value: 'asc' },
    { text: 'DESC', value: 'desc' },
    { text: 'Default', value: '' }
  ];

  useEffect(() => {
    if (!_.isEmpty(games)) {
      setGamesRangeAction(setRange(games.results, 'rating'));
    }

    if (!_.isEmpty(platforms)) {
      setPlatformsRangeAction(setRange(platforms.results, 'games_count'));
    }

  }, [games, platforms]);

  useEffect(() => {
    switch (category) {
      case 'games':
        setRangeValues(gamesRange);
        break;
      case 'platforms':
        setRangeValues(platformsRange);
        break;
      default:
        return;
    }
  }, [category, gamesRange, platformsRange]);

  const setRange = (data, field) => {
    let minRange = _.get(_.minBy(data, item => item[field]), field).toString(),
      maxRange = _.get(_.maxBy(data, item => item[field]), field).toString(),
      step = (+minRange ^ 0) === +minRange ? '1' : '0.01';

    sortRangeAction([minRange, maxRange]);

    return {minRange, maxRange, step}
  };

  const getRangeValue = (value) => {
    sortRangeAction(value)
  };

  const getSearchValue = (e) => {
    querySearchAction(e.target.value)
  };

  const filterReset = () => {
    filterResetAction();
    sortRangeAction([rangeValues.minRange, rangeValues.maxRange])
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

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
