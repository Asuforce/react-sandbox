import * as PropTypes from "prop-types";
import * as React from "react";

const SearchButton = ({ onClick }: { onClick: any }) => (
  <button onClick={onClick}>Search</button>
);

SearchButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default SearchButton;
