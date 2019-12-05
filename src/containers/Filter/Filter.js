/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Select from '../../components/Form/Select';
import Range from '../../components/Form/Range';
import Input from '../../components/Form/Input/Input';
import Button from '../../components/UI/Button';

import { changeCategoryAction } from '../../actions/categoryActions';
import { filterResetAction, querySearchAction, sortingAction } from '../../actions/filterActions';

import classes from './Filter.module.scss';
import sortingOptions from '../../mocked-data/sortingOptions';
import categories from '../../mocked-data/categories';

const Filter = ({
                  category,
                  sortedAt,
                  searchText,
                  changeCategoryAction,
                  sortingAction,
                  querySearchAction,
                  filterResetAction
                }) => {
  useEffect(() => {
    querySearchAction('')
  }, [category]);

  const getSearchValue = (e) => {
    querySearchAction(e.target.value)
  };

  const filterReset = () => {
    filterResetAction();
  };

  return (
    <div className={classes.filter}>
      <Select value={category} label="Chose category" onChange={changeCategoryAction} options={categories}/>
      <Select value={sortedAt} label="Sort" onChange={sortingAction} options={sortingOptions}/>
      <Range />
      <Input value={searchText} label="Search" placeholder="Enter the text" onChange={getSearchValue}/>

      <Button typeColor="warning" size="small" onClick={filterReset}>Reset filter</Button>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    category: store.category.category,
    sortedAt: store.filter.sortedAt,
    searchText: store.filter.searchText
  }
};

const mapDispatchToProps = {
  changeCategoryAction,
  sortingAction,
  querySearchAction,
  filterResetAction
};

Filter.defaultProps = {
  category: '',
  sortedAt: '',
  searchText: '',
  changeCategoryAction: () => null,
  sortingAction: () => null,
  querySearchAction: () => null,
  filterResetAction: () => null,
};

Filter.propTypes = {
  category: PropTypes.string,
  sortedAt: PropTypes.string,
  searchText: PropTypes.string,
  changeCategoryAction: PropTypes.func,
  sortingAction: PropTypes.func,
  querySearchAction: PropTypes.func,
  filterResetAction: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
