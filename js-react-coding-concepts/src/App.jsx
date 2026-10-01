import { useState } from "react";
// import MovieCard from "./components/MovieCard";
import SearchBox from "./components/SearchBox";
import MovieResults from "./components/MovieResults";

function App() {
  const movies = [
    { id: 1, title: "Batman Begins" },
    { id: 2, title: "Inception" },
    { id: 3, title: "The Dark Knight" },
    { id: 4, title: "Interstellar" },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <SearchBox searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <MovieResults searchTerm={searchTerm} movies={movies} />
      {/* <MovieCard /> */}
    </div>
  );
}

export default App;
