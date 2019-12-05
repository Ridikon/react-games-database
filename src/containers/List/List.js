/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ListItem from '../../components/ListItem';
import { fetchGames } from '../../actions/gamesActions';
import { fetchPlatforms } from '../../actions/platformsActions';
import { changeTitleAction } from '../../actions/titleActions';
import { useSortedList } from '../../hooks/useSortedList';
import classes from './List.module.scss';

const List = ({
                games,
                platforms,
                category,
                fetchGames,
                fetchPlatforms,
                changeTitleAction
              }) => {
  const [categoryList, setCategoryList] = useState([]);
  const { sortedList } = useSortedList(categoryList);

  const getCategoryData = () => {
    switch (category) {
      case 'games':
        return games ? games.results : [];
      case 'platforms':
        return platforms ? platforms.results : [];
      default:
        return [];
    }
  };

  const getTitle = () => {
    switch (category) {
      case 'games':
        return 'All games';
      case 'platforms':
        return 'All platforms';
      default:
        return 'No data';
    }
  };

  useEffect(() => {
    if (!games) {
      fetchGames();
    }
  }, []);

  useEffect(() => {
    if (category === 'platforms' && !platforms) {
      fetchPlatforms();
    }

    if (category) {
      setCategoryList(getCategoryData());
      changeTitleAction(getTitle());
    }
  }, [category]);

  const renderList = () => (sortedList || categoryList)
    .map(item => <ListItem category={category} key={item.id} item={item}/>);

  return (
    <div>
      <div className={classes.list}>
        {renderList()}
      </div>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    category: store.category.category,
    games: store.games.games,
    platforms: store.platforms.platforms
  }
};

const mapDispatchToProps = {
  fetchGames,
  fetchPlatforms,
  changeTitleAction
};

List.defaultProps = {
  games: null,
  platforms: null,
  category: '',
  fetchGames: () => null,
  fetchPlatforms: () => null,
  changeTitleAction: () => null,
};

List.propTypes = {
  games: PropTypes.object,
  platforms: PropTypes.object,
  category: PropTypes.string,
  fetchGames: PropTypes.func,
  fetchPlatforms: PropTypes.func,
  changeTitleAction: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
