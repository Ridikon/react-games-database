import React from 'react';
import ListItem from '../ListItem';

import classes from './List.module.scss';

const List = ({ list = [], category }) => {
  const renderList = () => {
    return list.map(item => <ListItem category={category} key={item.id} item={item}/>)
  };

  return (
    <div>
      <div className={classes.list}>
        {renderList()}
      </div>
    </div>
  );
};

export default List;
