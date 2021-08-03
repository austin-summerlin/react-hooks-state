import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote, character }) => {
  return (
    <div className="quote">
      <figure>
        <h1>{character}</h1>
        <figcaption>{quote}</figcaption>
      </figure>
    </div>
  );
};

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

export default Quote;
