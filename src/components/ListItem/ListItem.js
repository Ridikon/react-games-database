import React from 'react';
import { NavLink } from 'react-router-dom';
import * as PropTypes from 'prop-types';

import ElementPosition from '../../hoc/ElementPosition';
import Button from '../UI/Button';
import Img from '../Img';
import classes from './ListItem.module.scss';

const ListItem = ({ item, category }) => {

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
        <Img item={item}/>

        <div>
          <span>{item.name}</span>
          {itemDescription()}
        </div>
      </div>

      <ElementPosition hEnd={true}>
        <NavLink to={`/view/${category}/${item.id}`}>
          <Button size="small" typeColor="success">
            View
          </Button>
        </NavLink>

      </ElementPosition>
    </div>
  );
};

ListItem.defaultProps = {
  item: {
    released: '2015-05-18',
    name: 'name',
    id: 1
  },
  category: PropTypes.string
};

ListItem.propTypes = {
  item: PropTypes.object,
  category: PropTypes.string
}

export default ListItem;
