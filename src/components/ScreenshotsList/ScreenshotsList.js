import React from 'react';
import * as PropTypes from 'prop-types';

import Img from '../Img';
import classes from './ScreenshotsList.module.scss';

function ScreenshotsList({ item, title }) {
  const renderScreenshots = () => item.map(i => <Img key={i.id} src={i.image} small={true}/>);

  return (
    <div className={classes.screenshotsList}>
      <h3>{title}</h3>
      <div className={classes.screenshotsWrapper}>
        {renderScreenshots()}
      </div>
    </div>
  );
}

ScreenshotsList.defaultProps = {
  item: [],
  title: 'title'
};

ScreenshotsList.propTypes = {
  item: PropTypes.array,
  title: PropTypes.string
};

export default ScreenshotsList;
