import React from "react";
import { Box, Button } from "@mui/material";
import personalImage from "./assets/personal_image2.jpeg";
import ReactCurvedText from "react-curved-text";

const Home = () => {
  return (
    <Box height="100%" width="100%">
      <Box
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{
          height: "100%",
          width: "900px",
          margin: "0 auto",
          display: { xs: "none", md: "flex" },
        }}
      >
        <Box
          position="absolute"
          component="img"
          src={personalImage}
          sx={{
            height: "200px",
            width: "200px",
            objectFit: "cover",
            borderRadius: "9999px",
            zIndex: "-1",
          }}
        />
        <Box position="absolute">
          <ReactCurvedText
            width={500}
            height={500}
            cx={250}
            cy={250}
            rx={143}
            ry={143}
            startOffset={0}
            reversed={false}
            text="Poon Kwan Hei Anson - Computer Science - "
            textProps={{
              style: {
                fontSize: 36,
                fontWeight: 300,
                fontFamily: `"FS Elliot Pro", sans-serif`,
                letterSpacing: "0.3rem",
              },
              className: "rotating",
            }}
            textPathProps={null}
            tspanProps={null}
            ellipseProps={null}
            svgProps={null}
          />
        </Box>
        <Box display="flex" position="relative" top="200px" gap="24px">
          <Button
            href="https://ely2112.github.io/resume/Resume_POON%20Kwan%20Hei%20Anson.pdf"
            target="_blank"
            download="Resume_POON Kwan Hei Anson.pdf"
          >
            Resume
          </Button>
          <Button
            href="https://www.linkedin.com/in/kwan-hei-anson-poon/"
            target="_blank"
          >
            LinkedIn
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
