import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

import { constRange } from '../../constants/range-constants';
import classes from './Img.module.scss';

const {rating, gamesCount} = constRange;

function Img({ item, src, small }) {
  const cls = classNames({
    [classes.image]: true,
    [classes.small]: small,
    [classes.normal]: !small,
  });

  const itemInfo = () => {
    if (rating in item) {
      return renderInfo(`Rating: ${item.rating}`);
    }

    if (gamesCount in item) {
      return renderInfo(`Games count: ${item.games_count}`);
    }

    return null;
  };

  const renderInfo = (info) => {
    return (
      <div className={classes.info}>
        {info}
      </div>
    )
  };

  return (
    <>
      { item ?
        (<div className={cls}>
          <img src={item['background_image'] || item['image_background']} alt={item.alt}/>
          {itemInfo()}
        </div>) :
        (<div className={cls}>
          <img src={src} alt="img"/>
        </div>)
      }
    </>
  );
}

Img.propTypes = {
  item: PropTypes.object,
  src: PropTypes.string
};

export default Img;
