/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Aside from '../../components/Aside';
import List from '../../components/List';

import { fetchGames } from '../../actions/gamesActions';
import { fetchPlatforms } from '../../actions/platformsActions';
import { changeTitleAction } from '../../actions/titleActions';
import { sortResetAction } from '../../actions/filterActions';

import classes from './MainPage.module.scss';

const MainPage = ({
                    sortedAt,
                    searchText,
                    sortedRange,
                    games,
                    platforms,
                    category,
                    fetchGames,
                    fetchPlatforms,
                    changeTitleAction,
                    sortResetAction
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

  const sortingCategory = useCallback((data) => {
    if (!sortedAt) {
      return data;
    }

    return _.orderBy(data, [sortingByCategory()], [sortedAt])
  }, [sortedAt]);

  const getCategoryData = useCallback(() => {
    switch (category) {
      case 'games':
        return games.results;
      case 'platforms':
        return platforms.results;
      default:
        return []
    }
  }, [category]);

  const setRangeList = useCallback(() => {
    let min = _.first(sortedRange),
      max = _.last(sortedRange);

    let rangeList = _.filter(sortingCategory(getCategoryData()), item => {
      return (item[sortingByCategory()] >= min) && (item[sortingByCategory()] <= max)
      });

    setCategoryList(rangeList)
  }, [sortedRange]);

  const setSearchList = () => {
    if (!searchText) {
      return setCategoryList(sortingCategory(getCategoryData()));
    }

    let queryList = _.filter(sortingCategory(getCategoryData()), item => {
      return item.name.toLowerCase().includes(searchText.toLowerCase())
    });

    setCategoryList(queryList)
  };

  useEffect(() => {
    setSearchList()
  }, [searchText]);

  useEffect(() => {
    if (category === 'games' && _.isEmpty(games)) {
      fetchGames();
    }

    if (category === 'platforms' && _.isEmpty(platforms)) {
      fetchPlatforms();
    }
  }, [category]);

  useEffect(() => {
    sortResetAction();

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
  }, [category]);

  useEffect(() => {
    if (!sortedAt) {
      setRangeList()
    } else {
      setCategoryList(sortingCategory(categoryList))
    }
  }, [sortedAt]);

  useEffect(() => {
    setRangeList()
  }, [sortedRange]);

  return (
    <div className={classes.mainPage}>
      <Aside/>

      <section>
        <List list={categoryList} category={category}/>
      </section>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    category: store.category.category,
    sortedAt: store.filter.sortedAt,
    searchText: store.filter.searchText,
    sortedRange: store.filter.range,
    games: store.games.games,
    platforms: store.platforms.platforms
  }
};

const mapDispatchToProps = {
  fetchGames,
  fetchPlatforms,
  changeTitleAction,
  sortResetAction
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
