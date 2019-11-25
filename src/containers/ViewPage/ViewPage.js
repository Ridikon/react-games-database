/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import _ from 'lodash'
import { fetchGames } from '../../actions/gamesActions';
import { fetchPlatforms } from '../../actions/platformsActions';
import { changeTitleAction } from '../../actions/titleActions';

const ViewPage = ({ games, platforms, fetchGames, fetchPlatforms, changeTitleAction }) => {
  const [viewItem, setViewItem] = useState({});
  const { category, id } = useParams();

  const getCategoryItem = () => {
    switch (category) {
      case 'games':
        return _.find(games.results, item => +item.id === +id);
      case 'platforms':
        return _.find(platforms.results, item => +item.id === +id);
      default:
        return {}
    }
  };

  useEffect(() => {
    let item = getCategoryItem();
    setViewItem(item);
    changeTitleAction(viewItem.name);
  }, [games, platforms]);

  useEffect(() => {
    if (category === 'games' && _.isEmpty(games)) {
      fetchGames();
    }

    if (category === 'platforms' && _.isEmpty(platforms)) {
      fetchPlatforms();
    }
  }, []);

  return (
    <div>

      <div>
        <img src={viewItem['background_image'] || viewItem['image_background']} alt={viewItem.name}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewPage);
