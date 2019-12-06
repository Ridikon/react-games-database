/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { batch, connect } from 'react-redux';
import PropTypes from 'prop-types';

import Select from '../../components/Form/Select';
import Range from '../../components/Form/Range';
import Input from '../../components/Form/Input/Input';
import Button from '../../components/UI/Button';

import { changeCategoryAction, fetchData } from '../../actions/categoryActions';
import { filterResetAction, querySearchAction, sortingAction } from '../../actions/filterActions';

import classes from './Filter.module.scss';
import sortingOptions from '../../mocked-data/sortingOptions';
import categories from '../../mocked-data/categories';

const Filter = ({
                  categoryTitle,
                  sortedAt,
                  searchText,
                  changeCategoryAction,
                  sortingAction,
                  querySearchAction,
                  filterResetAction,
                  fetchData
                }) => {
  useEffect(() => {
    querySearchAction('')
  }, [categoryTitle]);

  const getSearchValue = (e) => {
    querySearchAction(e.target.value)
  };

  const filterReset = () => {
    filterResetAction();
  };

  const changeCategory = (value) => {
    batch(() => {
      changeCategoryAction(value);
      fetchData()
    })
  };

  return (
    <div className={classes.filter}>
      <Select value={categoryTitle} label="Chose category" onChange={changeCategory} options={categories}/>
      <Select value={sortedAt} label="Sort" onChange={sortingAction} options={sortingOptions}/>
      <Range/>
      <Input value={searchText} label="Search" placeholder="Enter the text" onChange={getSearchValue}/>

      <div className={classes.buttonWrapper}>
        <Button typeColor="warning" size="small" onClick={filterReset}>Reset filter</Button>
      </div>
    </div>
  );
};

const mapStateToProps = (store) => ({
  categoryTitle: store.category.categoryTitle,
  sortedAt: store.filter.sortedAt,
  searchText: store.filter.searchText
});

const mapDispatchToProps = {
  changeCategoryAction,
  sortingAction,
  querySearchAction,
  filterResetAction,
  fetchData
};

Filter.defaultProps = {
  categoryTitle: '',
  sortedAt: '',
  searchText: '',
  changeCategoryAction: () => null,
  sortingAction: () => null,
  querySearchAction: () => null,
  filterResetAction: () => null,
  fetchData: () => null
};

Filter.propTypes = {
  categoryTitle: PropTypes.string,
  sortedAt: PropTypes.string,
  searchText: PropTypes.string,
  changeCategoryAction: PropTypes.func,
  sortingAction: PropTypes.func,
  querySearchAction: PropTypes.func,
  filterResetAction: PropTypes.func,
  fetchData: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
