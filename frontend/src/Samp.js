import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

function Samp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [userData, setUserData] = useState([]);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    let valid = true;
    const newErrors = { email: '', password: '' };

    // Validate email
    if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    // Validate password
    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    if (valid) {
      // Add valid user data to the array
      setUserData([...userData, { email, password }]);
      // Clear the form
      setEmail('');
      setPassword('');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 400, mx: 'auto', mt: 5 }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!errors.password}
          helperText={errors.password}
        />
        <Button type="submit" variant="contained" color="primary">Submit</Button>
      </form>
      <Box mt={4}>
        <Typography variant="h6">Stored User Data:</Typography>
        <pre>{JSON.stringify(userData, null, 2)}</pre>
      </Box>
    </Box>
  );
}

export default Samp;
