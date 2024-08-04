import React from "react";
import { Box, Button, Typography } from "@mui/material";
import personalImage from "./assets/personal_image2.jpeg";
import ReactCurvedText from "react-curved-text";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useContext } from "react";
import { Context } from "./App";

const Home = (props) => {
  const [height, setHeight] = useContext(Context);
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
        <Box display="flex" position="relative" top="240px" gap="24px">
          <Button
            href="https://ely2112.github.io/resume/Resume_POON%20Kwan%20Hei%20Anson.pdf"
            target="_blank"
            download="Resume_POON Kwan Hei Anson.pdf"
            sx={{
              height: "40px",
              gap: "0.5rem",
              display: "flex",
              verticalAlign: "baseline",
            }}
          >
            <ContactPageIcon sx={{ color: "#13426B", fontSize: "2.4rem" }} />
            <Typography color="#13426B" fontSize="1.2rem" lineHeight="1.2rem">
              Resume
            </Typography>
          </Button>

          <Button
            href="https://www.linkedin.com/in/kwan-hei-anson-poon/"
            target="_blank"
            sx={{
              height: "40px",
              gap: "0.5rem",
              display: "flex",
              verticalAlign: "baseline",
            }}
          >
            <LinkedInIcon sx={{ color: "#13426B", fontSize: "2.4rem" }} />
            <Typography color="#13426B" fontSize="1.2rem" lineHeight="1.2rem">
              LinkedIn
            </Typography>
          </Button>
        </Box>
        <Box display="flex" position="relative" top="280px">
          <ArrowDownwardIcon
            className="blinking"
            sx={{ color: "#B4B4B8", fontSize: "4.8rem", cursor: "pointer" }}
            onClick={() => {
              window.scrollTo({
                top: props.aboutRef.current.offsetTop - height,
                behavior: "smooth",
              });
            }}
          />
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
            height: "170px",
            width: "170px",
            objectFit: "cover",
            borderRadius: "9999px",
            zIndex: "-1",
          }}
        />
        <Box position="absolute">
          <ReactCurvedText
            width={425}
            height={425}
            cx={212.5}
            cy={212.5}
            rx={120}
            ry={120}
            startOffset={0}
            reversed={false}
            text="Poon Kwan Hei Anson - Computer Science - "
            textProps={{
              style: {
                fontSize: "28.7px",
                fontWeight: 300,
                fontFamily: `"FS Elliot Pro", sans-serif`,
                letterSpacing: "0.3rem",
                transformOrigin: "212.5px 212.5px",
              },
              className: "rotating",
            }}
            textPathProps={{ style: { fill: "#13426B" } }}
            tspanProps={null}
            ellipseProps={null}
            svgProps={null}
          />
        </Box>
        <Box display="flex" position="relative" top="200px" gap="12px">
          <Button
            href="https://ely2112.github.io/resume/Resume_POON%20Kwan%20Hei%20Anson.pdf"
            target="_blank"
            download="Resume_POON Kwan Hei Anson.pdf"
            sx={{
              height: "40px",
              gap: "0.5rem",
              display: "flex",
              verticalAlign: "baseline",
            }}
          >
            <ContactPageIcon sx={{ color: "#13426B", fontSize: "2rem" }} />
            <Typography color="#13426B" fontSize="1rem" lineHeight="1rem">
              Resume
            </Typography>
          </Button>

          <Button
            href="https://www.linkedin.com/in/kwan-hei-anson-poon/"
            target="_blank"
            sx={{
              height: "40px",
              gap: "0.5rem",
              display: "flex",
              verticalAlign: "baseline",
            }}
          >
            <LinkedInIcon sx={{ color: "#13426B", fontSize: "2rem" }} />
            <Typography color="#13426B" fontSize="1rem" lineHeight="1rem">
              LinkedIn
            </Typography>
          </Button>
        </Box>
        <Box display="flex" position="relative" top="230px">
          <ArrowDownwardIcon
            className="blinking"
            sx={{ color: "#B4B4B8", fontSize: "4rem", cursor: "pointer" }}
            onClick={() => {
              window.scrollTo({
                top: props.aboutRef.current.offsetTop - height,
                behavior: "smooth",
              });
            }}
          />
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
            height: "150px",
            width: "150px",
            objectFit: "cover",
            borderRadius: "9999px",
            zIndex: "-1",
          }}
        />
        <Box position="absolute">
          <ReactCurvedText
            width={220}
            height={220}
            cx={110}
            cy={110}
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
                transformOrigin: "110px 110px",
              },
              className: "rotating",
            }}
            textPathProps={{ style: { fill: "#13426B" } }}
            tspanProps={null}
            ellipseProps={null}
            svgProps={null}
          />
        </Box>
        <Box display="flex" position="relative" top="170px" gap="8px">
          <Button
            href="https://ely2112.github.io/resume/Resume_POON%20Kwan%20Hei%20Anson.pdf"
            target="_blank"
            download="Resume_POON Kwan Hei Anson.pdf"
            sx={{
              height: "40px",
              gap: "0.5rem",
              display: "flex",
              verticalAlign: "baseline",
            }}
          >
            <ContactPageIcon sx={{ color: "#13426B", fontSize: "1.6em" }} />
            <Typography color="#13426B" fontSize="0.8rem" lineHeight="0.8rem">
              Resume
            </Typography>
          </Button>

          <Button
            href="https://www.linkedin.com/in/kwan-hei-anson-poon/"
            target="_blank"
            sx={{
              height: "40px",
              gap: "0.5rem",
              display: "flex",
              verticalAlign: "baseline",
            }}
          >
            <LinkedInIcon sx={{ color: "#13426B", fontSize: "1.6rem" }} />
            <Typography color="#13426B" fontSize="0.8rem" lineHeight="0.8rem">
              LinkedIn
            </Typography>
          </Button>
        </Box>
        <Box display="flex" position="relative" top="190px">
          <ArrowDownwardIcon
            className="blinking"
            sx={{ color: "#B4B4B8", fontSize: "3.2rem", cursor: "pointer" }}
            onClick={() => {
              window.scrollTo({
                top: props.aboutRef.current.offsetTop - height,
                behavior: "smooth",
              });
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
