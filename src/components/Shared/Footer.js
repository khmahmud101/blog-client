import { Box, Container, Grid } from "@mui/material";
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#2D2520", color: "#938277" }}>
      <Container>
        <h1 className="footer-title">Footer Title Goes Here</h1>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <h3 className="footer-about-title">ABOUT TECHSCAN</h3>
            <p className="footer-about-details">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
              aliquam consectetur esse dolorem omnis quidem vel minus est! Unde
              non dolorum rerum aut dolores dolore doloribus deserunt excepturi,
              ea a?
            </p>
          </Grid>
          <Grid item xs={3}>
            <Box className="footer-siteLink">
              <h3>SITE LINKS</h3>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Free Blog Setup</a>
                </li>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box className="footer-category">
              <h3>CATEGORY</h3>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Free Blog Setup</a>
                </li>
              </ul>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
