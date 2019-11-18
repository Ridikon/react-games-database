import React from 'react';

import classes from './ListItem.module.scss';
import ElementPosition from '../../hoc/ElementPosition';
import Button from '../UI/Button';

const ListItem = ({ item }) => {
  return (
    <div className={classes.listItem}>
      <div className={classes.image}>
        <img src={item['background_image'] || item['image_background']} alt={item.name}/>

        <div className={classes.rating}>Rating: {item.rating}</div>
      </div>

      <span>{item.name}, {item.released}</span>

      <ElementPosition hEnd={true}>
        <Button size="small">
          View
        </Button>
      </ElementPosition>
    </div>
  );
};

export default ListItem;
