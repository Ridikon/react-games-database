import React from 'react';

import classes from './ListItem.module.scss';
import ElementPosition from '../../hoc/ElementPosition';
import Button from '../UI/Button';

const ListItem = ({ item }) => {
  const renderInfo = (info) => {
    return (
      <div className={classes.info}>
        {info}
      </div>
    )
  };

  const itemInfo = () => {
    if ('rating' in item) {
      return renderInfo(`Rating: ${item.rating}`);
    }

    if ('games_count' in item) {
      return renderInfo(`Games count: ${item.games_count}`);
    }

    return null;
  };

  const itemDedcription = () => {
    return (
      item.released ?
        <div>
          <span>Released at: {item.released}</span>
        </div> :
        null
    )
  };

  return (
    <div className={classes.listItem}>
      <div>
        <div className={classes.image}>
          <img src={item['background_image'] || item['image_background']} alt={item.name}/>

          {itemInfo()}
        </div>

        <div>
          <span>{item.name}</span>

          {itemDedcription()}
        </div>
      </div>


      <ElementPosition hEnd={true}>
        <Button size="small">
          View
        </Button>
      </ElementPosition>
    </div>
  );
};

export default ListItem;
