import React from "react";
import { Box, Button, Typography } from "@mui/material";
import personalImage from "./assets/personal_image2.jpeg";
import ReactCurvedText from "react-curved-text";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
        <Box position="relative" top="20.75px">
          <ReactCurvedText
            width={500}
            height={500}
            cx={250}
            cy={250}
            rx={140}
            ry={140}
            startOffset={0}
            reversed={false}
            text="Poon Kwan Hei Anson - Computer Science - "
            textProps={{
              style: {
                fontSize: "35.3px",
                fontWeight: 300,
                fontFamily: `"FS Elliot Pro", sans-serif`,
                letterSpacing: "0.3rem",
                transformOrigin: "250px 250px",
              },
              className: "rotating",
            }}
            textPathProps={{ style: { fill: "#13426B" } }}
            tspanProps={null}
            ellipseProps={null}
            svgProps={null}
          />
        </Box>
        <Box display="flex" position="relative" top="-50px" gap="24px">
          <Button
            href="https://ely2112.github.io/resume/Resume_POON%20Kwan%20Hei%20Anson.pdf"
            target="_blank"
            download="Resume_POON Kwan Hei Anson.pdf"
            sx={{
              height: "fit-content",
              gap: "8px",
              display: "flex",
              verticalAlign: "baseline",
            }}
          >
            <ContactPageIcon sx={{ color: "#13426B" }} size="2.4rem" />
            <Typography color="#13426B" fontSize="1.2rem" lineHeight="1.2rem">
              Resume
            </Typography>
          </Button>

          <Button
            href="https://www.linkedin.com/in/kwan-hei-anson-poon/"
            target="_blank"
            sx={{
              height: "fit-content",
              gap: "8px",
              display: "flex",
              verticalAlign: "baseline",
            }}
          >
            <LinkedInIcon sx={{ color: "#13426B" }} size="2.4rem" />
            <Typography color="#13426B" fontSize="1.2rem" lineHeight="1.2rem">
              LinkedIn
            </Typography>
          </Button>
        </Box>
      </Box>

      <Box
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{
          height: "100%",
          width: "300px",
          margin: "0 auto",
          display: { xs: "none", sm: "flex", md: "none" },
        }}
      >
        <Box
          position="absolute"
          component="img"
          src={personalImage}
          sx={{
            height: "150px",
            width: "150px",
            objectFit: "cover",
            borderRadius: "9999px",
            zIndex: "-1",
          }}
        />
        <Box position="relative" top="20.75px">
          <ReactCurvedText
            width={400}
            height={400}
            cx={200}
            cy={200}
            rx={100}
            ry={100}
            startOffset={0}
            reversed={false}
            text="Poon Kwan Hei Anson - Computer Science - "
            textProps={{
              style: {
                fontSize: "22.3px",
                fontWeight: 300,
                fontFamily: `"FS Elliot Pro", sans-serif`,
                letterSpacing: "0.3rem",
                transformOrigin: "200px 200px",
              },
              className: "rotating",
            }}
            textPathProps={{ style: { fill: "#13426B" } }}
            tspanProps={null}
            ellipseProps={null}
            svgProps={null}
          />
        </Box>
        <Box display="flex" position="relative" top="-50px" gap="12px">
          <Button
            href="https://ely2112.github.io/resume/Resume_POON%20Kwan%20Hei%20Anson.pdf"
            target="_blank"
            download="Resume_POON Kwan Hei Anson.pdf"
            sx={{
              height: "fit-content",
              gap: "8px",
              display: "flex",
              verticalAlign: "baseline",
            }}
          >
            <ContactPageIcon sx={{ color: "#13426B" }} size="2rem" />
            <Typography color="#13426B" fontSize="1rem" lineHeight="1rem">
              Resume
            </Typography>
          </Button>

          <Button
            href="https://www.linkedin.com/in/kwan-hei-anson-poon/"
            target="_blank"
            sx={{
              height: "fit-content",
              gap: "8px",
              display: "flex",
              verticalAlign: "baseline",
            }}
          >
            <LinkedInIcon sx={{ color: "#13426B" }} size="2rem" />
            <Typography color="#13426B" fontSize="1rem" lineHeight="1rem">
              LinkedIn
            </Typography>
          </Button>
        </Box>
      </Box>

      <Box
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{
          height: "100%",
          width: "300px",
          margin: "0 auto",
          display: { xs: "flex", sm: "none" },
        }}
      >
        <Box
          position="absolute"
          component="img"
          src={personalImage}
          sx={{
            height: "100px",
            width: "100px",
            objectFit: "cover",
            borderRadius: "9999px",
            zIndex: "-1",
          }}
        />
        <Box position="relative" top="20.75px">
          <ReactCurvedText
            width={300}
            height={300}
            cx={150}
            cy={150}
            rx={65}
            ry={65}
            startOffset={0}
            reversed={false}
            text="Poon Kwan Hei Anson - Computer Science - "
            textProps={{
              style: {
                fontSize: "10.9px",
                fontWeight: 300,
                fontFamily: `"FS Elliot Pro", sans-serif`,
                letterSpacing: "0.3rem",
                transformOrigin: "150px 150px",
              },
              className: "rotating",
            }}
            textPathProps={{ style: { fill: "#13426B" } }}
            tspanProps={null}
            ellipseProps={null}
            svgProps={null}
          />
        </Box>
        <Box display="flex" position="relative" top="-50px" gap="8px">
          <Button
            href="https://ely2112.github.io/resume/Resume_POON%20Kwan%20Hei%20Anson.pdf"
            target="_blank"
            download="Resume_POON Kwan Hei Anson.pdf"
            sx={{
              height: "fit-content",
              gap: "8px",
              display: "flex",
              verticalAlign: "baseline",
            }}
          >
            <ContactPageIcon sx={{ color: "#13426B" }} size="1.6rem" />
            <Typography color="#13426B" fontSize="0.8rem" lineHeight="0.8rem">
              Resume
            </Typography>
          </Button>

          <Button
            href="https://www.linkedin.com/in/kwan-hei-anson-poon/"
            target="_blank"
            sx={{
              height: "fit-content",
              gap: "8px",
              display: "flex",
              verticalAlign: "baseline",
            }}
          >
            <LinkedInIcon sx={{ color: "#13426B" }} size="1.6rem" />
            <Typography color="#13426B" fontSize="0.8rem" lineHeight="0.8rem">
              LinkedIn
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;