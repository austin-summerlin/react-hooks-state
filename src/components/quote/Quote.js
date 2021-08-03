import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote, character }) => {
  console.log(quote);
  return (
    < div className="quote" >
      <figure>
        <h3>{character}</h3>
        <p>{quote}</p>
      </figure>
    </div >
  );
};

Quote.propTypes = {
  quote: PropTypes.string,
  character: PropTypes.string,
};

export default Quote;
