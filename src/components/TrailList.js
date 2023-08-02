import { Grid } from "@mui/joy";
import trailsData from "../data/trails.json";
import Navbar from "./Navbar";
import TrailCard from "./TrailCard";

const TrailList = () => {
  const { trails } = trailsData;
  return (
    <>
      <Navbar />
      <Grid
        xs={12}
        sm={8}
        md={10}
        container
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          container
          sx={{ flexGrow: 1, marginTop: "15px", marginBottom: "15px" }}
        >
          {trails.map((trail, index) => {
            return <TrailCard key={index} trail={trail} />;
          })}
        </Grid>
      </Grid>
    </>
  );
};
export default TrailList;
