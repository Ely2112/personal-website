import { useState, useEffect, useRef } from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./App.css";
import GPA from "./GPA";
import Navbar from "./Navbar";
import Home from "./Home";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

function App() {
  const HomeRef = useRef(null);
  const AboutRef = useRef(null);
  const WorkRef = useRef(null);
  const EducationRef = useRef(null);
  const ProjectRef = useRef(null);
  const OtherRef = useRef(null);
  const ContactRef = useRef(null);

  const NavbarArray = [
    ["Home", HomeRef],
    ["About", AboutRef],
    ["Work", WorkRef],
    ["Education", EducationRef],
    ["Project", ProjectRef],
    ["Other", OtherRef],
  ];

  const [navbarHeight, setNavbarHeight] = useState(0);
  const theme = createTheme({
    typography: {
      fontFamily: `"FS Elliot Pro", sans-serif`,
    },
  });

  // useEffect(() => {
  //   window.matchMedia("(prefers-color-scheme: dark)")
  //     ? console.log("dark")
  //     : console.log("light");
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ overflowX: "hidden" }}>
        <Box position="fixed" width="100vw" top="0" zIndex={1}>
          <Navbar pagesRef={NavbarArray} />
        </Box>
        <Box ref={HomeRef} width="100vw" height="100vh">
          <Home />
        </Box>
        <Box ref={AboutRef} width="100vw" height="100vh">
          <Typography>About</Typography>
        </Box>
        <Box ref={WorkRef} width="100vw" height="100vh">
          <Typography>Work</Typography>
        </Box>
        <Box ref={EducationRef} width="100vw" height="100vh">
          <Typography>Education</Typography>
        </Box>
        <Box ref={ProjectRef} width="100vw" height="100vh">
          <Typography>Project</Typography>
        </Box>
        <Box ref={OtherRef} width="100vw" height="100vh">
          <Typography>Other</Typography>
        </Box>
        <Box margin="24px auto" width="90vw" height="70vh">
          <GPA />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
