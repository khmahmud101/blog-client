import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React,{useState} from 'react';
import login from "../../../image/login.png";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
const Register = () => {
  const [registerData, setRegisterData] = useState({})
  const {user, registerUser, isLoading,authError} = useAuth();
  const handleOnChange = (e) =>{
    const filed = e.target.name;
    const value = e.target.value;
   const newRegisterData = {...registerData}
   newRegisterData[filed] = value;
   setRegisterData(newRegisterData)
  }
  const handleRegisterSubmit = (e) =>{
    if (registerData.password !== registerData.passwordtwo){
      alert("Password Not match")
      return
    }
    registerUser(registerData.email, registerData.password);
    e.preventDefault()
  }
    return (
        <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} item sx={{ mt:8, textAlign:"center"}}>
            <Typography sx={{ mt: 10 }} variant="h2" component="h2">
              Register
            </Typography>
         { !isLoading && <form onSubmit={handleRegisterSubmit}>
            <TextField
              required
              sx={{ width: 1, m: 1 }}
              id="standard-basic"
              label="Full Name"
              name="name"
              variant="standard"
              onBlur={handleOnChange}
            />
            <TextField
              required
              sx={{ width: 1, m: 1 }}
              id="standard-basic"
              label="Email"
              name="email"
              variant="standard"
              onBlur={handleOnChange}
            />

            <TextField
              required
              sx={{ width: 1, m: 1 }}
              id="standard-basic"
              type="password"
              label="Password"
              name="password"
              variant="standard"
              onBlur={handleOnChange}
            />
            <TextField
              required
              type="password"
              sx={{ width: 1, m: 1 }}
              id="standard-basic"
              label=" Confirm Password"
              name="passwordtwo"
              variant="standard"
              onBlur={handleOnChange}
            />
          
    
    {/* <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
    >
      <FormLabel onBlur={handleOnChange} sx={{mt:1,mr:2,ml:1}} id="demo-row-radio-buttons-group-label">Gender *</FormLabel>
      <FormControlLabel onBlur={handleOnChange} value="female" control={<Radio />} label="Female" />
      <FormControlLabel onBlur={handleOnChange} value="male" control={<Radio />} label="Male" />
      <FormControlLabel onBlur={handleOnChange} value="other" control={<Radio />} label="Other" />
      
    </RadioGroup> */}

            <Button type="submit" sx={{width: "75%", mt:3, }} variant="contained">Register</Button>
          </form>}
          {isLoading && <h4>Loading ...</h4>
          }
          {user.email && <Alert severity="success">User created successfully</Alert>}
          {authError && <Alert severity="error">{authError}</Alert>}
          <h4>Already registered? <Link to="/login">Login</Link></h4>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <img style={{ width: "100%" }} src={login} />
          </Grid>
        </Grid>
      </Container>
    );
};

export default Register;