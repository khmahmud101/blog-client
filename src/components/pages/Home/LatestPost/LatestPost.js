import { Grid, Item } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import './LatestPost.css'
const LatestPost = ({ post }) => {
  const { title,img, id } = post;
  return (
    <Grid mt={2} container spacing={2} xs={6}>
      <Grid mt={2} xs={3} md={3}>
      <Link className="sub-contents-img" to={`/post/${id}`}> 
        <img src={img} alt="Img goes here" />
        </Link>
      </Grid>

      <Grid   xs={9} md={9}>
       <Link className="sub-contents-title" to={`/post/${id}`}> 
          <h4>{title}</h4>
       </Link>
      </Grid>
    </Grid>
  );
};

export default LatestPost;
