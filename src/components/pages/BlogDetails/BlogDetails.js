import { Container, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Nevigation from "../../Shared/Nevigation";
import HomeSidebar from "../Home/HomeSidebar/HomeSidebar";
import Footer from "../../Shared/Footer";
const BlogDetails = () => {
  return (
    <>
      <Nevigation></Nevigation>
      <Container>
        <Grid mt={3} container spacing={5}>
          <Paper elevation={1}>
          <Grid p={3} item xs={8}>
            <h1>Post Title goes here</h1>
            <img src="" alt="" />
            <p>Content goes here</p>
          </Grid>
          </Paper>
          <Grid item xs={4}>
            <HomeSidebar></HomeSidebar>
          </Grid>
        </Grid>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default BlogDetails;
