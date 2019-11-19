import React, { useState } from 'react';
import Filter from '../Filter';
import List from '../../components/List';
import classNames from 'classnames';

const MainPage = ({ category, list, changeCategory }) => {
  const [visible, setVisible] = useState(false);

  let cls = classNames({
    'visible': visible
  });

  return (
    <>
      <aside className={cls} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
        <Filter />
      </aside>

      <section>
        <List list={list}/>
      </section>
    </>
  );
};

export default MainPage;
