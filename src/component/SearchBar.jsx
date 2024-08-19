import React from 'react';

const SearchBar = ({ city, setCity }) => {
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    setCity(city);
  };

  return (
    <div className="search">
      <input
        type="text"
        value={city}
        onChange={handleInputChange}
        placeholder="Enter city"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
