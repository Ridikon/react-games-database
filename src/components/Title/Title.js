import React from 'react';

import classes from './Title.module.scss';

const Title = ({title}) => {
  return (
    <div className={classes.title}>
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
