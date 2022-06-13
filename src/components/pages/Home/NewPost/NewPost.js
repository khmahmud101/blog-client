import React from "react";
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Divider, Grid, Paper } from "@mui/material";

import LatestPost from "../LatestPost/LatestPost";
import './NewPost.css'
import { Link} from "react-router-dom";
import contents from  '../../../../postContents'
const contentsLen = contents.length;
const restContentWithoutFirst = contents.slice(1, contentsLen);

const NewPost = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  return (
    <Paper elevation={1}>
      <Box p={3}>
        <CardHeader
          title={
            <Typography gutterBottom variant="h5" sx={{ fontWeight: 600 }}>
             <span className="main-content-title">
               <Link to={`post/${contents[0].id}`}>
                  {contents[0].title}
               
               </Link>
             </span>
            </Typography>
          }
        />
        <CardContent>
          <CardMedia
            component="img"
            height="194"
            image={contents[0].img}
            alt="Paella dish"
          />
          <Typography variant="body4" sx={{ color: "#464646" }}>
            {contents[0].deccription}
          </Typography>
        </CardContent>
        <Divider sx={{ mt: 7 }} variant="middle" />
        <Grid m={3} container spacing={2}>
          {restContentWithoutFirst.map((post) => (
            <LatestPost post={post}></LatestPost>
          ))}
        </Grid>
        ;
      </Box>
    </Paper>
  );
};

export default NewPost;
