
import { Link } from 'react-router-dom';
import movies from "../../data/movies";


export default function MovieList() {

  return (
    <main>
      <h1>Movie List</h1>
      <section>
        {movies.map(movie => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <Link to={`/movie/${movie.id}`}>View Details</Link>
          </div>
        ))}
      </section>
    </main>
  );
}