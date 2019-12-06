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
import { changeCategoryAction } from '../../actions/categoryActions';

import { constCategories } from '../../constants/categories-constants';
import classes from './ViewPage.module.scss';

const { gamesCategory, platformsCategory } = constCategories;

const ViewPage = ({ gamesData, platformsData, fetchGames, fetchPlatforms, changeTitleAction, changeCategoryAction }) => {
  const [viewItem, setViewItem] = useState(null);
  const { category, id } = useParams();

  const findItem = (data) => find(get(data, 'results'), item => +item.id === +id);

  const getCategoryItem = () => {
    switch (category) {
      case gamesCategory:
        return findItem(gamesData);
      case platformsCategory:
        return findItem(platformsData);
      default:
        return {}
    }
  };
  
  const renderDescriptionByCategory = () => {
    switch (category) {
      case gamesCategory:
        return <GamesDescription item={viewItem}/>;
      case platformsCategory:
        return <PlatformsDescription item={viewItem}/>;
      default:
        return <div>No Data</div>
    }
  };

  useEffect(() => {
    let item = getCategoryItem();
    setViewItem(item);
  }, [gamesData, platformsData]);

  useEffect(() => {
    if (viewItem) {
      changeTitleAction(viewItem.name);
    }
  }, [viewItem]);

  useEffect(() => {
    if (category === constCategories.gamesCategory && !gamesData) {
      fetchGames();
    }

    if (category === constCategories.platformsCategory && !platformsData) {
      fetchPlatforms();
    }

    changeCategoryAction(category);
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

const mapStateToProps = (store) => ({
  gamesData: store.games.gamesData,
  platformsData: store.platforms.platformsData
});

const mapDispatchToProps = {
  fetchGames,
  fetchPlatforms,
  changeTitleAction,
  changeCategoryAction
};

ViewPage.defaultProps = {
  gamesData: null,
  platformsData: null,
  fetchGames: () => null,
  fetchPlatforms: () => null,
  changeTitleAction: () => null,
  changeCategoryAction: () => null
};

ViewPage.propTypes = {
  gamesData: PropTypes.object,
  platformsData: PropTypes.object,
  fetchGames: PropTypes.func,
  fetchPlatforms: PropTypes.func,
  changeTitleAction: PropTypes.func,
  changeCategoryAction: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewPage);
