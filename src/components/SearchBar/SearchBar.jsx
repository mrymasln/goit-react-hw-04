import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { toast } from "react-hot-toast";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      toast.error("Lütfen bir kelime girin!");
      return;
    }

    onSearch(query);
    setQuery("");
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSearch}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
        {/* <Toaster position="bottom-center" /> */}
      </form>
    </header>
  );
};

export default SearchBar;
