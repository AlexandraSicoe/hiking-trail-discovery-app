import { Button, Grid, Typography, Box } from "@mui/joy";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

import TrailCard from "./TrailCard";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";

const SavedTrailsList = () => {
  const navigate = useNavigate();
  const [savedTrail, setSavedTrail] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [trailForModal, setTrailForModal] = useState(null);

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
                setOpenModal={setOpenModal}
                savedTrail={savedTrail}
                setSavedTrail={setSavedTrail}
                setTrailForModal={setTrailForModal}
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
              backgroundColor: "#C7E8CA",
            }}
          >
            <ModalClose
              onClick={() => {
                setOpenModal(false);
              }}
            />
            <Typography level="h5" sx={{ textAlign: "center" }}>
              {trailForModal?.details}
            </Typography>
            <Typography level="body1">
              {trailForModal?.longDescription}
            </Typography>
            {trailForModal?.image?.map((image, index) => {
              return (
                <swiper-slide>
                  <Box
                    display="flex"
                    justifyContent="center"
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  ></Box>
                </swiper-slide>
              );
            })}
          </ModalDialog>
        </Modal>
      </Grid>
    </>
  );
};
export default SavedTrailsList;
