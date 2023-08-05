import { Button, Grid, Typography, Box } from "@mui/joy";
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
        sm={8}
        md={10}
        justifyContent="center"
        alignItems="center"
        sx={{ p: 3 }}
      >
        <Grid container>
          {savedTrail?.map((trail, index) => {
            return <TrailCard trail={trail} />;
          })}
        </Grid>
        <Grid container justifyContent="center" alignItems="center">
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
      </Grid>
    </>
  );
};
export default SavedTrailsList;
