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

const Project = () => {
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
        Project
      </Typography>
    </Box>
  );
};

export default Project;
