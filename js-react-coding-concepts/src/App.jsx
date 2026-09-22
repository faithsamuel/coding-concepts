import { useState } from "react";
import MovieCard from "./components/MovieCard";
import SearchBox from "./components/SearchBox";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <SearchBox searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <MovieCard />
    </div>
  );
}

export default App;
