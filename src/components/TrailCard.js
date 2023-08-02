import Card from "@mui/joy/Card";
import AspectRatio from "@mui/joy/AspectRatio";
import CardContent from "@mui/joy/CardContent";
import { Grid, Box } from "@mui/joy";
import Typography from "@mui/joy/Typography";

const trailCard = ({ trail }) => {
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
          height: { xs: 300, sm: 400 },
          marginRight: "15px",
          marginLeft: "15px",
          backgroundColor: "black",
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
        <CardContent></CardContent>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            height: "100px",
            flexDirection: "row",
          }}
        >
          <Box
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box style={{ maxWidth: "100px" }}>
              <Typography level="h6" sx={{ color: "white" }}>
                Location: {trail.location}
              </Typography>
            </Box>
            <Box style={{ maxWidth: "100px" }}>
              <Typography level="h6" sx={{ color: "white" }}>
                Difficulty: {trail.difficulty}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default trailCard;
