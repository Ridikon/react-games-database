/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ListItem from '../../components/ListItem';
import { fetchGames } from '../../actions/gamesActions';
import { fetchPlatforms } from '../../actions/platformsActions';
import { changeTitleAction } from '../../actions/titleActions';
import { useSortedList } from '../../hooks/useSortedList';

import { constCategories } from '../../constants/categories-constants';
import classes from './List.module.scss';

const { gamesCategory, platformsCategory } = constCategories;

const List = ({
                gamesData,
                platformsData,
                categoryTitle,
                fetchGames,
                fetchPlatforms,
                changeTitleAction
              }) => {
  const [categoryList, setCategoryList] = useState([]);
  const { sortedList } = useSortedList(categoryList);

  const getCategoryData = () => {
    switch (categoryTitle) {
      case gamesCategory:
        return gamesData ? gamesData.results : [];
      case platformsCategory:
        return platformsData ? platformsData.results : [];
      default:
        return [];
    }
  };

  const getTitle = () => {
    switch (categoryTitle) {
      case gamesCategory:
        return gamesData && gamesData.seo_title;
      case platformsCategory:
        return platformsData && (platformsData.seo_title || 'All platforms');
      default:
        return 'No data';
    }
  };

  useEffect(() => {
    if (!gamesData) {
      fetchGames();
    }
  }, []);

  useEffect(() => {
    if (categoryTitle === platformsCategory && !platformsData) {
      fetchPlatforms();
    }

    if (categoryTitle) {
      setCategoryList(getCategoryData());
      changeTitleAction(getTitle());
    }
  }, [categoryTitle]);

  const renderList = () => (sortedList || categoryList)
    .map(item => <ListItem category={categoryTitle} key={item.id} item={item}/>);

  return (
    <div>
      <div className={classes.list}>
        {renderList()}
      </div>
    </div>
  );
};

const mapStateToProps = (store) => ({
  categoryTitle: store.category.categoryTitle,
  gamesData: store.games.gamesData,
  platformsData: store.platforms.platformsData
});

const mapDispatchToProps = {
  fetchGames,
  fetchPlatforms,
  changeTitleAction
};

List.defaultProps = {
  gamesData: null,
  platformsData: null,
  categoryTitle: '',
  fetchGames: () => null,
  fetchPlatforms: () => null,
  changeTitleAction: () => null
};

List.propTypes = {
  gamesData: PropTypes.object,
  platformsData: PropTypes.object,
  categoryTitle: PropTypes.string,
  fetchGames: PropTypes.func,
  fetchPlatforms: PropTypes.func,
  changeTitleAction: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
