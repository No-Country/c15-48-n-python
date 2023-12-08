import React from "react";
import SearchIcon from "../assets/placeholder/search.svg";

const SearchBar = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-gray pl-4 h-10 rounded-full mt-4">
        <input
          type="text"
          placeholder="Buscar nick de maskota"
          className="w-full bg-gray text-sm"
        />
        <button className="flex items-center justify-center w-12 h-full rounded-full">
          <img src={SearchIcon} />
        </button>
      </div>
    </>
  );
};

export default SearchBar;