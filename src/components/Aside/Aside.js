import React, { useState } from 'react';
import classNames from 'classnames';

import Button from '../UI/Button';
import Filter from '../../containers/Filter';
import classes from './Aside.module.scss';

const Aside = () => {
  const [visible, setVisible] = useState(false);

  let cls = classNames({
    [classes.aside]: true,
    [classes.visible]: visible
  });

  const toggleFilter = () => {
    setVisible(!visible)
  };

  return (
    <aside className={cls}>
      <div className={classes.toggleBtn}>
        <Button size="small" onClick={toggleFilter}>{visible ? 'Close' : 'Open'} filter</Button>
      </div>

      <Filter/>
    </aside>
  );
};

export default Aside;
