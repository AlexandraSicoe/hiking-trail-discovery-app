import { Box, Button, Grid, Typography } from "@mui/joy";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemContent from "@mui/joy/ListItemContent";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "./Drawer.tsx";

const Navbar = ({ savedTrail }) => {
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

        {savedTrail?.length > 0 && (
          <Button
            onClick={() => {
              setDrawerOpen(true);
            }}
            size="md"
          >
            See your saved trails
          </Button>
        )}
        <Drawer
          title="Saved Trails"
          size="375px"
          position="right"
          open={drawerOpen}
          onClose={() => {
            setDrawerOpen(false);
          }}
        >
          <Card variant="outlined" sx={{ width: "100%", p: 0 }}>
            <List sx={{ py: "var(--ListDivider-gap)" }}>
              {savedTrail.map((trail, index) => (
                <React.Fragment key={trail.id}>
                  <ListItem sx={{ gap: 2 }}>
                    <AspectRatio sx={{ flexBasis: 120 }}>
                      <img
                        src={`${trail.image}?w=120&fit=crop&auto=format`}
                        alt={trail.name}
                      />
                    </AspectRatio>
                    <ListItemContent>
                      <Typography fontWeight="md">{trail.name}</Typography>
                      <Typography level="body-sm">
                        Difficulty: {trail.difficulty}
                      </Typography>
                    </ListItemContent>
                  </ListItem>
                  {index !== savedTrail.length - 1 && <ListDivider />}
                </React.Fragment>
              ))}
            </List>
          </Card>
          <Link to={"/saved-trails-list"}>
            <Button sx={{ marginY: "10px" }} size="lg">
              See more details
            </Button>
          </Link>
        </Drawer>
      </Grid>
    </>
  );
};
export default Navbar;
