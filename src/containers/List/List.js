/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ListItem from '../../components/ListItem';
import { changeTitleAction } from '../../actions/titleActions';
import { useSortedList } from '../../hooks/useSortedList';
import { fetchData } from '../../actions/categoryActions';

import classes from './List.module.scss';

const List = ({
                categoryTitle,
                categoryData,
                fetchData,
                changeTitleAction
              }) => {
  const { sortedList } = useSortedList();
  const getTitle = () => categoryData && (categoryData.seo_title || 'All platforms');

  useEffect(() => {
    if (!categoryData) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    changeTitleAction(getTitle());
  }, [categoryTitle]);

  const renderList = () => {
    if (!categoryData) return <div>No data</div>;
    return (sortedList || categoryData.results)
      .map(item => (<ListItem category={categoryTitle} key={item.id} item={item}/>));
  };

  return (
    <div>
      <div className={classes.list}>
        {renderList()}
      </div>
    </div>
  );
};

const mapStateToProps = (store) => ({
  categoryTitle: store.category.categoryTitle,
  categoryData: store.category.categoryData,
});

const mapDispatchToProps = {
  fetchData,
  changeTitleAction
};

List.defaultProps = {
  categoryData: null,
  categoryTitle: '',
  changeTitleAction: () => null,
  fetchData: () => null
};

List.propTypes = {
  categoryData: PropTypes.object,
  categoryTitle: PropTypes.string,
  fetchData: PropTypes.func,
  changeTitleAction: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
