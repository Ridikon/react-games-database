import React from 'react';
import * as PropTypes from 'prop-types';

import classes from './Title.module.scss';

const Title = ({title}) => {
  return (
    <div className={classes.title}>
      <h1>{title}</h1>
    </div>
  );
};

Title.defaultProps = {
  title: 'title'
};

Title.propTypes = {
  title: PropTypes.string
};

export default Title;
