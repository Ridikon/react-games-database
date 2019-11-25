import React from 'react';

import classes from './ListItem.module.scss';
import ElementPosition from '../../hoc/ElementPosition';
import Button from '../UI/Button';
import { NavLink } from 'react-router-dom';

const ListItem = ({ item, category }) => {
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

  const itemDescription = () => {
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

          {itemDescription()}
        </div>
      </div>


      <ElementPosition hEnd={true}>
        <NavLink to={`/view/${category}/${item.id}`}>
          <Button size="small">
            View
          </Button>
        </NavLink>

      </ElementPosition>
    </div>
  );
};

export default ListItem;
