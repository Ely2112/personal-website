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

const About = () => {
  const skills = {
    Languages: [
      ["./assets/python_logo.svg", "Python"],
      ["./assets/c_logo.png", "C"],
      ["./assets/c++_logo.png", "C++"],
      ["./assets/java_logo.png", "Java"],
      ["./assets/javaScript_logo.webp", "JavaScript"],
      ["./assets/csharp_logo.png", "C#"],
    ],
    AI: [
      ["./assets/pytorch_logo.png", "PyTorch"],
      ["./assets/keras_logo.png", "Keras"],
      ["./assets/scikitlearn_logo.png", "Scikit-learn"],
      ["./assets/opencv_logo.png", "OpenCV"],
      ["./assets/huggingface_logo.jpeg", "Hugging Face"],
      ["./assets/googlecolab_logo.png", "Google Colab"],
    ],
    "Front End": [
      ["./assets/html_logo.png", "HTML"],
      ["./assets/css_logo.svg", "CSS"],
      ["./assets/react_logo.svg", "React"],
      ["./assets/mui_logo.png", "Material-UI"],
      ["./assets/figma_logo.jpg", "Figma"],
    ],
    Tools: [
      ["./assets/vscode_logo.png", "VS Code"],
      ["./assets/intellij_logo.jpeg", "Intellij"],
      ["./assets/github_logo.png", "GitHub"],
      ["./assets/googlecolab_logo.png", "Google Colab"],
      ["./assets/googleanalytics_logo.png", "Google Analytics"],
      ["./assets/clarity_logo.jpeg", "Clarity"],
      ["./assets/openai_logo.png", "OpenAI API"],
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
