import React from "react";
import {
  Avatar,
  Chip,
  Box,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

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

const Work = () => {
  // period, company name, position title, details [], skills [[]], link
  const experiences = [
    [
      "Jun - Aug 2025",
      "Morgan Stanley",
      "Technology Summer Analyst",
      [
        "Private Wealth Management Client Lifecycle Management Team",
        "Built a Java dependency rules engine to compute impacted data for account-change requests; modelled dependencies as a directed graph with BFS traversal",
        "Shipped a React Flow impact-graph UI that explains decisions and supports auditability; integrated via REST and added logging and validation for traceability",
      ],
      [
        [Java, "Java"],
        [JavaScript, "JavaScript"],
        [React_logo, "React"],
      ],
      "https://www.morganstanley.com/",
    ],
    [
      "Jun - Aug 2024",
      "Hong Kong Exchanges and Clearing Limited (HKEx)",
      "Summer Intern",
      [
        "Refined HKEX internal design system by building 2 analysis websites, implementing Shift Left Testing practices, and identifying and addressing over 10 gaps, leading to earlier defect detection and better system alignment",
        "Developed 2 new components for HKEX internal design system to improve user experience, resulting in a consistent design system that boosted web development progress and reduced interface inconsistencies",
        "Researched and presented web analytics tool, Microsoft Clarity, to UI/UX teams, resulting in targeted improvements to the user interface that  enhanced usability and user engagement by 10%",
      ],
      [
        [HTML, "HTML"],
        [CSS, "CSS"],
        [JavaScript, "JavaScript"],
        [React_logo, "React"],
        [Material_UI, "Material-UI"],
        [Figma, "Figma"],
        [Google_Analytics, "Google Analytics"],
        [Clarity, "Clarity"],
      ],
      "https://www.hkex.com.hk/?sc_lang=en",
    ],
    [
      "Jul - Aug 2023",
      "Hospital Authority",
      "Summer Intern",
      [
        "Collaborated with doctors and seniors data scientist to create an AI model for predicting patient length of stay using 100,000+ records, achieving 70.2% accuracy, optimizing hospital bed allocation and enhancing clinical resource management",
        "Investigated OCR models for handwritten medical referral letter recognition, increasing efficiency in appointment scheduling, reducing processing time, and saving substantial human effort by minimizing manual checks",
      ],
      [
        [Python, "Python"],
        [Keras, "Keras"],
        [Scikit_learn, "Scikit-learn"],
        [Hugging_Face, "Hugging Face"],
      ],
      "https://www.ha.org.hk/visitor/ha_index.asp?Content_ID=0&Lang=ENG&Dimension=100&Ver=HTML",
    ],
    [
      "Jun - Jul 2023",
      "Optix Solutions Limited",
      "AI R&D Intern",
      [
        "Developed a semantic analysis NLP model for MTR Corporation Limited's construction site reports with over 95% accuracy, streamlined daily report screening, reducing engineers' workload and contributing to maximize building safety",
        "Remodelled software front-end and UI using C# Windows Forms for the Education Bureau's secondary student elective subject selection process, improved the efficiency and user experience of the selection process",
      ],
      [
        [Python, "Python"],
        [Csharp, "C#"],
        [Hugging_Face, "Hugging Face"],
        [OpenAI_API, "OpenAI API"],
      ],
      "https://www.optixsolutions.com.hk/",
    ],
    [
      "Dec 2022 - Jan 2023",
      "ATTA Technologies",
      "Research Engineer Intern",
      [
        "Built an interactive fitness game using human action recognition model, encouraged sports participation among teenagers",
      ],
      [
        [Python, "Python"],
        [Cplusplus, "C++"],
        [Keras, "Keras"],
        [OpenCV, "OpenCV"],
      ],
      "https://attatechnologies.com/",
    ],
  ];
  return (
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
        Work Experience
      </Typography>
      <Timeline
        sx={{
          padding: "0",
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.25,
          },
        }}
      >
        {experiences.map((experience) => {
          return (
            <>
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  <Typography color="#848991">{experience[0]}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot sx={{ boxShadow: "0" }} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography
                    color="#848991"
                    paddingBottom="4px"
                    sx={{ display: { xs: "block", md: "none" } }}
                  >
                    {experience[0]}
                  </Typography>
                  <Box margin="0 0 64px 0">
                    <Card
                      variant="outlined"
                      sx={{ borderRadius: "16px", width: "100%" }}
                    >
                      <CardContent sx={{ padding: "24px" }}>
                        <a href={experience[5]} target="_blank">
                          <Typography
                            // color="#0c191f"
                            fontWeight="700"
                            paddingBottom="16px"
                            sx={{
                              fontSize: {
                                xs: "1.4rem",
                                sm: "1.6rem",
                                md: "1.8rem",
                                lg: "1.9rem",
                              },
                            }}
                          >
                            {experience[1]}
                          </Typography>
                        </a>
                        <Typography
                          color="#0c191f"
                          fontWeight="400"
                          paddingBottom="16px"
                          sx={{
                            fontSize: {
                              xs: "1.2rem",
                              sm: "1.4rem",
                              md: "1.6rem",
                              lg: "1.7rem",
                            },
                          }}
                        >
                          {experience[2]}
                        </Typography>
                        <ul>
                          {experience[3].map((details) => {
                            return (
                              <li>
                                <Typography
                                  color="#848991"
                                  fontWeight="400"
                                  paddingBottom="16px"
                                  sx={{
                                    fontSize: {
                                      xs: "1rem",
                                      sm: "1.1rem",
                                      md: "1.2rem",
                                      lg: "1.3rem",
                                    },
                                  }}
                                >
                                  {details}
                                </Typography>
                              </li>
                            );
                          })}
                        </ul>
                        <Box display="flex" flexWrap="wrap">
                          {experience[4].map((data) => {
                            return (
                              <Chip
                                avatar={<Avatar alt={data[1]} src={data[0]} />}
                                variant="outlined"
                                label={data[1]}
                                sx={{
                                  margin: "4px",
                                }}
                              />
                            );
                          })}
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                </TimelineContent>
              </TimelineItem>
              <TimelineConnector />
            </>
          );
        })}
      </Timeline>
    </Box>
  );
};

export default Work;
