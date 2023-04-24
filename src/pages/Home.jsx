import { useEffect, useState } from 'react';

const Home = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=2ead4d55a2c7da4f5313610b563685be`
    )
      .then(res => res.json())
      .then(({ results }) => {
        // const rrr = results.map(result => setTitles(result.original_title));
        setTitles(results);
      });
  }, []);

  // console.log(titles);

  return (
    <>
      <h1>Trending today</h1>
      {titles.length > 0 && (
        <ul>
          {titles.map(title => (
            <li key={title.id}>{title.original_title}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;
