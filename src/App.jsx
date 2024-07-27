import { useState, useEffect, useRef } from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./App.css";
import GPA from "./GPA";
import Navbar from "./Navbar";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

function App() {
  const AnsonPoon = useRef(null);
  const About = useRef(null);
  const Work = useRef(null);
  const Education = useRef(null);
  const Project = useRef(null);
  const Other = useRef(null);
  const Contact = useRef(null);

  const [count, setCount] = useState(0);
  const theme = createTheme({
    typography: {
      fontFamily: `"FS Elliot Pro", sans-serif`,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
  });

  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)")
      ? console.log("dark")
      : console.log("light");
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box position="sticky" width="100%" top="0" zIndex={1}>
          <Navbar
            pagesRef={{
              AnsonPoon: AnsonPoon,
              About: About,
              Work: Work,
              Education: Education,
              Project: Project,
              Other: Other,
              Contact: Contact,
            }}
          />
        </Box>
        <Box ref={AnsonPoon} width="100vw" height="100vh">
          <Typography>Anson Poon</Typography>
        </Box>
        <Box ref={About} width="100vw" height="100vh">
          <Typography>About</Typography>
        </Box>
        <Box ref={Work} width="100vw" height="100vh">
          <Typography>Work</Typography>
        </Box>
        <Box ref={Education} width="100vw" height="100vh">
          <Typography>Education</Typography>
        </Box>
        <Box ref={Project} width="100vw" height="100vh">
          <Typography>Project</Typography>
        </Box>
        <Box ref={Other} width="100vw" height="100vh">
          <Typography>Other</Typography>
        </Box>
        <Box ref={Contact} width="100vw" height="100vh">
          <Typography>Contact</Typography>
        </Box>
        <Box margin="24px auto" width="90vw" height="70vh">
          <GPA />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
