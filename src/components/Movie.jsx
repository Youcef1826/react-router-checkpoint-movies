
import { Link, useParams } from 'react-router-dom';
import movies from "../../data/movies";

export default function Movie() {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));
  

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe 
        width="560" 
        height="315" 
        src={movie.trailer} 
        title={movie.title} 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
}
