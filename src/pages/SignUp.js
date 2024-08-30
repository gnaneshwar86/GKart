import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Box,TextField,Button} from '@mui/material'
import '../App.css'
import logo from '../assets/gkartlogo.png'
function SignUp() {
  let [email,setEmail] = useState('');
  let [password,setPassword] = useState('');
  let [cpassword,setCPassword] = useState('');
  let [phone,setPhone] = useState('');
  let [errors,setErrors] =useState({email:'',password:'',cpassword:'',phone:''});
  let [userData,setUserData] = useState([]);
  const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const navigate = useNavigate();
  const goToLoginPage = () =>{
    navigate("/"); 
  }

  const handleSubmit = (e) =>{
    let valid = true;
    const newErrors = {email:'',password:'',cpassword:'',phone:''};

    if(!regex.test(email)){
      newErrors.email="Invalid email address";
      valid = false;
    }

    if(password.length < 8){
      newErrors.password="Password must be at least 8 characters long";
      valid = false;
    }

    if(cpassword!==password){
      newErrors.cpassword="Passwords do not match";
      valid = false;
    }

    if(phone.length!==10){
      newErrors.phone="Phone number not valid";
      valid = false;
    }

    if(valid){
      setUserData([...userData,{email,password,cpassword,phone}]);
      setEmail='';
      setPassword='';
      setCPassword='';
      setPhone='';
      newErrors.email='';
      newErrors.password='';
      newErrors.cpassword='';
      newErrors.phone='';
      setErrors(newErrors);
      alert("User created successfully");
      goToLoginPage();
    }
    else{
      setErrors(newErrors);
    }
  }

  return (
    <div className="bdy">
      <img src={logo} alt="GKart" className="logo" width={600}/>
      <Box className="box"
        sx={{
          width: '70vh',
          height: '80vh',
          borderRadius: 1,
          bgcolor: 'white',
          mr:'15vh',
        }}>
        <h1 className='signup'>Sign Up</h1>
        <TextField required className='email' label="Email" type='email' variant="outlined" margin='normal' 
        sx={{marginBottom:'0px',width:'50vh'}}
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        error={!!errors.email}
        helperText={errors.email}
        />

        <TextField required className='password' label="Password" type='password' variant="outlined" margin='normal' 
        sx={{marginBottom:'0px',width:'50vh'}}
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        error={!!errors.password}
        helperText={errors.password}
        />
        
        <TextField required className='cpassword' label="Confirm Password" type='password' variant="outlined" margin='normal' 
        sx={{marginBottom:'0px',width:'50vh'}}
        value={cpassword}
        onChange={(e)=>{setCPassword(e.target.value)}}
        error={!!errors.cpassword}
        helperText={errors.cpassword}
        />
        
        <TextField required className='phone' label="Phone (+91)" type='number' variant="outlined" margin='normal' 
        sx={{marginBottom:'20px',width:'50vh'}}
        value={phone}
        onChange={(e)=>{setPhone(e.target.value)}}
        error={!!errors.phone}
        helperText={errors.phone}
        />

        <Button className='submit' onClick={handleSubmit} variant="contained" margin='normal' >Sign Up</Button>

        {/* <Box mt={4}>
        <h6>Stored User Data:</h6>
        <pre>{JSON.stringify(userData, null, 2)}</pre>
        </Box> */}

        </Box>
    </div>
  )
}

export default SignUp;