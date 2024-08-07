import React from "react";
import {
  CardActionArea,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

import arknight_auto_clicker_image from "./assets/arknight_auto_clicker.png";
import personal_website_image from "./assets/personal_website.png";
import rhine_lab_website_image from "./assets/rhine_lab_website.png";

const Project = () => {
  // image, title, description, link
  const projects = [
    [
      personal_website_image,
      "This personal website",
      "This personal website",
      "https://ely2112.github.io/personal-website/",
      [
        [<InsertLinkIcon />, "https://ely2112.github.io/personal-website/"],
        [<GitHubIcon />, "https://github.com/Ely2112/personal-website"],
      ],
    ],
    [
      arknight_auto_clicker_image,
      "Arknights Auto Clicker",
      "An auto clicker program for mobile game: Arknights, using Optical Character Recognition and Image Classification models.",
      "https://www.youtube.com/watch?v=0az1m93iW_0",
      [
        [<YouTubeIcon />, "https://www.youtube.com/watch?v=0az1m93iW_0"],
        [<GitHubIcon />, "https://github.com/Ely2112/Arknights-Auto-Clicker"],
      ],
    ],
    [
      rhine_lab_website_image,
      "Rhine Lab Website",
      'A website of "Arknights - Rhine Lab: Access"',
      "https://ely2112.github.io/Rhine_Lab/",
      [
        [<InsertLinkIcon />, "https://ely2112.github.io/Rhine_Lab/"],
        [<YouTubeIcon />, "https://www.youtube.com/watch?v=-RRhjNnyn_4"],
        [<GitHubIcon />, "https://github.com/Ely2112/Rhine_Lab"],
      ],
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
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 0, sm: 2 }}
        columns={{ xs: 4, md: 8 }}
      >
        {projects.map((project) => {
          console.log(project);
          return (
            <Grid item xs={4}>
              <Card variant="outlined" sx={{ borderRadius: "16px" }}>
                <CardActionArea href={project[3]} target="_blank">
                  <CardMedia
                    image={project[0]}
                    sx={{
                      height: {
                        xs: "170px",
                        sm: "300px",
                        md: "230px",
                        lg: "300px",
                      },
                      borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                    }}
                  />
                </CardActionArea>
                <CardContent>
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
                    {project[1]}
                  </Typography>
                  <Typography
                    color="#0c191f"
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
                    {project[2]}
                  </Typography>
                  <Box display="flex" sx={{ gap: "4px" }}>
                    {project[4].map((link) => {
                      console.log(link);
                      return (
                        <IconButton
                          href={link[1]}
                          target="_blank"
                          sx={{ color: "#0c191f" }}
                        >
                          {link[0]}
                        </IconButton>
                      );
                    })}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Project;
