import { Grid, Typography } from "@mui/joy";
import trailsData from "../data/trails.json";
import Navbar from "./Navbar";
import TrailCard from "./TrailCard";
import React, { useState } from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";

const TrailList = () => {
  const { trails } = trailsData;
  const [openModal, setOpenModal] = useState(false);
  const [moreDetails, setMoreDetails] = useState("");

  return (
    <>
      <Navbar />
      <Grid xs={12} sm={8} md={10} justifyContent="center" alignItems="center">
        <Grid
          container
          sx={{ flexGrow: 1, marginTop: "15px", marginBottom: "15px" }}
        >
          {trails.map((trail, index) => {
            return (
              <TrailCard
                key={index}
                trail={trail}
                moreDetails={trail.details}
                setOpenModal={setOpenModal}
                setMoreDetails={setMoreDetails}
              />
            );
          })}
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
export default TrailList;
