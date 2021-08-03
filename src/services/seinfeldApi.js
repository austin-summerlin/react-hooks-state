export const getSeinfeldQuote = async () => {
  const res = await fetch('https://api.icndb.com/jokes/random');
  const json = res.json();
  return {
    quote: json.quote,
    character: json.author
  };
};


