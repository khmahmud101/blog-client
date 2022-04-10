import { Grid, Item } from "@mui/material";
import React from "react";

const LatestPost = ({ post }) => {
  const { title,img} = post;
  return (
    <Grid mt={2} container spacing={2} xs={6}>
      <Grid mt={2} xs={3} md={3}>
        <img style={{ width: "100%"  }} src={img} alt="" />
      </Grid>

      <Grid   xs={9} md={9}>
        <h4 style={{ marginLeft: "20px"}} >{title}</h4>
      </Grid>
    </Grid>
  );
};

export default LatestPost;
