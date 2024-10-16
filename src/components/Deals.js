import React from 'react'
import { Button,Stack, Box, Typography } from '@mui/material';
import { MdDiscount } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import bath from '../assets/bath.jpeg'
import fruits from '../assets/fruits.jpg'
import vegetables from '../assets/vegetables.jpg'
import detergent from '../assets/detergent.jpeg'
import meat from '../assets/meat.jpeg'
function Deals() {
    const items = [
        {id:1, name:'Fresh Fruits', dis:'20%', add:fruits},
        {id:2, name:'Fresh Vegetables', dis:'50%', add:vegetables},
        {id:3, name:'Bathing Essentials', dis:'40%', add:bath},
        {id:5, name:'Detergents', dis:'60%', add:detergent},
        {id:6, name:'Fresh Meat', dis:'30%', add:meat},
    ]
  return (
    <div style={{padding: '10px', backgroundColor: 'whitesmoke', borderRadius: '8px', marginTop:'5vh' }}>
        <Typography variant='h4' fontSize={15} sx={{padding:'10px',fontWeight:'bold'}}>Best Deals</Typography>
        <Stack
      direction="row"  
      sx={{alignItems:'center'}}
      >
        
      {items.map(cat=>(
        <Box className="ite" key={cat.id} sx={{backgroundColor:'white',padding:'20px',display:'flex',flexDirection:'column',margin:'10px'}}>
            <div style={{display:'flex',justifyContent:'flex-end',paddingBottom:'10px'}}>
                <Button variant="contained" color="success" sx={{width:'12vh',textTransform:'none'}}>
                    <Typography variant="caption" display="block" fontSize={9} sx={{paddingLeft:'10px',marginBottom:'1vh'}}>Upto&nbsp;</Typography>
                    {cat.dis}</Button>
            </div>
            <img src={cat.add} alt={cat.name}style={{ height:"25vh",borderRadius:"10%"}} />
            <div style={{display:'flex',paddingTop:'10px'}}>
                <MdDiscount size={20} />
                <Typography variant="body2" display="block" sx={{paddingLeft:'10px'}}>{cat.name}</Typography>
            </div>
      </Box>
      ))}
        <FaArrowRight style={{padding:'10px'}}/>
    </Stack>
    </div>
  )
}

export default Deals