import { Alert, Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import login from "../../../image/login.png";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
const Login = () => {
  const [loginData, setLoginData] = useState({})
  const {user, loginUser, isLoading,authError} = useAuth();
  const handleOnChange = (e) =>{
    const filed = e.target.name;
    const value = e.target.value;
   const newLoginData = {...loginData}
   newLoginData[filed] = value;
   setLoginData(newLoginData)
  }
  const handleLoginSubmit = (e) =>{
    
    loginUser(loginData.email, loginData.password);
    e.preventDefault()
  }
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} item sx={{ mt:8, textAlign:"center"}}>
          <Typography sx={{ mt: 10 }} variant="h2" component="h2">
            LOGIN
          </Typography>
          <form onSubmit={handleLoginSubmit}>
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
            <Button type="submit" sx={{width: "75%", mt:3, }} variant="contained">Login</Button>
          </form>
          {isLoading && <h4>Loading ...</h4>
          }
          {user.email && <Alert severity="success">User Login successfully</Alert>}
          {authError && <Alert severity="error">{authError}</Alert>}
          <h4>Don't registered? <Link to="/register">Register</Link></h4>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
