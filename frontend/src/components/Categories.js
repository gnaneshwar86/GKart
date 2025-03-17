// Categories.js
import React, { useState } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import fruits from '../assets/fruits.jpg';
import vegetables from '../assets/vegetables.jpg';
import dairyeggs from '../assets/dairyeggs.jpg';
import meat from '../assets/meat.jpeg';
import bread from '../assets/bread.jpg';
import snacks from '../assets/snacks.jpg';
import beverages from '../assets/beverages.jpeg';
import sweets from '../assets/sweets.jpg';
import provision from '../assets/provision.jpeg';

function Categories({ onCategoryClick }) {
  const [catego, setCatego] = useState([
    { id: 1, name: 'Fruits', add: fruits },
    { id: 2, name: 'Vegetables', add: vegetables },
    { id: 3, name: 'Dairy & Eggs', add: dairyeggs },
    { id: 4, name: 'Meat & Seafood', add: meat },
    { id: 5, name: 'Bakery & Bread', add: bread },
    { id: 6, name: 'Snacks', add: snacks },
    { id: 7, name: 'Sweets', add: sweets },
    { id: 8, name: 'Beverages', add: beverages },
    { id: 9, name: 'Provisions', add: provision },
  ]);

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ padding: '20px', backgroundColor: 'whitesmoke', borderRadius: '8px' }}
    >
      {catego.map(cat => (
        <Box
          className="categ"
          key={cat.id}
          sx={{ textAlign: 'center', cursor: 'pointer' }}
          onClick={() => onCategoryClick(cat.name)}
        >
          <img src={cat.add} alt={cat.name} style={{ borderRadius: '50%', height: '10vh' }} />
          <Typography variant="caption" display="block" sx={{
            '&:hover': {
              fontWeight: 'bold',
            }
          }}>{cat.name}</Typography>
        </Box>
      ))}
    </Stack>
  );
}

export default Categories;
