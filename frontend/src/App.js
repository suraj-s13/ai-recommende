import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import ToolCard from "./components/ToolCard";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Please enter a search query");
      return;
    }
    setLoading(true);
    setError("");
    setResults([]);

    try {
      const response = await axios.post("http://127.0.0.1:5000/recommend", {
        query,
      });
      setResults(response.data);
    } catch (err) {
      setError("Failed to fetch recommendations. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Tool Finder</h1>
        <p>
          Describe what you need, and we'll find the right AI tool for the job.
        </p>
      </header>
      <main>
        <SearchBar
          query={query}
          setQuery={setQuery}
          handleSearch={handleSearch}
        />
        {error && <p className="error-message">{error}</p>}
        {loading && <p className="loading-message">Finding tools...</p>}
        <div className="results-container">
          {results.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
