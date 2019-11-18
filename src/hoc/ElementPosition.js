import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ElementPosition = ({children, row, vCentered, hCentered, vEnd, hEnd}) => {
  let cls = classNames({
    'is-flex': true,
    'direction-row': row,
    'direction-column': !row,
    'is-v-centered': vCentered,
    'is-h-centered': hCentered,
    'is-v-end': vEnd,
    'is-h-end': hEnd
  });

  return (
    <div className={cls}>
      {children}
    </div>
  );
};

ElementPosition.defaultProps = {
  row: true,
  vCentered: false,
  hCentered: false,
  vEnd: false,
  hEnd: false
};

ElementPosition.propTypes = {
  children: PropTypes.element.isRequired,
  row: PropTypes.bool,
  vCentered: PropTypes.bool,
  hCentered: PropTypes.bool,
  vEnd: PropTypes.bool,
  hEnd: PropTypes.bool
};

export default ElementPosition;
