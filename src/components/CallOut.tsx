import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const CallOut = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F0F0F0",
        paddingTop: "70px",
        paddingBottom: "80px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box maxWidth={"600px"}>
        <Typography variant="h4">A Price To Suit Everyone</Typography>
        <Typography variant="body1" mt={2}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
          autem quisquam quae? Libero tenetur molestiae enim, quia quae quos! Ad
          molestiae enim, quia quae quos! Ad!
        </Typography>
        <Typography variant="h2" mt={4}>
          $40
        </Typography>
        <Typography variant="body2">UI Design Kit</Typography>
        <Typography variant="body2" mt={8}>
          See, one price simple
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#091133",
            marginRight: "10px",
            textTransform: "capitalize",
            marginTop: "5px",
          }}
        >
          Purchase Now
        </Button>
      </Box>
    </Box>
  );
};

export default CallOut;
