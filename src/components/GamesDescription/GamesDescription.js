import React from 'react';
import * as PropTypes from 'prop-types';

import ScreenshotsList from '../ScreenshotsList';
import DescriptionList from '../DescriptionList';

function GamesDescription({item}) {
  return (
    <>
      <ScreenshotsList item={item.short_screenshots} title="Short screenshots"/>

      <DescriptionList item={item.genres} title="Genres"/>
    </>
  )
}

GamesDescription.defaultProps = {
  item: {
    short_screenshots: [],
    genres: []
  }
};

GamesDescription.propTypes = {
  item: PropTypes.object
};

export default GamesDescription;
