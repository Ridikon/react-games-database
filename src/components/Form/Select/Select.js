import React from 'react';
import classes from './Select.module.scss'
import PropTypes from 'prop-types';

const Select = ({label, value, onChange, options}) => {
    const htmlFor = `${label}-${Math.random()}`;

    const changeCategory = (e) => {
      onChange(e.target.value)
    };

    return (
        <div className={classes.Select}>
            <label htmlFor={htmlFor}>{label}</label>
            <select
                id={htmlFor}
                value={value}
                onChange={changeCategory}
            >
                {options.map((option, index) => {
                    return (
                        <option
                            key={option.value + index}
                            value={option.value}
                        >
                            {option.text}
                        </option>
                    )
                })}
            </select>
        </div>
    );
};

Select.defaultProps = {
  label: 'Label',
  value: 'games',
  onChange: () => null,
  options: []
};

Select.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array
};

export default Select;
