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

const Education = () => {
  // period, name, title, details [], skills [[]], link
  const experiences = [
    [
      "Sep 2024 - Present",
      "ETH Zurich",
      "Exchange Student",
      [
        "Relevant Coursework: Web Engineering, Human Computer Interaction, Visual Computing",
      ],
      "https://ethz.ch/en.html",
    ],
    [
      "Sep 2021 - Present",
      "Hong Kong University of Science and Technology",
      "Bachelor of Engineering",
      [
        "Major in Computer Science with an Extended Major in Artificial Intelligence",
        "CGPA: 3.92 / 4.30; Dean's List for 6 semesters",
        "Undergraduate Teaching Assistant: Conduct weekly tutorial sections to help students with Python and computer science knowledge",
        "Undergraduate Researcher: Researched DLFormer in Computer vision, and explored millimeter wave sensor applications in human action recognition",
      ],
      "https://hkust.edu.hk/",
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
        Education
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
                        <a href={experience[4]} target="_blank">
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

export default Education;
