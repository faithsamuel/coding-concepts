function MovieResults({ movies, searchTerm }) {
  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      {filteredMovies.map((movie) => (
        <h3 key={movie.id}>{movie.title}</h3>
      ))}
    </div>
  );
}

export default MovieResults;
