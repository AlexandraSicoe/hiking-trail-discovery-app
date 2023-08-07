import { Box, Button, Grid, Typography } from "@mui/joy";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/bundle";
import trailsData from "../data/trails.json";
import coverImage from "../images/cover.jpeg";
import Navbar from "./Navbar";
const HomePage = () => {
  const { trails } = trailsData;
  const [savedTrail, setSavedTrail] = useState([]);

  useEffect(() => {
    let lsTrail = localStorage.getItem("trail");
    lsTrail = JSON.parse(lsTrail);
    console.log(lsTrail);
    setSavedTrail(lsTrail ? lsTrail : []);
  }, []);
  return (
    <>
      <Navbar savedTrail={savedTrail} />
      <Grid
        xs={12}
        container
        justifyContent="center"
        direction="column"
        alignItems="center"
        height="100%"
      >
        <Grid
          container
          justifyContent="center"
          direction="column"
          alignItems="center"
          width="100%"
          height="75vh"
          style={{
            margin: "auto",
            backgroundImage: `url(${coverImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <Typography
            level="h1"
            sx={{
              color: "#C7E8CA",
              paddingTop: "50px",
              textAlign: { xs: "center" },
            }}
          >
            Discover new
            <Typography sx={{ fontStyle: "oblique" }}> trails!</Typography>
          </Typography>
          <Typography
            level="h5"
            sx={{
              padding: "50px",
              color: "#C7E8CA",
              fontSize: { xs: "20px", sm: "25px" },
              maxWidth: "1000px",
              textAlign: { xs: "center" },
            }}
          >
            Embark on a journey of discovery as we unveil a curated collection
            of the most scenic and awe-inspiring mountain trails from around the
            world. From the rugged terrains of the Rocky Mountains to the serene
            beauty of the Swiss Alps, our diverse selection of trails guarantees
            an unforgettable experience for every wanderer.
          </Typography>
          <Box>
            <Link to="/trail-list">
              <Button size="lg" sx={{ margin: "20px" }}>
                View Trail Listings
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
      <swiper-container
        autoplay-delay="3000"
        // autoplay-disable-on-interaction="false"
        loop="true"
      >
        {trails?.map((trail, index) => {
          return (
            <swiper-slide>
              <Box
                display="flex"
                justifyContent="center"
                style={{
                  height: "100vh",
                  width: "100vw",
                  backgroundImage: `url(${trail.image})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></Box>
            </swiper-slide>
          );
        })}
      </swiper-container>
    </>
  );
};
export default HomePage;
