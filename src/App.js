import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button, Typography } from '@mui/material';
import SearchBar from './components/SearchBar';
import CryptoList from './components/CryptoList';

const App = () => {
  const [cryptos, setCryptos] = useState([]);
  const [filteredCryptos, setFilteredCryptos] = useState([]);
  const [search, setSearch] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.coinlore.net/api/tickers/');
      setCryptos(response.data.data);
      setFilteredCryptos(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);
    setFilteredCryptos(
      cryptos.filter(
        (crypto) =>
          crypto.name.toLowerCase().includes(query) ||
          crypto.symbol.toLowerCase().includes(query)
      )
    );
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ marginTop: 2, marginBottom: 2 }}>
        Cryptocurrency Prices
      </Typography>
      <Button variant="contained" onClick={fetchData} sx={{ marginBottom: 2 }}>
        Update
      </Button>
      <SearchBar handleSearch={handleSearch} search={search} />
      <CryptoList cryptos={filteredCryptos} />
    </Container>
  );
};

export default App;
