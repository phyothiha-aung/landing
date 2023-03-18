import {
  Toolbar,
  Typography,
  AppBar,
  Grid,
  Button,
  Stack,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Divider from "@mui/material/Divider";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar
        component="nav"
        position="fixed"
        elevation={0}
        sx={{
          boxShadow: "0px 1px 20px 1px #ccc8",
          border: 0,
          backgroundColor: "transparent",
          padding: {
            xs: "0",
            md: "0 20px",
          },
        }}
      >
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid
              item
              xs={0}
              md={4}
              display={{
                xs: "none",
                md: "block",
              }}
              justifySelf="center"
            >
              <Stack spacing={5} direction="row">
                <Typography
                  variant="body2"
                  color="black"
                  sx={{ cursor: "pointer" }}
                >
                  Home
                </Typography>
                <Typography
                  variant="body2"
                  color="black"
                  sx={{ cursor: "pointer" }}
                >
                  About
                </Typography>
                <Typography
                  variant="body2"
                  color="black"
                  sx={{ cursor: "pointer" }}
                >
                  Contact
                </Typography>
              </Stack>
            </Grid>
            <Grid item md={4}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: 25,
                  fontWeight: 700,
                  color: "#2245E3",
                  margin: "0 auto",
                  textAlign: {
                    xs: "left",
                    md: "center",
                  },
                }}
              >
                Landing
              </Typography>
            </Grid>

            <Grid
              item
              xs={0}
              md={4}
              display="flex"
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              color="black"
            >
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "#091133",
                  textTransform: "capitalize",
                  padding: {
                    md: "5px 20px",
                  },
                }}
              >
                Buy Now
              </Button>
              <span onClick={() => setOpen(true)}>
                <MenuIcon
                  color={"inherit"}
                  sx={{
                    display: {
                      xs: "block",
                      md: "none",
                      marginLeft: "15px",
                    },
                    cursor: "pointer",
                  }}
                />
              </span>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer anchor="top" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0px 1px 20px 1px #ccc8",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: 25,
              fontWeight: 700,
              color: "#2245E3",
              textAlign: "left",
            }}
          >
            Landing
          </Typography>
          <span onClick={() => setOpen(false)}>
            <CloseIcon />
          </span>
        </Toolbar>
        <Stack spacing={2} py={3} px={2}>
          <Typography variant="body2" color="black" sx={{ cursor: "pointer" }}>
            Home
          </Typography>
          <Typography variant="body2" color="black" sx={{ cursor: "pointer" }}>
            About
          </Typography>
          <Typography variant="body2" color="black" sx={{ cursor: "pointer" }}>
            Contact
          </Typography>
        </Stack>
      </Drawer>
    </>
  );
};

export default Navbar;
