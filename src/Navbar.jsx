import React from "react";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";

const Navbar = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const defaultProps = { color: "#D6D8DA" };
  const selectedProps = { borderBottom: "1px solid #13426B", color: "#13426B" };
  const hoverProps = { borderBottom: "1px solid #26CAD3", color: "#26CAD3" };

  const [barProps, setBarProps] = useState([
    selectedProps,
    defaultProps,
    defaultProps,
    defaultProps,
    defaultProps,
    defaultProps,
    defaultProps,
  ]);

  useEffect(() => {
    let counter = -1;
    for (const i in props.pagesRef) {
      if (scrollPosition < props.pagesRef[i].current.offsetTop - 65) {
        break;
      }
      ++counter;
    }
    let tempBarProps = [
      defaultProps,
      defaultProps,
      defaultProps,
      defaultProps,
      defaultProps,
      defaultProps,
      defaultProps,
    ];
    tempBarProps[counter] = selectedProps;
    setBarProps(tempBarProps);
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 65,
      behavior: "smooth",
    });
  };

  return (
    <Box
      justifyContent="space-between"
      alignItems="center"
      bgcolor="#FFFFFF"
      sx={{
        boxShadow: "0px 7px 10px 0px #0000000A ,0px 3px 8px 0px #0000000F",
        padding: { xs: "4px 12px", md: "8px 48px" },
        display: { xs: "block", md: "flex" },
      }}
    >
      <Box width="fit-content" sx={{ margin: { xs: "0 auto", md: "0" } }}>
        <Typography
          color="#13426B"
          letterSpacing="0px"
          fontWeight="700"
          sx={{
            fontSize: { xs: "1.5rem", md: "2rem" },
            cursor: "pointer",
            transition: "all .2s ease",
            "&:hover": {
              letterSpacing: "3px",
            },
          }}
          onClick={() => {
            scrollToSection(props.pagesRef.AnsonPoon);
          }}
        >
          Anson Poon
        </Typography>
      </Box>
      <Box
        height="fit-content"
        width="fit-content"
        sx={{
          gap: { xs: "12px", md: "24px" },
          display: "flex",
          margin: { xs: "0 auto", md: "0" },
        }}
      >
        <Typography
          {...barProps[0]}
          sx={{
            fontSize: { xs: "0.7rem", md: "1.2rem" },
            cursor: "pointer",
            transition: "all .2s ease",
            "&:hover": {
              ...hoverProps,
            },
          }}
          onClick={() => {
            scrollToSection(props.pagesRef.AnsonPoon);
          }}
        >
          Home
        </Typography>
        <Typography
          {...barProps[1]}
          sx={{
            fontSize: { xs: "0.7rem", md: "1.2rem" },
            cursor: "pointer",
            transition: "all .2s ease",
            "&:hover": {
              ...hoverProps,
            },
          }}
          onClick={() => {
            scrollToSection(props.pagesRef.About);
          }}
        >
          About
        </Typography>
        <Typography
          {...barProps[2]}
          sx={{
            fontSize: { xs: "0.7rem", md: "1.2rem" },
            cursor: "pointer",
            transition: "all .2s ease",
            "&:hover": {
              ...hoverProps,
            },
          }}
          onClick={() => {
            scrollToSection(props.pagesRef.Work);
          }}
        >
          Work
        </Typography>
        <Typography
          {...barProps[3]}
          sx={{
            fontSize: { xs: "0.7rem", md: "1.2rem" },
            cursor: "pointer",
            transition: "all .2s ease",
            "&:hover": {
              ...hoverProps,
            },
          }}
          onClick={() => {
            scrollToSection(props.pagesRef.Education);
          }}
        >
          Education
        </Typography>
        <Typography
          {...barProps[4]}
          sx={{
            fontSize: { xs: "0.7rem", md: "1.2rem" },
            cursor: "pointer",
            transition: "all .2s ease",
            "&:hover": {
              ...hoverProps,
            },
          }}
          onClick={() => {
            scrollToSection(props.pagesRef.Project);
          }}
        >
          Project
        </Typography>
        <Typography
          {...barProps[5]}
          sx={{
            fontSize: { xs: "0.7rem", md: "1.2rem" },
            cursor: "pointer",
            "&:hover": {
              ...hoverProps,
            },
          }}
          onClick={() => {
            scrollToSection(props.pagesRef.Other);
          }}
        >
          Other
        </Typography>
        <Typography
          {...barProps[6]}
          sx={{
            fontSize: { xs: "0.7rem", md: "1.2rem" },
            cursor: "pointer",
            transition: "all .2s ease",
            "&:hover": {
              ...hoverProps,
            },
          }}
          onClick={() => {
            scrollToSection(props.pagesRef.Contact);
          }}
        >
          Contact
        </Typography>
      </Box>
    </Box>
  );
};

export default Navbar;
