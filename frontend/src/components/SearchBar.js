import react from "react";

function SearchBar({ query, setQuery, handleSearch }) {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        placeholder='Describe your problem, e.g., "help me create a logo"'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSearch()}
      />
      <button className="search-button" onClick={handleSearch}>
        Find AI Tools
      </button>
    </div>
  );
}

export default SearchBar;
