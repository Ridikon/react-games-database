/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';

import find from 'lodash/find';
import get from 'lodash/get';

import { fetchGames } from '../../actions/gamesActions';
import { fetchPlatforms } from '../../actions/platformsActions';
import { changeTitleAction } from '../../actions/titleActions';

import Img from '../../components/Img';
import Button from '../../components/UI/Button';
import GamesDescription from '../../components/GamesDescription';
import PlatformsDescription from '../../components/PlatformsDescription';

import classes from './ViewPage.module.scss';


const ViewPage = ({ games, platforms, fetchGames, fetchPlatforms, changeTitleAction }) => {
  const [viewItem, setViewItem] = useState(null);
  const { category, id } = useParams();

  const getCategoryItem = () => {
    switch (category) {
      case 'games':
        return findItem(games);
      case 'platforms':
        return findItem(platforms);
      default:
        return {}
    }
  };
  
  const renderDescriptionByCategory = () => {
    switch (category) {
      case 'games':
        return <GamesDescription item={viewItem}/>;
      case 'platforms':
        return <PlatformsDescription item={viewItem}/>;
      default:
        return <div>No Data</div>
    }
  };

  const findItem = (data) => find(get(data, 'results'), item => +item.id === +id);

  useEffect(() => {
    let item = getCategoryItem();
    setViewItem(item);
  }, [games, platforms]);

  useEffect(() => {
    if (viewItem) {
      changeTitleAction(viewItem.name);
    }
  }, [viewItem]);

  useEffect(() => {
    if (category === 'games' && !games) {
      fetchGames();
    }

    if (category === 'platforms' && !platforms) {
      fetchPlatforms();
    }
  }, []);

  return (
    <div>
      <div className={classes.btnRow}>
        <NavLink to="/">
          <Button size="small">Back home</Button>
        </NavLink>
      </div>

      <div className={classes.viewPage}>
        <div className={classes.imgWrapper}>
          {viewItem && (<Img src={viewItem['background_image'] || viewItem['image_background']}/>)}
        </div>
        {viewItem && renderDescriptionByCategory()}
      </div>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    games: store.games.games,
    platforms: store.platforms.platforms
  }
};

const mapDispatchToProps = {
  fetchGames,
  fetchPlatforms,
  changeTitleAction
};

ViewPage.defaultProps = {
  games: null,
  platforms: null,
  fetchGames: () => null,
  fetchPlatforms: () => null,
  changeTitleAction: () => null,
};

ViewPage.propTypes = {
  games: PropTypes.object,
  platforms: PropTypes.object,
  fetchGames: PropTypes.func,
  fetchPlatforms: PropTypes.func,
  changeTitleAction: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewPage);
