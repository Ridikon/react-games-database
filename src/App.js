import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import MainPage from './containers/MainPage';
import { fetchGames } from './actions/gamesActions';
import './App.scss';
import Loader from './components/UI/Loader';
import { changeCategoryAction } from './actions/categoryActions';
import { fetchPlatforms } from './actions/platformsActions';

function App({ loading, games = [], platforms = [], category, fetchGames, fetchPlatforms, changeCategoryAction }) {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    if (category === 'games' && !games.length) {
      fetchGames();
    }

    if (category === 'platforms' && !platforms.length) {
      fetchPlatforms();
    }
  }, [platforms, category, games, fetchGames, fetchPlatforms]);

  useEffect(() => {
    if (category === 'games') {
      setCategoryList(games);
    }

    if (category === 'platforms') {
      setCategoryList(platforms);
    }
  }, [platforms, games, category, fetchGames, fetchPlatforms]);

  const changeCategory = (category) => {
    changeCategoryAction(category)
  };

  let routes = (
    <Switch>
      <Route path="/" exact>
        <MainPage category={category} changeCategory={changeCategory} list={categoryList}/>
      </Route>
      <Redirect to="/"/>
    </Switch>
  );

  return (
    <>
      {loading ? <Loader/> : routes}
    </>
  );
}

const mapStateToProps = (store) => {
  return {
    loading: store.loading.loading,
    games: store.games.games,
    platforms: store.platforms.platforms,
    category: store.category.category
  }
};

const mapDispatchToProps = {
  fetchGames,
  fetchPlatforms,
  changeCategoryAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
