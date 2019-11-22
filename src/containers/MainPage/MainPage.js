/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Aside from '../../components/Aside';
import List from '../../components/List';

import { fetchGames } from '../../actions/gamesActions';
import { fetchPlatforms } from '../../actions/platformsActions';
import { changeTitleAction } from '../../actions/titleActions';
import { filterResetAction } from '../../actions/filterActions';

import classes from './MainPage.module.scss';

const MainPage = ({
                    sortedAt,
                    sortedRange,
                    games,
                    platforms,
                    category,
                    fetchGames,
                    fetchPlatforms,
                    changeTitleAction,
                    filterResetAction
                  }) => {
  const [categoryList, setCategoryList] = useState([]);

  const sortingByCategory = useCallback(() => {
    switch (category) {
      case 'games':
        return 'rating';
      case 'platforms':
        return 'games_count';
      default:
        return ''
    }
  }, [category]);

  const resetSortingByCategory = useCallback(() => {
    switch (category) {
      case 'games':
        setCategoryList(games.results);
        break;
      case 'platforms':
        setCategoryList(platforms.results);
        break;
      default:
        setCategoryList([])
    }
  }, [category, games, platforms]);

  useEffect(() => {
    if (category === 'games' && _.isEmpty(games)) {
      fetchGames();
    }

    if (category === 'platforms' && _.isEmpty(platforms)) {
      fetchPlatforms();
    }
  }, [category]);

  useEffect(() => {
    filterResetAction();

    switch (category) {
      case 'games':
        setCategoryList(games.results);
        changeTitleAction('All games');
        break;
      case 'platforms':
        setCategoryList(platforms.results);
        changeTitleAction('All platforms');
        break;
      default:
        setCategoryList([]);
        changeTitleAction('No data')
    }
  }, [category, games, platforms]);

  useEffect(() => {
    if (!sortedAt) {
      resetSortingByCategory();
    } else {
      setCategoryList(_.orderBy(categoryList, [sortingByCategory()], [sortedAt]))
    }
  }, [sortedAt]);

  useEffect(() => {
    let rangeList = _.filter(categoryList, item => {
      return item[sortingByCategory()] >= _.first(sortedRange) && item[sortingByCategory()] <= _.last(sortedRange)
    });

    setCategoryList(rangeList)
  }, [sortedRange]);

  return (
    <div className={classes.mainPage}>
      <Aside/>

      <section>
        <List list={categoryList}/>
      </section>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    category: store.category.category,
    sortedAt: store.filter.sortedAt,
    sortedRange: store.filter.range,
    games: store.games.games,
    platforms: store.platforms.platforms
  }
};

const mapDispatchToProps = {
  fetchGames,
  fetchPlatforms,
  changeTitleAction,
  filterResetAction
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
