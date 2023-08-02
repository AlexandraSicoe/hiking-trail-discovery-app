import { Button, Grid, Typography } from "@mui/joy";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import TrailCard from "./TrailCard";
import trailsData from "../data/trails.json";

const SavedTrailsList = () => {
  const { trails } = trailsData;

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
          Peak Pursuit
        </Typography>
        {trails.map((trail, index) => {
          return <TrailCard key={index} trail={trail} />;
        })}
        <Link to="/trail-list">
          <Button size="lg" sx={{ margin: "50px" }}>
            View Trail Listings
          </Button>
        </Link>
      </Grid>
    </>
  );
};
export default SavedTrailsList;
