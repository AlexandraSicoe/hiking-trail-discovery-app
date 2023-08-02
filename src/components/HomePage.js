import { Grid, Typography } from "@mui/joy";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Grid
        xs={12}
        sm={8}
        container
        justifyContent="center"
        direction="column"
        alignItems="center"
        height="100%"
        style={{
          paddingTop: "40px",
          margin: "auto",
        }}
      >
        <Typography level="h1" sx={{ color: "#4a6741", marginBottom: "50px" }}>
          Peak Pursuit
        </Typography>
        <Typography level="h4" sx={{ color: "#557A46", maxWidth: "800px" }}>
          Embark on a journey of discovery as we unveil a curated collection of
          the most scenic and awe-inspiring mountain trails from around the
          world. From the rugged terrains of the Rocky Mountains to the serene
          beauty of the Swiss Alps, our diverse selection of trails guarantees
          an unforgettable experience for every wanderer.
        </Typography>
      </Grid>
    </>
  );
};
export default HomePage;
