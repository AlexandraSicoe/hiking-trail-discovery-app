import { Grid, Typography } from "@mui/joy";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Grid
      xs={12}
      container
      justifyContent="center"
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
    </Grid>
  );
};
export default Navbar;
