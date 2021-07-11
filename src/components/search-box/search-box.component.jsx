import React from 'react';

import { SearchInput, SearchContainer } from './search-box.styles';

export const SearchBox = ({ placeholder, handleChange, debounceTimeout, ...otherProps }) => (
  <SearchContainer>
    <SearchInput
      type='search'
      placeholder={placeholder}
      onChange={handleChange}
      debounceTimeout={debounceTimeout}
    />
  </SearchContainer>
);
