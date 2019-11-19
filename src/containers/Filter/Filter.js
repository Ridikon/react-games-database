import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Select from '../../components/Form/Select';
import { changeCategoryAction } from '../../actions/categoryActions';
import classes from './Filter.module.scss';
import { filterResetAction, sortingAction } from '../../actions/filterActions';
import Range from '../../components/Form/Range';

const Filter = ({ category, sortedAt, changeCategory, sortingAction, filterResetAction }) => {
  useEffect(() => {
    filterResetAction()
  }, [category]);

  const categories = [
    { text: 'Games', value: 'games' },
    { text: 'Platforms', value: 'platforms' }
  ];

  const sortingOptions = [
    { text: 'ASC', value: 'asc' },
    { text: 'DESC', value: 'desc' },
    { text: 'Default', value: '' }
  ];

  const rangeValue = (value) => {
    console.log(value)

  };

  return (
    <div className={classes.filter}>
      <Select value={category} label="Chose category" onChange={changeCategory} options={categories}/>
      <Select value={sortedAt} label="Sort" onChange={sortingAction} options={sortingOptions}/>
      <Range value={'0'} label="Range" min="0" max="11" rangeValue={rangeValue}/>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    category: store.category.category,
    sortedAt: store.filter.sort
  }
};

const mapDispatchToProps = {
  changeCategory: changeCategoryAction,
  sortingAction,
  filterResetAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
