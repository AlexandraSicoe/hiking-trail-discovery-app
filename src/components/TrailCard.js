import Card from "@mui/joy/Card";
import AspectRatio from "@mui/joy/AspectRatio";
import CardContent from "@mui/joy/CardContent";
import { Grid, Box, Button } from "@mui/joy";
import Typography from "@mui/joy/Typography";

const trailCard = ({ trail, setOpenModal, moreDetails, setMoreDetails }) => {
  return (
    <Grid
      container
      xs={12}
      sm={12}
      md={6}
      lg={4}
      xl={3}
      justifyContent="center"
      alignItems="center"
      sx={{ p: 2 }}
    >
      <Card
        variant="outlined"
        sx={{
          width: { xs: "100%", sm: 400 },
          height: { xs: 400, sm: 450 },
          backgroundColor: "black",
          m: 1,
        }}
      >
        <Box>
          <Typography
            level="h4"
            sx={{
              textAlign: "center",
              color: "#C7E8CA",
            }}
          >
            {trail.name}
          </Typography>
        </Box>
        <AspectRatio minHeight="120px" maxHeight="200px">
          <img src={trail.image} alt=""></img>
        </AspectRatio>
        <CardContent>
          <Typography
            level="body2"
            sx={{ color: "white", textAlign: "center" }}
          >
            {trail.description}
          </Typography>
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexDirection: "row",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box>
              <Typography level="body-sm" sx={{ color: "#C7E8CA" }}>
                {trail.location}
              </Typography>
            </Box>
            <Box>
              <Typography level="body-sm" sx={{ color: "#C7E8CA" }}>
                Difficulty: {trail.difficulty}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Button
              onClick={() => {
                setOpenModal(true);
                setMoreDetails(moreDetails);
              }}
            >
              About the trail.
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default trailCard;
