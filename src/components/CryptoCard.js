import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Tooltip,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CryptoCard = ({ crypto }) => {
  const priceChange = parseFloat(crypto.percent_change_24h);

  return (
    <Accordion sx={{ marginBottom: 1 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6" fontWeight="bold">
          {crypto.name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>Symbol: {crypto.symbol}</Typography>
        <Typography>Price USD: {crypto.price_usd}</Typography>
        <Typography>Price BTC: {crypto.price_btc}</Typography>

        {/* Синий Tooltip */}
        <Tooltip
          title={
            <Typography sx={{ color: 'white', fontSize: '14px' }}>
              The market capitalization of a cryptocurrency is calculated by
              multiplying the number of coins in circulation by the current price.
            </Typography>
          }
          arrow
          placement="top"
          componentsProps={{
            tooltip: {
              sx: {
                backgroundColor: '#2196F3', // Синий цвет фона
                color: 'white', // Белый текст
                fontSize: '14px', // Размер текста
                padding: '10px', // Отступы
              },
            },
            arrow: {
              sx: {
                color: '#2196F3', // Цвет стрелки совпадает с фоном
              },
            },
          }}
        >
          <Typography style={{ cursor: 'pointer', fontWeight: 'bold' }}>
            Market Cap USD: {crypto.market_cap_usd}
          </Typography>
        </Tooltip>

        <Typography
          sx={{
            color: priceChange > 0 ? 'green' : 'red',
            fontWeight: 'bold',
          }}
        >
          Percent Change 24H: {priceChange}%
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default CryptoCard;
