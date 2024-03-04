import React, { createContext,  useEffect, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [shop, setshop] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3600/cards")
      .then((res) => res.json())
      .then((data) => setshop(data));
  }, []);

  const search = () => {
    const filteredshop = shop.filter((shop) =>
      shop.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { filteredshop };
  };

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, search }}>
      {children}
    </SearchContext.Provider>
  );
};