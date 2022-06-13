import { Container, Grid, Paper, Box } from "@mui/material";

import React from "react";
import Nevigation from "../../Shared/Nevigation";
import HomeSidebar from "../Home/HomeSidebar/HomeSidebar";
import Footer from "../../Shared/Footer";
import { useParams } from "react-router-dom";
import contents from "../../../postContents";
import "./BlogDetails.css";
const BlogDetails = () => {
  const params = useParams();
  const targetPost = contents.find((content) => content.id == params.id);
  
  return (
    <>
      <Nevigation></Nevigation>
      <Container>
        <Grid mt={3} container spacing={5}>
          <Grid item xs={8}>
            <Paper sx={{ pl: 4.5, pr:3, pt: 3,  }} elevation={1}>
              <Box>
                <h2 className="blog-details-title">{targetPost.title}</h2>

                <img src={targetPost.img} alt="" />
                <p className="blog-details-description">{targetPost.description}</p>
              </Box>
            </Paper>
          </Grid>

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
