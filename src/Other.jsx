import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

import CVPR_1_img from "./assets/CVPR_1.jpg";
import CVPR_2_img from "./assets/CVPR_2.jpg";
import CVPR_3_img from "./assets/CVPR_3.jpg";
import BloombergData_2_img from "./assets/BloombergData_2.jpg";
import InnoTech_1_img from "./assets/InnoTech_1.jpg";
import InnoTech_2_img from "./assets/InnoTech_2.jpg";
import Aeon_1_img from "./assets/Aeon_1.png";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Other = () => {
  // date, title, description[], images[]
  const others = [
    [
      "Jun 2024",
      "Conference on Computer Vision and Pattern Recognition (CVPR)",
      [
        "Participated in one of the premier annual computer vision conferences, engaging with cutting-edge research and industry developments",
      ],
      [CVPR_1_img, CVPR_2_img, CVPR_3_img],
    ],
    [
      "Jun 2024",
      "Innovation and Technology Scholarship",
      [
        "InnoTech Area: Artificial Intelligence and Robotics",
        "Chosen as one of only 25 recipients, awarded HK$150,000 for overseas exchange and outreach program",
      ],
      [InnoTech_1_img, InnoTech_2_img],
    ],
    [
      "Jun 2024",
      "Bloomberg Data Academy (Hong Kong) Program",
      [
        "Selected as a participant in the Bloomberg Data Academy, with a focus on data analytics and financial modeling",
        "Gained insights into the Bloomberg's application of data science",
        "Developed an ESG ranking model to assess companies based on sustainability and ethics within 8 hours",
      ],
      [BloombergData_2_img],
    ],
    [
      "Mar 2024",
      "AEON Credit Service Scholarship",
      [
        "Received the AEON Credit Service Scholarship twice, totaling HK$20,000",
        "Shared study experiences, development plans, and future aspirations with AEON Credit Service",
      ],
      [Aeon_1_img],
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
        Other Experience
      </Typography>
      <Box>
        {others.map((other) => {
          return (
            <Card
              variant="outlined"
              sx={{ borderRadius: "16px", marginBottom: "16px" }}
            >
              <CardContent sx={{ "&:last-child": { paddingBottom: "16px" } }}>
                <Typography color="#848991" paddingBottom="16px">
                  {other[0]}
                </Typography>
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
                  {other[1]}
                </Typography>
                <Box paddingBottom="16px">
                  <ul>
                    {other[2].map((description) => {
                      return (
                        <li>
                          <Typography
                            color="#848991"
                            fontWeight="400"
                            sx={{
                              fontSize: {
                                xs: "1rem",
                                sm: "1.1rem",
                                md: "1.2rem",
                                lg: "1.3rem",
                              },
                            }}
                          >
                            {description}
                          </Typography>
                        </li>
                      );
                    })}
                  </ul>
                </Box>
                <Grid
                  container
                  rowSpacing={2}
                  columnSpacing={{ xs: 0, md: 2 }}
                  xs={12}
                >
                  {other[3].map((image) => {
                    return (
                      <Grid item xs={12} md={6} lg={4}>
                        <Zoom>
                          <CardMedia
                            image={image}
                            sx={{
                              height: {
                                xs: "150px",
                                sm: "280px",
                                md: "230px",
                                lg: "210px",
                              },
                              objectFit: "cover",
                              borderRadius: "8px",
                              border: "1px solid rgba(0, 0, 0, 0.12)",
                            }}
                          />
                        </Zoom>
                      </Grid>
                    );
                  })}
                </Grid>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default Other;
