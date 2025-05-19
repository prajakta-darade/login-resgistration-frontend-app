// src/components/SearchComponent.js
import React, { useState } from "react";
import data from "../data";

function SearchComponent() {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Dynamic filter (client-side)
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredResults(results);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search fruits..."
        className="w-full p-2 border border-gray-400 rounded"
      />

      <ul className="mt-4">
        {filteredResults.map((item) => (
          <li key={item.id} className="p-2 border-b">
            {item.name}
          </li>
        ))}
        {query && filteredResults.length === 0 && (
          <li className="text-gray-500 p-2">No results found</li>
        )}
      </ul>
    </div>
  );
}

export default SearchComponent;
