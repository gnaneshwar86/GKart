import React from 'react'
import { Typography,Box,Button,Stack } from '@mui/material'
import { TfiArrowRight } from "react-icons/tfi";
import eggs from '../assets/eggs.webp'
import milktoned from '../assets/milktoned.webp'
import milkcream from '../assets/milkcream.webp'
import curd from '../assets/curd.webp'
import ghee from '../assets/ghee.webp'
function Dairy() {
    const items = [
        {id:1, name:'Eggs - 10', add:eggs,price:65.00},
        {id:2, name:'Toned Milk - 500 ml', add:milktoned,price:30.00},
        {id:3, name:'Full Cream Milk - 500 ml', add:milkcream,price:32.00},
        {id:4, name:'Curd - 400g Cup', add:curd,price:50.00},
        {id:5, name:'Pure Cow Ghee - 500 ml', add:ghee,price:390.00},
    ]
  return (
    <div style={{padding: '10px', backgroundColor: 'white', borderRadius: '8px', marginTop:'5vh' }}>
        <Typography variant='h4' fontSize={20} sx={{padding:'10px',fontWeight:'bold'}}>Dairy</Typography>
        <Stack
      direction="row"  
      sx={{alignItems:'center'}}
      >
        
      {items.map(cat=>(
        <Box className="item" 
            key={cat.id} sx={{
                backgroundColor:'#FFFAFA',
                padding:'20px',
                display:'flex',
                flexDirection:'column',
                margin:'10px'}}>
            <img src={cat.add} alt={cat.name} style={{ height:"25vh",borderRadius:"10%"}} />
            <div style={{
                display:'flex',
                paddingTop:'20px',
                flexDirection:'column'}}>
                <Typography 
                    variant="body2" 
                    display="block" sx={{
                        paddingLeft:'10px'}}>
                {cat.name}
                </Typography>
                <Typography variant="body2"fontWeight="bold" sx={{paddingLeft:'10px'}}>
                    ₹{cat.price}
                </Typography>
                <Typography variant="caption" sx={{paddingLeft:'10px'}}>
                    Per Item
                </Typography>
            </div>
            <Button
                variant="outlined"
                color="primary"
                sx={{
                    marginTop: '20px',
                    alignSelf: 'center',
                    width: '100%',
                    textTransform: 'none',
                }}>
                Add
            </Button>
            
      </Box>
      ))}
        <TfiArrowRight />
    </Stack>
    </div>
  )
}

export default Dairy