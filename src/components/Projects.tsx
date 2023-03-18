import React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import pic1Landing from "../images/pic1Landing.png";
import pic2Landing from "../images/pic2Landing.png";
import pic3Landing from "../images/pic3Landing.png";

const Projects = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F0F0F0",
      }}
    >
      <Stack
        spacing={2}
        sx={{
          borderBottomLeftRadius: "35% 5%",
          borderBottomRightRadius: "35% 5%",

          backgroundColor: "#fff",
          paddingBottom: "30px",
        }}
      >
        <Container maxWidth="lg">
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  padding: {
                    xs: "20px",
                    md: "40px",
                  },
                }}
              >
                <img src={pic1Landing} width="100%" />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4">Light, Fast and Powerful</Typography>
              <Typography variant="body2" mt={2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                asperiores inventore maiores sequi perspiciatis, culpa ut.
                Facere voluptate maiores vero ratione omnis voluptatem error
                blanditiis necessitatibus, quis nisi a obcaecati!
              </Typography>
              <Typography variant="body2" mt={1}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
                velit praesentium exercitationem neque qui tenetur!
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  padding: {
                    xs: "20px",
                    md: "40px",
                  },
                }}
              >
                <img src={pic2Landing} width="100%" />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4">Light, Fast and Powerful</Typography>
              <Typography variant="body2" mt={2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                asperiores inventore maiores sequi perspiciatis, culpa ut.
                Facere voluptate maiores vero ratione omnis voluptatem error
                blanditiis necessitatibus, quis nisi a obcaecati!
              </Typography>
              <Typography variant="body2" mt={1}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
                velit praesentium exercitationem neque qui tenetur!
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  padding: {
                    xs: "20px",
                    md: "40px",
                  },
                }}
              >
                <img src={pic3Landing} width="100%" />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4">Light, Fast and Powerful</Typography>
              <Typography variant="body2" mt={2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                asperiores inventore maiores sequi perspiciatis, culpa ut.
                Facere voluptate maiores vero ratione omnis voluptatem error
                blanditiis necessitatibus, quis nisi a obcaecati!
              </Typography>
              <Typography variant="body2" mt={1}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
                velit praesentium exercitationem neque qui tenetur!
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#091133",
                  marginRight: "10px",
                  textTransform: "capitalize",
                  marginTop: "20px",
                }}
              >
                Purchase Now
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </Box>
  );
};

export default Projects;
