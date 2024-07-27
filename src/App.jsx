import { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./App.css";
import GPA from "./GPA";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

function App() {
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
      <Box margin="24px auto" height="70vh" width="80vw">
        <GPA />
      </Box>
    </ThemeProvider>
  );
}

export default App;
