import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import _ from 'lodash';

import MainPage from './containers/MainPage';
import Loader from './components/UI/Loader';
import Title from './components/Title';
import { fetchGames } from './actions/gamesActions';
import { fetchPlatforms } from './actions/platformsActions';
import { changeTitleAction } from './actions/titleActions';
import './App.scss';

function App({ loading, sort, games, platforms, title, category, fetchGames, fetchPlatforms, changeTitleAction }) {
  const [categoryList, setCategoryList] = useState([]);

  const sortingByCategory = () => {
    if (category === 'games') {
      return 'rating'
    }

    if (category === 'platforms') {
      return 'games_count'
    }
  };

  const resetSortingByCategory = () => {
    if (category === 'games') {
      setCategoryList(games.results);
    }

    if (category === 'platforms') {
      setCategoryList(platforms.results);
    }
  };

  useEffect(() => {
    if (category === 'games' && !games.results) {
      fetchGames();
    }

    if (category === 'platforms' && !platforms.results) {
      fetchPlatforms();
    }
  }, [platforms, category, games, title]);

  useEffect(() => {
    if (category === 'games') {
      setCategoryList(games.results);
      changeTitleAction('All games')
    }

    if (category === 'platforms') {
      setCategoryList(platforms.results);
      changeTitleAction('All platforms')
    }
  }, [platforms, games, category, title]);

  useEffect(() => {
    if (sort === 'asc') {
      setCategoryList(_.sortBy(categoryList, sortingByCategory()))
    }

    if (sort === 'desc') {
      setCategoryList(_.sortBy(categoryList, sortingByCategory()).reverse())
    }

    if (!sort) {
      resetSortingByCategory()
    }
  }, [sort, category]);

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
  changeTitleAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
