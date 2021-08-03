import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

function Load({ onClick }) {

  return (
    <div className={style.loadcontainer}>
      <h2 className={style.loadtitle}>Seinfeld</h2>
      <button className={style.loadButton} onClick={onClick}>Get Quote</button>
    </div>
  );
}

Load.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Load;
