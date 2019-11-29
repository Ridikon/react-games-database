import React from 'react';

import Aside from '../Aside';
import List from '../../containers/List';

import classes from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={classes.mainPage}>
      <Aside/>

      <section>
        <List/>
      </section>
    </div>
  );
};

export default MainPage;
