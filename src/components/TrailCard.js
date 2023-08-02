import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardCover from "@mui/joy/CardCover";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";

const trailCard = () => {
  return (
    <Grid
      container
      xs={12}
      sm={12}
      md={6}
      lg={4}
      xl={3}
      justifyContent="center"
      sx={{ p: 1 }}
    >
      <Card
        component="li"
        sx={{
          width: { xs: "100%", sm: 300 },
          height: { xs: 200, sm: 400 },
          marginRight: "15px",
          marginLeft: "15px",
        }}
      >
        <CardCover>
          <img src={trail.image}></img>
        </CardCover>
        <CardCover
          sx={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
          }}
        />
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            height: "100px",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography level="h6" sx={{ color: "white" }}>
                {flower.name}
              </Typography>
              <Typography level="h6" sx={{ color: "white" }}>
                {flower.price} RON
              </Typography>
            </Box>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default trailCard;
