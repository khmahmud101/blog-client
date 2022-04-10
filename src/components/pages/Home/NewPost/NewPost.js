import React from "react";
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Divider, Grid, Paper } from "@mui/material";
import image1 from "../../../../image/image1.png";
import image2 from "../../../../image/image2.png";
import image3 from "../../../../image/image3.png";
import image4 from "../../../../image/image4.png";
import image5 from "../../../../image/image5.png";
import image6 from "../../../../image/image6.png";
import image7 from "../../../../image/image7.png";
import LatestPost from "../LatestPost/LatestPost";
const contents = [
  {
    title: "How to Add Custom Items to Specific WordPress Menus",
    img: image1,
  },
  {
    title: "6 Best Auto Dialer Software for Small Business in 2022",
    img: image2,
  },
  {
    title: "How to Bulk Schedule Posts in WordPress",
    img: image3,
  },
  {
    title: "How to Accept Apple Pay in WordPress",
    img: image4,
  },
  {
    title: "Welcome WooFunnels to the WPBeginner Growth Fund",
    img: image5,
  },
  {
    title: "How to Add Custom Items to Specific WordPress Menus",
    img: image6,
  },
  {
    title: "9 Best Internal Linking Plugins for WordPress ",
    img: image7,
  },
];
const contentsLen = contents.length
const restContentWithoutFirst = contents.slice(1,contentsLen)

const NewPost = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Paper elevation={1}>
      <Box p={3}>
        <CardHeader title={
            <Typography gutterBottom variant="h5" sx={{fontWeight:600}}>
           {contents[0].title}
         </Typography>

        } />

        <CardContent>
          <CardMedia
            component="img"
            height="194"
            image={image1}
            alt="Paella dish"
          />
          <Typography  variant="body4" sx={{ color:"#464646"}}>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <Divider sx={{ mt: 7}} variant="middle" />
        <Grid m={3}  container spacing={2}>
        {restContentWithoutFirst.map((post) => <LatestPost post={post}></LatestPost>)}
        </Grid>;
      </Box>
    </Paper>
  );
};

export default NewPost;
