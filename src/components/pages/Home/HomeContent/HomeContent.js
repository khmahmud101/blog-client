import React from "react";
import HomeLeftContent from "../HomeLeftContent/HomeLeftContent";
import HomeSidebar from "../HomeSidebar/HomeSidebar";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
const HomeContent = () => {
  return (
    <Container >
      
     
      <Grid mt={3} container  spacing={5}>
        <Grid item xs={8}><HomeLeftContent></HomeLeftContent></Grid>
        <Grid item xs={4}> <HomeSidebar></HomeSidebar></Grid>
      </Grid>
    </Container>
  );
};

export default HomeContent;
