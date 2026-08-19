function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search Projects"
      value={searchTerm}
      onChange={(event) => onSearchChange(event.target.value)}
      className="search-bar"
    />
  );
}

export default SearchBar;