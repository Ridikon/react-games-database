import React from 'react';
import * as PropTypes from 'prop-types';

function PlatformsDescription({item}) {
  return (
    <div>
      <p>Platform name: {item.name}</p>
      <p>Games count: {item.games_count}</p>
    </div>
  )
}

PlatformsDescription.defaultProps = {
  item: {
    name: 'name',
    games_count: 2
  }
};

PlatformsDescription.propTypes = {
  item: PropTypes.object
};

export default PlatformsDescription;
