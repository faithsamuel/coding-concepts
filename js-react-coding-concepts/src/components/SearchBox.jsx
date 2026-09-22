function SearchBox({ searchTerm, onSearchChange }) {
  return (
    <input
      value={searchTerm}
      onChange={(event) => {
        onSearchChange(event.target.value);
      }}
    />
  );
}

export default SearchBox;
