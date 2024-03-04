import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import './style.scss'

const Search = () => {
    const {  searchQuery, setSearchQuery, search  } = useContext(SearchContext);

    const { filteredshop } = search();
  
    return (
      <section id="search">
      <h2>Search Results for "{searchQuery}"</h2>
 
  
      {filteredshop.length === 0 ? (
        <p>No Cards found</p>
      ) : (
        <ul className="searchUl">
          {filteredshop.map((item) => (
            <li key={item._id}>
              <Link to={"/shop/" + item._id}>{`${item.name}`}</Link>
            </li>
          ))}
        </ul>
      )}
    </section>
    );
}

export default Search
