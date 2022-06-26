import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import login from "../../../image/login.png";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Register = () => {
    return (
        <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} item sx={{ mt:8, textAlign:"center"}}>
            <Typography sx={{ mt: 10 }} variant="h2" component="h2">
              Register
            </Typography>
            <form>
              <TextField
                required
                sx={{ width: 1, m: 1 }}
                id="standard-basic"
                label="Full Name"
                name="name"
                variant="standard"
              />
              <TextField
                required
                sx={{ width: 1, m: 1 }}
                id="standard-basic"
                label="Email"
                name="email"
                variant="standard"
              />
  
              <TextField
                required
                sx={{ width: 1, m: 1 }}
                id="standard-basic"
                label="Password"
                name="password"
                variant="standard"
              />
              <TextField
                required
                sx={{ width: 1, m: 1 }}
                id="standard-basic"
                label=" Confirm Password"
                name="password-two"
                variant="standard"
              />
            
      
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormLabel sx={{mt:1,mr:2,ml:1}} id="demo-row-radio-buttons-group-label">Gender *</FormLabel>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        
      </RadioGroup>
  
              <Button sx={{width: "75%", mt:3, }} variant="contained">Register</Button>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <img style={{ width: "100%" }} src={login} />
          </Grid>
        </Grid>
      </Container>
    );
};

export default Register;