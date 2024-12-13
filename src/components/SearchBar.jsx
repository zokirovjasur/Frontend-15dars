import React, { useState, useCallback } from "react";
import useDebounce from "../hooks/useDebounce";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(onSearch, 300);

  const handleChange = useCallback(
    (e) => {
      const value = e.target.value;
      setSearchTerm(value);
      debouncedSearch(value);
    },
    [debouncedSearch]
  );

  return (
    <input
      type="text"
      placeholder="Search contacts..."
      value={searchTerm}
      onChange={handleChange}
      className="w-full px-4 py-2 mb-4 border rounded"
    />
  );
};

export default SearchBar;
