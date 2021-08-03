export const getSeinfeldQuote = async () => {
  const res = await fetch('https://seinfeld-quotes.herokuapp.com/random');
  const quote = await res.json();
  return {
    quote: quote.quote,
    character: quote.author
  };
};


