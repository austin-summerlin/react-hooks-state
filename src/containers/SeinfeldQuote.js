/* eslint-disable max-len */
import React, { useState } from 'react';
import Load from '../components/load/Load';
import Quote from '../components/quote/Quote';
import { getSeinfeldQuote } from '../services/seinfeldApi';
import style from '../containers/SeinfeldQuote.css';

export default function SeinfeldQuote() {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    const quote = await getSeinfeldQuote();
    setQuote(quote);
    setLoading(false);
  };
  return (
    <div className={style.root}>
      <Load onClick={handleClick} />
      {loading ? <h1 className={style.loading}>Loading...</h1> : <Quote className={style.quote} {...quote} />}
    </div>
  );
}

