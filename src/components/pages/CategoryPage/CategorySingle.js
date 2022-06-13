import { Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from "react-router-dom";
import React from 'react';
import './CategorySingle.css'

const CategorySingle = (props) => {
    const { id,title, img, description} = props.post;
    let limitedDescription = description.split(" ", 10)
   
    return (
        <Grid  item xs={6} md={6}>
            <Paper sx={{ pl: 4.5, pr:3, pt: 3,  }} elevation={1}>
                <Box>
                 <Link className="sub-contents-title" to={`/post/${id}`}>
                 <h3 >{title}</h3>
                 </Link>
                 <Link className="sub-contents-img" to={`/post/${id}`}> 
                  <img style={{ height: "100%", width:"100%"}} src={img} alt="" />
                  </Link>
                  <p className="blog-details-description">{limitedDescription.join(" ") + " ......"} <Link to={`/post/${id}`}>read more</Link></p>
                </Box>
              </Paper>
        </Grid>
    );
};

export default CategorySingle;