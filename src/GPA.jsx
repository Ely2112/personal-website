import React from "react";
import { Box } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { ChartsReferenceLine } from "@mui/x-charts/ChartsReferenceLine";

const GPA = () => {
  const courses = {
    // code, credit, grade
    "Year 1 Fall": [
      ["COMP1021", 3, "A+"],
      ["ENGG1010", 0, "PP"],
      ["HLTH1010", 0, "PP"],
      ["LANG1002S", 3, "B+"],
      ["LIFS1010", 3, "A"],
      ["MATH1013", 3, "A-"],
      ["PHYS1002", 3, "A+"],
    ],
    "Year 1 Spring": [
      ["CENG1500", 3, "A"],
      ["CHEM1020", 3, "A+"],
      ["ENGG1010", 0, "P"],
      ["HLTH1010", 0, "P"],
      ["LANG1003S", 3, "A-"],
      ["MATH1014", 3, "A"],
      ["SOSC1440", 3, "A"],
    ],
    "Year 2 Fall": [
      ["COMP2011", 4, "A"],
      ["COMP2211", 3, "B+"],
      ["COMP2711", 4, "A"],
      ["COMP4900", 0, "PP"],
      ["EMIA2010A", 0, "P"],
      ["ENGG2010", 0, "PP"],
      ["LANG2030", 3, "A-"],
      ["MATH2111", 3, "A"],
    ],
    "Year 2 Spring": [
      ["COMP1991", 0, "P"],
      ["COMP2012", 4, "A+"],
      ["COMP2611", 4, "A"],
      ["COMP3711", 3, "A"],
      ["COMP4900", 0, "PP"],
      ["CORE1240", 3, "A+"],
      ["EMIA2020", 3, "B+"],
      ["ENGG2010", 0, "PP"],
    ],
    "Year 3 Fall": [
      ["COMP3111", 4, "A"],
      ["COMP3511", 3, "A"],
      ["COMP4900", 0, "PP"],
      ["ENGG2010", 0, "PP"],
      ["HUMA1000B", 3, "B+"],
      ["IEDA2520", 3, "A+"],
      ["IEDA3010", 3, "A+"],
      ["UROP1100K", 1, "P"],
    ],
    "Year 3 Spring": [
      ["COMP4321", 3, "A+"],
      ["COMP4900", 0, "PP"],
      ["EMIA4110", 3, "A+"],
      ["ENGG2010", 0, "P"],
      ["ISOM3360", 3, "A"],
      ["LANG1416P", 3, "A-"],
      ["SOSC1850", 3, "B-"],
      ["UROP2100L", 1, "P"],
    ],
  };

  const validCourseGrade = {
    "A+": 4.3,
    A: 4,
    "A-": 3.7,
    "B+": 3.3,
    B: 3,
    "B-": 2.7,
    "C+": 2.3,
    C: 2,
    "C-": 1.7,
    D: 1,
    F: 0,
  };

  const validCourseGradeList = Object.keys(validCourseGrade);

  const TGA = [];
  const CGA = [];

  let totalCredit = 0;
  let totalUnit = 0;

  for (const i in courses) {
    let tempCredit = 0;
    let tempUnit = 0;
    courses[i].forEach((element) => {
      if (validCourseGradeList.includes(element[2])) {
        tempCredit += element[1];
        totalCredit += element[1];
        tempUnit += validCourseGrade[element[2]] * element[1];
        totalUnit += validCourseGrade[element[2]] * element[1];
      }
    });
    TGA.push(tempUnit / tempCredit);
    CGA.push(totalUnit / totalCredit);
  }

  const xLabels = Object.keys(courses);

  return (
    <Box width="100%" height="100%">
      <LineChart
        series={[
          {
            curve: "monotoneX",
            data: TGA,
            label: "TGA",
            color: "#FCCD52",
            sx: { fontFamily: "FS Elliot Pro" },
          },
          {
            curve: "monotoneX",
            data: CGA,
            label: "CGA",
            color: "#2375E1",
            sx: { fontFamily: "FS Elliot Pro" },
          },
        ]}
        xAxis={[
          {
            scaleType: "point",
            data: xLabels,
            labelStyle: { fontFamily: "FS Elliot Pro" },
            tickLabelStyle: { fontFamily: "FS Elliot Pro" },
          },
        ]}
        yAxis={[
          {
            min: 3.6,
            max: 4.1,
            labelStyle: { fontFamily: "FS Elliot Pro" },
            tickLabelStyle: { fontFamily: "FS Elliot Pro" },
          },
        ]}
      >
        <ChartsReferenceLine
          y={3.7}
          label="Dean's List"
          labelAlign="end"
          lineStyle={{ stroke: "#BBBBBB", strokeDasharray: "10 5" }}
          labelStyle={{ fontFamily: "FS Elliot Pro", fill: "#BBBBBB" }}
        />
        <ChartsReferenceLine
          y={3.9}
          label="Academic Achievement Medal"
          labelAlign="end"
          lineStyle={{ stroke: "#BBBBBB", strokeDasharray: "10 5" }}
          labelStyle={{ fontFamily: "FS Elliot Pro", fill: "#BBBBBB" }}
        />
      </LineChart>
    </Box>
  );
};

export default GPA;
