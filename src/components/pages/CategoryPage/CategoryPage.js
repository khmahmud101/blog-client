import React from 'react';
import { Container, Grid, Paper, Box } from "@mui/material";
import Nevigation from "../../Shared/Nevigation";
import HomeSidebar from "../Home/HomeSidebar/HomeSidebar";
import Footer from "../../Shared/Footer";
import { useParams } from "react-router-dom";
import contents from "../../../postContents";
import './CategoryPage.css';
import CategorySingle from './CategorySingle';
const CategoryPage = () => {
    const params = useParams();
    
    const targetPost = contents.filter((content) => content.category === params.page);
    console.log(targetPost)
    return (
        <>
        <Nevigation></Nevigation>
        <Container>
          <Grid mt={3} container spacing={5}>
            <Grid container spacing={2} mt={3}  xs={8}>
              {
                targetPost.map(post => <CategorySingle post={post}></CategorySingle>)
              }
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

export default CategoryPage;