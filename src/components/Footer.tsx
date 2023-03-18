import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Stack, Container, Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#E7ECFF",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          height={{
            xs: 160,
            md: 70,
          }}
          padding={{
            xs: "20px",
            md: 0,
          }}
        >
          <Grid item xs={12} md={4}>
            <Typography variant="body2">©2023 Yourcompany</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              sx={{
                fontSize: 25,
                fontWeight: 700,
                color: "#2245E3",
              }}
            >
              Landing
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "#091133",
                textTransform: "capitalize",
              }}
            >
              Purchase Now
            </Button>
          </Grid>
        </Grid>
        <Divider />
        <Grid container>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
            height={50}
          >
            <Typography variant="body1">Home</Typography>
            <Typography variant="body1">About</Typography>
            <Typography variant="body1">Contact</Typography>
          </Grid>
          <Grid item xs={12} sm={4} />

          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
            height={50}
          >
            <FacebookOutlinedIcon />
            <LinkedInIcon />
            <TwitterIcon />
            <YouTubeIcon />
            <InstagramIcon />
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Footer;
