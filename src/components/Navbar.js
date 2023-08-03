import { Grid, Typography, Button } from "@mui/joy";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Grid
      xs={12}
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{ backgroundColor: "black", p: 3 }}
    >
      <Link to={"/"}>
        <Typography
          textAlign="center"
          textColor="#C7E8CA"
          sx={{
            fontSize: { xs: "25px" },
          }}
        >
          Peak Pursuit
        </Typography>
      </Link>

      <Link to={"/saved-trails-list"}>
        <Button size="lg">See your saved trails</Button>
      </Link>
    </Grid>
  );
};
export default Navbar;
