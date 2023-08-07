import { Button, Grid, Typography } from "@mui/joy";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import trailsData from "../data/trails.json";

import TrailCard from "./TrailCard";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";

const SavedTrailsList = () => {
  const navigate = useNavigate();
  const [savedTrail, setSavedTrail] = useState([]);
  const { trails } = trailsData;
  const [openModal, setOpenModal] = useState(false);
  const [moreDetails, setMoreDetails] = useState("");

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
            return (
              <TrailCard
                key={index}
                trail={trail}
                moreDetails={trail.details}
                setOpenModal={setOpenModal}
                setMoreDetails={setMoreDetails}
                savedTrail={savedTrail}
                setSavedTrail={setSavedTrail}
              />
            );
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
        <Modal open={openModal}>
          <ModalDialog
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "200px",
              height: "200px",
              backgroundColor: "#C7E8CA",
            }}
          >
            <ModalClose
              onClick={() => {
                setOpenModal(false);
              }}
            />
            <Typography level="h5" sx={{ textAlign: "center" }}>
              {moreDetails}
            </Typography>
          </ModalDialog>
        </Modal>
      </Grid>
    </>
  );
};
export default SavedTrailsList;
