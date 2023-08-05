import { Button, Grid, Typography } from "@mui/joy";
import Box from "@mui/material/Box";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import * as React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    ></Box>
  );
  return (
    <>
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
          <Button size="md">See your saved trails</Button>
        </Link>
        <div>
          {["left", "right", "top", "bottom"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>
      </Grid>
    </>
  );
};
export default Navbar;
