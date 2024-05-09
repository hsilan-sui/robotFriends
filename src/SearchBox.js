import React from "react";

const SearchBox = ({ searchChange }) => {
  // const { searchChange } = props;
  return (
    <div className="pa2">
      <input
        type="search"
        placeholder="search robots"
        className="pa3 ba b--light-pink bg-lightest-blue"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
