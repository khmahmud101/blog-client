import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTwitterSquare, faFacebookSquare, faLinkedin, faGithubSquare  } from '@fortawesome/free-brands-svg-icons';

import { Grid, Paper } from "@mui/material";
import React from "react";
import "./SidebarSocial.css";
const SidebarSocial = () => {
  return (
    <Paper  sx={{ p: 3,textAlign:"center" }} elevation={1}>
      <h3 className="sidebar-social-title">Over 50,000+ Readers</h3>

      <p className="sidebar-social-sub-title">
        Get fresh content from TechScan
      </p>
     <Grid className='social-media-icon' sx={{ p: 2}} container>
     <Grid className='facebook-icon' xs={3}><a href="#"><FontAwesomeIcon icon={faFacebookSquare} /></a></Grid>
      <Grid className='twitter-icon ' xs={3}><a href="#"><FontAwesomeIcon icon={faTwitterSquare}/></a></Grid>
      <Grid className='linkedin-icon' xs={3}><a href="#"><FontAwesomeIcon icon={faLinkedin}/></a></Grid>
      <Grid className='github-icon' xs={3}><a href="#"><FontAwesomeIcon icon={faGithubSquare}/></a></Grid>
     </Grid>
    </Paper>
  );
};

export default SidebarSocial;
