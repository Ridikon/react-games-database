/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import MainPage from './components/MainPage';
import Loader from './components/UI/Loader';
import Title from './components/Title';
import './App.scss';
import ViewPage from './containers/ViewPage';

function App({ loading, title }) {
  let routes = (
    <Switch>
      <Route path="/" exact>
        <MainPage />
      </Route>
      <Route path="/view/:category/:id">
        <ViewPage/>
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
    title: store.title.title
  }
};

export default connect(mapStateToProps)(App);
