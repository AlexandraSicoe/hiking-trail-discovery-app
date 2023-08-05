import { Button, Grid, Typography } from "@mui/joy";
import Box from "@mui/material/Box";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "./Drawer.tsx";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

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

        <Button
          onClick={() => {
            setDrawerOpen(true);
          }}
          size="md"
        >
          Open Drawer
        </Button>
        <Link to={"/saved-trails-list"}>
          <Button size="md">See your saved trails</Button>
        </Link>
        <div>
          <Drawer
            position="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          ></Drawer>
        </div>
      </Grid>
    </>
  );
};
export default Navbar;
