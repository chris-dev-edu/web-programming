import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState("comedy");
  const [sort, setSort] = useState("like_count");
  const [page, setPage] = useState(1);

  const getMovies = async (genre, sort, page) => {
    setLoading(true);
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?sort_by=${sort}&genre=${genre}&page=${page}`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies(genre, sort, page);
  }, []);

  useEffect(() => {
    getMovies(genre, sort, page);
  }, [genre, sort, page]);

  return (
    <>
      <div>
        <span>genre</span>
        <select onChange={(e) => setGenre(e.target.value)}>
          <option value="comedy">comedy</option>
          <option value="action">action</option>
          <option value="sci-fi">sci-fi</option>
          <option value="horror">horror</option>
          <option value="romance">romance</option>
        </select>
        <span>sort_by</span>
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="like_count">like</option>
          <option value="date_added">date</option>
        </select>
        <div>
          <button onClick={() => setPage(1)}>1</button>
          <button onClick={() => setPage(2)}>2</button>
          <button onClick={() => setPage(3)}>3</button>
        </div>
      </div>
      <div className={styles.container}>
        {loading ? (
          <div className={styles.loader}>
            <span>Loading...</span>
          </div>
        ) : (
          <div className={styles.movies}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
export default Home;
