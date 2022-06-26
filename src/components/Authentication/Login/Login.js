import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import login from "../../../image/login.png";
const Login = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} item sx={{ mt:8, textAlign:"center"}}>
          <Typography sx={{ mt: 10 }} variant="h2" component="h2">
            LOGIN
          </Typography>
          <form>
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
            <Button sx={{width: "75%", mt:3, }} variant="contained">Login</Button>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
