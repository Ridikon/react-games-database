import React from 'react';
import * as PropTypes from 'prop-types';

import Img from '../Img';
import classes from './DescriptionList.module.scss';
import ScreenshotsList from '../ScreenshotsList';

function DescriptionList({ item, title }) {
  const renderDescription = () => item.map(i => (
      <div key={i.id}>
        <Img src={i.image_background} small={true}/>
        <span>{i.name}</span>
      </div>
    )
  );

  return (
    <div className={classes.itemDescription}>
      <h3>{title}</h3>
      {item.length && renderDescription()}
    </div>
  )
}

ScreenshotsList.defaultProps = {
  item: [],
  title: 'title'
};

DescriptionList.propTypes = {
  item: PropTypes.array,
  title: PropTypes.string
};

export default DescriptionList;
