import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const UcGridbox = () => {
  let data = [
    {
      id: 1,
      img: "https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fbf86f7f19477d80b3be5ec_Billable%20settings-p-500.png",
      heading: " Project billing",
      paragraph:
        "  Choose the billing method that is fair for your client and represents your actual work.",
    },
    {
      id: 2,
      img: "https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc0abed0af890cbb40c6d33_HP-3-1-p-500.png",
      heading: "Time reports & Project analytics",
      paragraph:
        " Always know how much time has been spent on your projects and tasks in a specific period of time with easy-to create reports.",
    },
    {
      id: 3,
      bg: "#FEFCF2",
      img: "https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc4e6828a88f435b7c4ac2a_HIW-4-p-800.png",
      heading: "Attendance & Absence",
      paragraph:
        "Know who was present at work and track absences and the reasons behind them. Make your payroll faster and more accurate by exporting all the tracked data. Time, attendance and absence tracking in one streamlined solution.",
    },
    {
      id: 4,
      bg: "#FEFCF2",
      img: "https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc91420b5951fed1bb2a187_Chickens(1).png",
      heading: " Expense tracking",
      paragraph:
        "Get expenses of your mind and into your invoice, without losing a cent or a receipt.",
    },
    {
      id: 5,
      img: "https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc91420b5951fed1bb2a187_Chickens(1).png",
      heading: "Calculating project profitability",
      paragraph:
        "Grow your business faster by prioritizing the projects that are worth your time, effort and resources.",
    },

    {
      id: 6,
      img: "https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd20dcf9d62a4f65fea8acd_Frame%2027(1)(1)-p-500.png",
      heading: "Timesheet time tracking",
      paragraph:
        "Track time just as you are used to, but simpler Because you are tired of using unmanageable stacks of paper, excel templates, or complex apps week in week out.but simpler Because you are tired of using unmanageable stacks of paper, excel templates.",
    },
  ];
  return data.map((el) => (
    <Box
      // boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      borderRadius="20px"
      w="100%"
      h={"-webkit-fit-content"}
      bg={el.bg ? el.bg : "#EFFCF3"}
      alignItems={"center"}
    >
      <Box
        boxSizing="border-box"
        whiteSpace={"normal"}
        padding={"3.5"}
        textAlign="left"
      >
        {/* image  box*/}
        <Box margin="auto">
          <Image
            boxSize="300px"
            margin={"auto"}
            objectFit="cover"
            src={el.img}
            alt="image"
          />
        </Box>
        <Box>
          <Text
            fontWeight="600"
            fontSize={"3xl"}
            color="#375d75"
            textAlign="left"
          >
            {el.heading}
          </Text>
          <Text fontSize={"18px"} fontWeight={"600"} textAlign={"left"}>
            {el.paragraph}
          </Text>
        </Box>
      </Box>
    </Box>
  ));
};

export default UcGridbox;
