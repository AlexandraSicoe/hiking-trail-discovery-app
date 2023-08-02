import { Button, Grid, Typography } from "@mui/joy";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import TrailCard from "./TrailCard";
import trailsData from "../data/trails.json";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SavedTrailsList = () => {
  const { trails } = trailsData;
  const [savedTrail, setSavedTrail] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let lsTrail = localStorage.getItem("trail");
    lsTrail = JSON.parse(lsTrail);
    setSavedTrail(lsTrail ? lsTrail : []);
  }, []);

  return (
    <>
      <Navbar />
      <Grid
        xs={12}
        container
        justifyContent="center"
        direction="row"
        alignItems="center"
        height="100%"
      >
        <Typography
          level="h1"
          sx={{
            color: "#C7E8CA",
            paddingTop: "50px",
            textAlign: { xs: "center" },
          }}
        >
          Your saved trails:
        </Typography>
        {trails.map((trail, index) => {
          return <TrailCard trail={trail} />;
        })}
        <Link to="/trail-list">
          <Button size="lg" sx={{ margin: "50px" }}>
            View Trail Listings
          </Button>
        </Link>

        <Button
          size="lg"
          sx={{ margin: "50px" }}
          onClick={() => {
            localStorage.setItem("trail", "[]");
            navigate("/");
          }}
        >
          Save trails
        </Button>
      </Grid>
    </>
  );
};
export default SavedTrailsList;
