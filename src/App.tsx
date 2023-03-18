import { Container, CssBaseline } from "@mui/material";
import CallOut from "./components/CallOut";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg">
        <Hero />
        <Intro />
      </Container>
      <Projects />
      <CallOut />
      <Footer />
    </>
  );
};

export default App;
