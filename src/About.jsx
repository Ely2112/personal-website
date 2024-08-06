import React from "react";
import {
  Avatar,
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Chip,
} from "@mui/material";

import Python from "./assets/python_logo.svg";
import C from "./assets/c_logo.png";
import Cplusplus from "./assets/c++_logo.png";
import Java from "./assets/java_logo.png";
import JavaScript from "./assets/javaScript_logo.webp";
import Csharp from "./assets/csharp_logo.png";

import PyTorch from "./assets/pytorch_logo.png";
import Keras from "./assets/keras_logo.png";
import Scikit_learn from "./assets/scikitlearn_logo.png";
import OpenCV from "./assets/opencv_logo.png";
import Hugging_Face from "./assets/huggingface_logo.png";
import Google_Colab from "./assets/googlecolab_logo.png";

import HTML from "./assets/html_logo.png";
import CSS from "./assets/css_logo.svg";
import React_logo from "./assets/react_logo.svg";
import Material_UI from "./assets/mui_logo.png";
import Figma from "./assets/figma_logo.jpg";

import VSCode from "./assets/vscode_logo.png";
import Intellij from "./assets/intellij_logo.jpeg";
import GitHub from "./assets/github_logo.png";
import Google_Analytics from "./assets/googleanalytics_logo.png";
import Clarity from "./assets/clarity_logo.jpeg";
import OpenAI_API from "./assets/openai_logo.png";

const About = () => {
  const skills = {
    Languages: [
      [Python, "Python"],
      [C, "C"],
      [Cplusplus, "C++"],
      [Java, "Java"],
      [JavaScript, "JavaScript"],
      [Csharp, "C#"],
    ],
    AI: [
      [PyTorch, "PyTorch"],
      [Keras, "Keras"],
      [Scikit_learn, "Scikit-learn"],
      [OpenCV, "OpenCV"],
      [Hugging_Face, "Hugging Face"],
      [Google_Colab, "Google Colab"],
    ],
    "Front End": [
      [HTML, "HTML"],
      [CSS, "CSS"],
      [React_logo, "React"],
      [Material_UI, "Material-UI"],
      [Figma, "Figma"],
    ],
    Tools: [
      [VSCode, "VS Code"],
      [Intellij, "Intellij"],
      [GitHub, "GitHub"],
      [Google_Colab, "Google Colab"],
      [Google_Analytics, "Google Analytics"],
      [Clarity, "Clarity"],
      [OpenAI_API, "OpenAI API"],
    ],
  };
  return (
    <Box>
      <Box
        margin="0 auto"
        sx={{ width: { xs: "300px", sm: "536px", md: "836px", lg: "1136px" } }}
      >
        <Typography
          margin="24px auto"
          color="#0999d6"
          fontWeight="700"
          sx={{
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem", lg: "5rem" },
          }}
        >
          About Me
        </Typography>
        <Typography
          margin="16px 0"
          color="#0c191f"
          letterSpacing="0.03rem"
          sx={{
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem", lg: "1.5em" },
          }}
        >
          I'm Poon Kwan Hei Anson, an undergraduate student majoring in{" "}
          <strong>Computer Science</strong> with an Extended Major in{" "}
          <strong>Artificial Intelligence</strong> at the{" "}
          <a href="https://hkust.edu.hk/" target="_blank">
            Hong Kong University of Science and Technology
          </a>
          .
        </Typography>
        <Typography
          margin="16px 0"
          color="#0c191f"
          letterSpacing="0.03rem"
          sx={{
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem", lg: "1.5rem" },
          }}
        >
          I am interested in <strong>AI</strong> and <strong>Web Dev</strong>. I
          have a track record of developing <strong>AI</strong> and{" "}
          <strong>NLP</strong> models, and built a{" "}
          <strong>design system</strong> during previous internships.
        </Typography>

        <Typography
          margin="32px 0 0 0"
          color="#0999d6"
          letterSpacing="0.03rem"
          fontWeight="700"
          sx={{
            fontSize: {
              xs: "1.2rem",
              sm: "1.4rem",
              md: "1.6rem",
              lg: "1.7rem",
            },
          }}
        >
          My set of skills:
        </Typography>

        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 0, sm: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Object.keys(skills).map((skill) => {
            console.log(skill);
            console.log(skills[skill]);
            return (
              <Grid item xs={4}>
                <Typography
                  margin="4px 0 0 0"
                  color="#0c191f"
                  sx={{
                    fontSize: {
                      xs: "1rem",
                      sm: "1.2rem",
                      md: "1.4rem",
                      lg: "1.5rem",
                    },
                  }}
                >
                  {skill}
                </Typography>
                <Card variant="outlined" sx={{ borderRadius: "16px" }}>
                  <CardContent
                    sx={{ "&:last-child": { paddingBottom: "16px" } }}
                  >
                    {skills[skill].map((data) => (
                      <Chip
                        avatar={<Avatar alt={data[1]} src={data[0]} />}
                        variant="outlined"
                        label={data[1]}
                        sx={{
                          margin: "4px",
                        }}
                      />
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
