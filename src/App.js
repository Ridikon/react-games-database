/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import _ from 'lodash';

import MainPage from './containers/MainPage';
import Loader from './components/UI/Loader';
import Title from './components/Title';
import { fetchGames } from './actions/gamesActions';
import { fetchPlatforms } from './actions/platformsActions';
import { changeTitleAction } from './actions/titleActions';
import { filterResetAction } from './actions/filterActions';
import './App.scss';

function App({ loading, sort, games, platforms, title, category, fetchGames, fetchPlatforms, changeTitleAction, filterReset }) {
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
    if (category === 'games' && !games.results) {
      fetchGames();
    }

    if (category === 'platforms' && !platforms.results) {
      fetchPlatforms();
    }
  }, [category]);

  useEffect(() => {
    filterReset();

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
    if (!sort) {
      resetSortingByCategory();
    } else {
      setCategoryList(_.orderBy(categoryList, [sortingByCategory()], [sort]))
    }
  }, [sort]);

  let routes = (
    <Switch>
      <Route path="/" exact>
        <MainPage category={category} list={categoryList}/>
      </Route>
      <Redirect to="/"/>
    </Switch>
  );

  return (
    <>
      <Title title={title}/>
      {loading ? <Loader/> : routes}
    </>
  );
}

const mapStateToProps = (store) => {
  return {
    loading: store.loading.loading,
    games: store.games.games,
    platforms: store.platforms.platforms,
    category: store.category.category,
    title: store.title.title,
    sort: store.filter.sort
  }
};

const mapDispatchToProps = {
  fetchGames,
  fetchPlatforms,
  changeTitleAction,
  filterReset: filterResetAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
