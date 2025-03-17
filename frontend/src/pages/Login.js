import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Box,TextField,Button, ButtonGroup} from '@mui/material'
import '../App.css'
import logo from '../assets/gkartlogo.png'
import { ThemeContext } from '../components/ThemeProvider'
function Login() {
  let [email,setEmail] = useState('');
  let [password,setPassword] = useState('');
  let [errors,setErrors] =useState({email:'',password:''});
  let [userData,setUserData] = useState([]);
  const {setLog} = useContext(ThemeContext);
  const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const navigate = useNavigate();
  const goToHomePage = () =>{
    navigate("/"); 
  }
  const goToSignUpPage = () =>{
    navigate("/signup"); 
  }

  const handleSubmit = (e) =>{
    let valid = true;
    const newErrors = {email:'',password:''};

    if(!regex.test(email)){
      newErrors.email="Invalid email address";
      valid = false;
    }

    if(password.length < 8){
      newErrors.password="Password must be at least 8 characters long";
      valid = false;
    }

    if(valid){
      setUserData([...userData,{email,password}]);
      setEmail='';
      setPassword='';
      newErrors.email='';
      newErrors.password='';
      setErrors(newErrors);
      setLog(true);
      goToHomePage();
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
        <h1 className='login'>Login</h1>
        <TextField required className='email' label="Email" type='email' variant="outlined" margin='normal' 
        sx={{marginBottom:'40px',width:'50vh'}}
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        error={!!errors.email}
        helperText={errors.email}
        />

        <TextField required className='password' label="Password" type='password' variant="outlined" margin='normal' 
        sx={{marginBottom:'20px',width:'50vh'}}
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        error={!!errors.password}
        helperText={errors.password}
        />
        <ButtonGroup className='up' variant="text" aria-label="Basic button group">
        <Button className='forgot' variant="text" color='primary' margin='normal' size='small' >Forgot Password?</Button>
        <Button className='signup' onClick={goToSignUpPage} variant="text" color='primary' margin='normal' size='small' sx={{fontWeight:'bold'}}>Sign Up</Button>
        </ButtonGroup>

        <Button className='submit' onClick={handleSubmit} variant="contained" margin='normal' >Sign In</Button>

        {/* <Box mt={4}>
        <h6>Stored User Data:</h6>
        <pre>{JSON.stringify(userData, null, 2)}</pre>
        </Box> */}

        </Box>

    </div>
  )
}

export default Login;