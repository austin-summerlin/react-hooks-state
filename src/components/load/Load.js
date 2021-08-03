import React from 'react';
import PropTypes from 'prop-types';
import style from '../load/Load.css';

function Load({ onClick }) {

  return (
    <div>
      <h2 className={style.title}>Seinfeld</h2>
      <button className={style.loadButton} onClick={onClick}>Get Quote</button>
    </div>
  );
}

Load.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Load;
