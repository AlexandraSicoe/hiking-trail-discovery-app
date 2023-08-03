import { Button, Grid, Typography } from "@mui/joy";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import TrailCard from "./TrailCard";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SavedTrailsList = () => {
  const navigate = useNavigate();
  const [savedTrail, setSavedTrail] = useState([]);

  useEffect(() => {
    let lsTrail = localStorage.getItem("trail");
    lsTrail = JSON.parse(lsTrail);
    console.log(lsTrail);
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
        {savedTrail?.map((trail, index) => {
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
