import React from 'react';
import Select from '../../components/Form/Select/Select';
import classes from './Filter.module.scss';

const Filter = ({category, changeCategory}) => {
  const options = [
    {text: 'Games', value: 'games'},
    {text: 'Platforms', value: 'platforms'},
  ];

  return (
    <div className={classes.filter}>
      <Select value={category} label="Chose category" onChange={changeCategory} options={options}/>
    </div>
  );
};

export default Filter;
