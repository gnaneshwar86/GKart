import React from 'react';
import { Stack, Box, Typography } from '@mui/material';
import fruits from '../assets/fruits.jpg'
import vegetables from '../assets/vegetables.jpg'
import dairyeggs from '../assets/dairyeggs.jpg'
import meat from '../assets/meat.jpg'
import bread from '../assets/bread.jpg'
import snacks from '../assets/snacks.jpg'
import beverages from '../assets/beverages.jpeg'
function Categories() {
  return (
    <Stack
      direction="row"  
      justifyContent="space-between"
      sx={{ padding: '20px', backgroundColor: 'whitesmoke', borderRadius: '8px' }}
    >
      
      <Box sx={{ textAlign: 'center' }}>
        <img src={fruits} alt="Fruits" style={{ borderRadius: '50%' ,height:"10vh"}} />
        <Typography variant="caption" display="block">Fruits</Typography>
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <img src={vegetables} alt="Vegetables" style={{ borderRadius: '50%',height:"10vh" }} />
        <Typography variant="caption" display="block">Vegetables</Typography>
      </Box>
      
      <Box sx={{ textAlign: 'center' }}>
        <img src={dairyeggs} alt="Dairy & Eggs" style={{ borderRadius: '50%',height:"10vh" }} />
        <Typography variant="caption" display="block">Dairy & Eggs</Typography>
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <img src={meat} alt="Meat & Seafood" style={{ borderRadius: '50%',height:"10vh" }} />
        <Typography variant="caption" display="block">Meat & Seafood</Typography>
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <img src={bread} alt="Bakery & Bread" style={{ borderRadius: '50%',height:"10vh" }} />
        <Typography variant="caption" display="block">Bakery & Bread</Typography>
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <img src={snacks} alt="Snacks" style={{ borderRadius: '50%',height:"10vh" }} />
        <Typography variant="caption" display="block">Snacks</Typography>
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <img src={beverages} alt="Beverages" style={{ borderRadius: '50%',height:"10vh" }} />
        <Typography variant="caption" display="block">Beverages</Typography>
      </Box>

    </Stack>
  );
}

export default Categories;
