import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ handleSearch, search }) => {
  return (
    <TextField
      label="Search"
      variant="outlined"
      fullWidth
      value={search}
      onChange={handleSearch}
      sx={{ marginBottom: 2 }}
    />
  );
};

export default SearchBar;
