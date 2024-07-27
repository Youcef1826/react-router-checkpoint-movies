
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from "./components/MoviesList";
import Movie from "./components/Movie";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;