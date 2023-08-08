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
              background: "linear-gradient(#C7E8CA,#91d297)",
              width: "100%",
              height: "100%",
              border: "5px solid #013220",
            }}
          >
            <ModalClose
              onClick={() => {
                setOpenModal(false);
              }}
            />
            <Typography
              level="h2"
              textColor="#013220"
              sx={{
                textAlign: "center",
                marginBottom: "5px",
              }}
            >
              {trailForModal?.name}
            </Typography>
            <Typography
              textColor="#013220"
              level="h6"
              sx={{ textAlign: "center", marginBottom: "20px" }}
            >
              {trailForModal?.details}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                level="h4"
                textColor="#013220"
                sx={{ textAlign: "start", marginBottom: "20px" }}
              >
                Did you know?
              </Typography>
              <Typography
                textColor="#013220"
                level="h6"
                sx={{
                  marginBottom: "50px",
                  textAlign: "center",
                  maxWidth: "1000px",
                }}
              >
                {trailForModal?.longDescription}
              </Typography>
            </Box>
            <swiper-container
              effect="coverflow"
              grab-cursor="true"
              centered-slides="true"
              autoplay-delay="3000"
              slides-per-view="auto"
              coverflow-effect-rotate="50"
              coverflow-effect-stretch="0"
              coverflow-effect-depth="100"
              coverflow-effect-modifier="1"
              coverflow-effect-slide-shadows="true"
              style={{
                width: "100%",
              }}
            >
              {trailForModal?.image?.map((image, index) => {
                return (
                  <swiper-slide
                    style={{
                      height: "400px",
                      width: "400px",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                    key={index}
                  >
                    <Box
                      display="flex"
                      justifyContent="center"
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    ></Box>
                  </swiper-slide>
                );
              })}
            </swiper-container>
          </ModalDialog>
        </Modal>
      </Grid>
    </>
  );
};
export default SavedTrailsList;
