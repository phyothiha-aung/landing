import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import introLanding from "../images/introLanding.png";

const Hero = () => {
  return (
    <Grid
      container
      sx={{
        height: {
          xs: "auto",
          md: "100vh",
        },
        paddingTop: {
          xs: "30px",
          sm: "45px",
          md: "90px",
        },
        marginTop: {
          md: "-50px",
        },
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            padding: "20px 10px",
            border: 0,
          }}
          elevation={0}
        >
          <CardContent>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontSize: 50,
                fontWeight: 500,
                color: "#091133",
              }}
            >
              Introduce Your Product Quickly & Effectively
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                color: "#505F98",
                fontSize: 18,
                fontWeight: 400,
              }}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#091133",
                marginRight: "10px",
                textTransform: "capitalize",
              }}
            >
              Purchase UI Kit
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "#091133",
                textTransform: "capitalize",
                borderColor: "#091133",
              }}
            >
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          component="img"
          src={introLanding}
          alt="Your Image"
          sx={{ width: "100%", height: "auto", paddingLeft: "20px" }}
        />
      </Grid>
    </Grid>
  );
};

export default Hero;
