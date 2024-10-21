// import React from 'react'
// import { Typography,Box,Button,Stack } from '@mui/material'
// import { TfiArrowRight } from "react-icons/tfi";
// import carrot from '/assets/carrot.webp'
// import brinjal from '/assets/brinjal.webp'
// import onion from '/assets/onion.webp'
// import tomato from '/assets/tomato.webp'
// import cauliflower from '/assets/cauliflower.webp'
// function Fruits() {
//     const items = [
//         {id:1, name:'Carrot', add:carrot,price:80.00},
//         {id:2, name:'Guava', add:brinjal,price:60.00},
//         {id:3, name:'Onion', add:onion,price:55.00},
//         {id:4, name:'Tomato', add:tomato,price:30.00},
//         {id:5, name:'Cauliflower', add:cauliflower,price:40.00},
//     ]
//   return (
//     <div style={{padding: '10px', backgroundColor: 'white', borderRadius: '8px', marginTop:'5vh' }}>
//         <Typography variant='h4' fontSize={20} sx={{padding:'10px',fontWeight:'bold'}}>Vegetables</Typography>
//         <Stack
//       direction="row"  
//       sx={{alignItems:'center'}}
//       >
        
//       {items.map(cat=>(
//         <Box className="item" 
//             key={cat.id} sx={{
//                 backgroundColor:'#FFFAFA',
//                 padding:'20px',
//                 display:'flex',
//                 flexDirection:'column',
//                 margin:'10px'}}>
//             <img src={cat.add} alt={cat.name} style={{ height:"25vh",borderRadius:"10%"}} />
//             <div style={{
//                 display:'flex',
//                 paddingTop:'20px',
//                 flexDirection:'column'}}>
//                 <Typography 
//                     variant="body2" 
//                     display="block" sx={{
//                         paddingLeft:'10px'}}>
//                 {cat.name}
//                 </Typography>
//                 <Typography variant="body2"fontWeight="bold" sx={{paddingLeft:'10px'}}>
//                     ₹{cat.price}
//                 </Typography>
//                 <Typography variant="caption" sx={{paddingLeft:'10px'}}>
//                     per Kg
//                 </Typography>
//             </div>
//             <Button
//                 variant="outlined"
//                 color="primary"
//                 sx={{
//                     marginTop: '20px',
//                     alignSelf: 'center',
//                     width: '100%',
//                     textTransform: 'none',
//                 }}>
//                 Add
//             </Button>
            
//       </Box>
//       ))}
//         <TfiArrowRight />
//     </Stack>
//     </div>
//   )
// }

// export default Fruits