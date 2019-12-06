/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { batch, connect } from 'react-redux';
import * as PropTypes from 'prop-types';

import find from 'lodash/find';
import get from 'lodash/get';

import { changeTitleAction } from '../../actions/titleActions';
import { changeCategoryAction, fetchData } from '../../actions/categoryActions';

import Img from '../../components/Img';
import Button from '../../components/UI/Button';
import GamesDescription from '../../components/GamesDescription';
import PlatformsDescription from '../../components/PlatformsDescription';

import { constCategories } from '../../constants/categories-constants';
import classes from './ViewPage.module.scss';

const { gamesCategory, platformsCategory } = constCategories;

const ViewPage = ({ categoryData, fetchData, changeTitleAction, changeCategoryAction }) => {
  const [viewItem, setViewItem] = useState(null);
  const { category, id } = useParams();

  const findItem = (data) => find(get(data, 'results'), item => +item.id === +id);

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
    if (!categoryData) {
      batch(() => {
        changeCategoryAction(category);
        fetchData();
      })
    }
  }, []);

  useEffect(() => {
    if (categoryData) {
      const item = findItem(categoryData);
      changeTitleAction(item.name);
      setViewItem(item);
    }
  }, [categoryData]);

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
  categoryData: store.category.categoryData
});

const mapDispatchToProps = {
  changeTitleAction,
  changeCategoryAction,
  fetchData
};

ViewPage.defaultProps = {
  categoryData: null,
  changeTitleAction: () => null,
  fetchData: () => null,
  changeCategoryAction: () => null
};

ViewPage.propTypes = {
  categoryData: PropTypes.object,
  changeTitleAction: PropTypes.func,
  fetchData: PropTypes.func,
  changeCategoryAction: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewPage);
