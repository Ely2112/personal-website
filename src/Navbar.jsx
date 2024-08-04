import React from "react";
import { Box, Typography } from "@mui/material";
import { useState, useEffect, useRef } from "react";

const Navbar = (props) => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  });

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const defaultProps = { color: "#B4B4B8" };
  const selectedProps = { borderBottom: "1px solid #13426B", color: "#13426B" };
  const hoverProps = {
    borderBottom: { sx: "none", md: "1px solid #26CAD3" },
    color: { sx: "none", md: "#26CAD3" },
  };

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
    for (let i = 0; i < props.pagesRef.length; ++i) {
      if (
        scrollPosition <
        props.pagesRef[i][1].current.offsetTop - (height + 1)
      ) {
        break;
      }
      ++counter;
    }
    if (counter === -1) {
      counter = 0;
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
      top: elementRef.current.offsetTop - height,
      behavior: "smooth",
    });
  };

  return (
    <Box
      ref={ref}
      justifyContent="space-between"
      alignItems="center"
      bgcolor="#FFFFFF"
      sx={{
        boxShadow: "0px 7px 10px 0px #0000000A ,0px 3px 8px 0px #0000000F",
        padding: { xs: "4px 4px", md: "8px 64px" },
        display: { xs: "block", md: "flex" },
      }}
    >
      <Box width="fit-content" sx={{ margin: { xs: "0 auto", md: "0" } }}>
        <Typography
          color="#13426B"
          letterSpacing="0px"
          fontWeight="700"
          sx={{
            fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
            cursor: "pointer",
            transition: "all .2s ease",
            "&:hover": {
              letterSpacing: { sx: "none", md: "3px" },
            },
          }}
          onClick={() => {
            scrollToSection(props.pagesRef[0][1]);
          }}
        >
          Anson Poon
        </Typography>
      </Box>
      <Box
        height="fit-content"
        width="fit-content"
        sx={{
          gap: { xs: "12px", sm: "18px", md: "24px" },
          display: "flex",
          margin: { xs: "0 auto", md: "0" },
        }}
      >
        {props.pagesRef.map((title, index) => {
          const titleName = title[0];
          return (
            <Typography
              {...barProps[index]}
              sx={{
                fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
                cursor: "pointer",
                transition: "all .2s ease",
                "&:hover": {
                  ...hoverProps,
                },
              }}
              onClick={() => {
                scrollToSection(title[1]);
              }}
            >
              {titleName}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};

export default Navbar;
