import { useState, useEffect, useRef, createContext } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import "./App.css";
import GPA from "./GPA";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Education from "./Education";
import Project from "./Project";
import Other from "./Other";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

export const Context = createContext();

function App() {
  const [height, setHeight] = useState(0);

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
        <Context.Provider value={[height, setHeight]}>
          <Box position="fixed" width="100vw" top="0" zIndex={1}>
            <Navbar pagesRef={NavbarArray} />
          </Box>
          <Box ref={HomeRef} width="100vw" height="100vh">
            <Home aboutRef={AboutRef} />
          </Box>
        </Context.Provider>

        <Box ref={AboutRef} width="100vw" padding="10px 0 64px 0">
          <About />
        </Box>

        <Box ref={WorkRef} width="100vw" padding="10px 0 64px 0">
          <Work />
        </Box>

        <Box ref={EducationRef} width="100vw" padding="10px 0 64px 0">
          <Education />
        </Box>

        <Box ref={ProjectRef} width="100vw" padding="10px 0 64px 0">
          <Project />
        </Box>
        <Box ref={OtherRef} width="100vw" padding="10px 0 64px 0">
          <Other />
        </Box>
        {/* <Box margin="24px auto" width="90vw" height="70vh">
          <GPA />
        </Box> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
