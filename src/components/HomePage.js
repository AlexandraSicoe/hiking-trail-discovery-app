import { Button, Grid, Typography } from "@mui/joy";
import { Link } from "react-router-dom";
import coverImage from "../images/cover.jpeg";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
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
            Peak Pursuit
          </Typography>
          <Typography
            level="h5"
            sx={{
              padding: "50px",
              color: "#C7E8CA",
              fontSize: { xs: "20px", sm: "25px" },
              maxWidth: "1000px",
              marginBottom: "100px",
              textAlign: { xs: "center" },
            }}
          >
            Embark on a journey of discovery as we unveil a curated collection
            of the most scenic and awe-inspiring mountain trails from around the
            world. From the rugged terrains of the Rocky Mountains to the serene
            beauty of the Swiss Alps, our diverse selection of trails guarantees
            an unforgettable experience for every wanderer.
          </Typography>
        </Grid>
        <Link to="/trail-list">
          <Button sx={{ margin: "50px" }}>View Trail Listings</Button>
        </Link>
      </Grid>
    </>
  );
};
export default HomePage;
