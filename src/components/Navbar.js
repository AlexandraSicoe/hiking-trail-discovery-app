import { Box, Button, Grid, Typography } from "@mui/joy";

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
        <Box>
          <Link to={"/"}>
            <Typography
              level="h2"
              textAlign="center"
              textColor="#C7E8CA"
              sx={{
                fontSize: { xs: "25px" },
              }}
            >
              Peak Pursuit
            </Typography>
          </Link>
        </Box>

        <Button
          onClick={() => {
            setDrawerOpen(true);
          }}
          size="md"
        >
          See your saved trails
          <div>
            <Drawer
              position="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <Link to={"/saved-trails-list"}>
                <Button size="md">See more details</Button>
              </Link>
            </Drawer>
          </div>
        </Button>
      </Grid>
    </>
  );
};
export default Navbar;
