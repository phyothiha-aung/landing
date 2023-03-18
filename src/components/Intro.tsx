import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import girlLanding from "../images/girlLanding.png";
import { Stack, Typography } from "@mui/material";
import DvrIcon from "@mui/icons-material/Dvr";

const Intro = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" py={5}>
      <Grid item xs={12} md={6}>
        <Box>
          <Typography variant="h3">Light, Fast and Powerful</Typography>
          <Typography variant="body2" mt={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            mollitia beatae ipsa rerum autem assumenda ex error. Ex, qui non?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ducimus
            provident non eius repudiandae soluta vel obcaecati minima harum
          </Typography>
          <Typography variant="body2" mt={1}>
            Iste, repellat asperiores labore commodi accusantium eum earum
            consequuntur pariatur possimus.
          </Typography>
          <Stack direction={"row"} mt={2} spacing={2}>
            <Box>
              <DvrIcon fontSize="large" />
              <Typography variant="h5">Title Goes Here</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum,
                aliquid facere modi quo provident adipisci?
              </Typography>
            </Box>
            <Box>
              <DvrIcon fontSize="large" />
              <Typography variant="h5">Title Goes Here</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum,
                aliquid facere modi quo provident adipisci?
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          component="img"
          src={girlLanding}
          alt="Your Image"
          sx={{ width: "100%", height: "auto", paddingLeft: "20px" }}
        />
      </Grid>
    </Grid>
  );
};

export default Intro;
