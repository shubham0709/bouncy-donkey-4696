import React from "react";
import {
  AspectRatio,
  Box,
  Button,

  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HowItWorks = () => {
  return (
    <>
    <Navbar/>
      <Box fontFamily={"Avenirnextltpro, sans-serif"}>
        <Box w="80%" margin={"auto"}>
          <Heading
            as="h1"
            size="4xl"
            fontWeight="normal"
            fontFamily="Avenirnextltpro, sans-serif"
            lineHeight="86px"
            color={"#212529"}
            mt="50px"
            mb="25px"
          >
            How it works
          </Heading>

          <Heading
            size="lg"
            fontSize="40px"
            color={"#375d75"}
            lineHeight="48px"
            mt="25px"
            mb="50px"
          >
            & why you should switch to My Hours
          </Heading>
          <Text
            color={"#375d75"}
            textAlign="revert"
            w="90%"
            fontSize={"28px"}
            margin={"auto"}
            fontFamily={'"Avenir Next", sans-serif'}
            mt="25px"
            mb="25px"
          >
            Time tracking was a pain. We fixed it and made time tracking worth
            the effort. My Hours is easy to use and gets the most out of your
            data with powerful reporting. Teams that use My Hours are more
            productive, efficient and organized.
          </Text>
          <Button
            colorScheme="blue"
            width={"262px"}
            height="62px"
            fontFamily={'"Avenir Next",sans-serif'}
            mt="25px"
            mb="80px"
          >
            Get Started-Its Free
          </Button>
        </Box>

        <AspectRatio
          maxW="916px"
          ratio={1}
          margin="auto"
          mt="50px"
          height="573px"
          mb={"100px"}
        >
          <iframe
            width="916px"
            margin="auto"
            src="https://www.youtube.com/embed/VpMysclixyQ"
            title="My Hours Intro video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </AspectRatio>
        <Box>
          <Heading
            size="lg"
            fontSize="40px"
            lineHeight="48px"
            mt="25px"
            mb="25px"
          >
            Organize your work with projects and tasks
          </Heading>
          <Text
            w="60%"
            margin={"auto"}
            fontFamily={'"Avenir Next", sans-serif'}
            mb="25px"
          >
            Breaking down your work into projects and tasks is done with a few
            keystrokes. Prioritize tasks, add details and assign them to your
            team to complete. Set up an estimated budget on a project or task
            level.
          </Text>
        </Box>

        <Box
          width={"940px"}
          height={"628 px"}
          margin="auto"
          marginBottom={"50px"}
        >
          <Image
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd7198fa6df4249877e6d5b_HIW-1(1).png"
            alt="Dan Abramov"
          />
        </Box>
        <Box>
          <Heading
            size="lg"
            fontSize="40px"
            lineHeight="48px"
            mt="25px"
            mb="25px"
          >
            Set flexible billable rates and manage rate changes
          </Heading>
          <Text
            w="60%"
            margin={"auto"}
            fontFamily={'"Avenir Next", sans-serif'}
            marginBottom="25px"
          >
            Every client, project, task and team member can be billed with a
            custom rate, but with smart defaults. And, when rates change, you
            decide how it applies to your past work.
          </Text>
        </Box>

        <Box
          width={"940px"}
          height={"628 px"}
          margin="auto"
          marginBottom={"50px"}
        >
          <Image
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/60c3106b6d15b4476d545c47_Project%20billing.png"
            alt="Dan Abramov"
          />
        </Box>
        <Box>
          <Heading
            size="lg"
            fontSize="40px"
            lineHeight="48px"
            mt="25px"
            mb="25px"
          >
            Track your time working with all the details
          </Heading>
          <Text
            w="60%"
            margin={"auto"}
            fontFamily={'"Avenir Next", sans-serif'}
            mb="25px"
          >
            Tracking work time is more than a few fields. Add styled notes to
            your logs, tag with custom keywords, attach files and enter
            expenses. With keyboard shortcuts, you can do it in no-time.
          </Text>
        </Box>

        <Box
          width={"940px"}
          height={"628 px"}
          margin="auto"
          marginBottom={"50px"}
        >
          <Image
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/61693180d0c70441fdcc29cd_Timesheet%20with%20timer-p-1080.png"
            alt="Dan Abramov"
          />
        </Box>
        <Box>
          <Heading
            size="lg"
            fontSize="40px"
            lineHeight="48px"
            mt="25px"
            mb="25px"
          >
            Dazzle your clients with custom reports
          </Heading>
          <Text
            w="60%"
            margin={"auto"}
            fontFamily={'"Avenir Next", sans-serif'}
            mb="25px"
          >
            No more one-style-fits-all reports. Go beyond filters and set up
            reports the way you or your clients want them, without having to
            retreat back to Excel.
          </Text>
        </Box>

        <Box
          width={"940px"}
          height={"628 px"}
          margin="auto"
          marginBottom={"50px"}
        >
          <Image
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd71990c1a06b2e03f1be70_HIW-4(1).png"
            alt="Dan Abramov"
          />
        </Box>
        <Box>
          <Heading
            size="lg"
            fontSize="40px"
            lineHeight="48px"
            mt="25px"
            mb="25px"
          >
            Look at the time spent from every angle
          </Heading>
          <Text
            w="60%"
            margin={"auto"}
            fontFamily={'"Avenir Next", sans-serif'}
            mb="25px"
          >
            Fancy dashboards are not enough and with My Hours you can calculate
            your profit, generate real-time pivot tables or download a simple
            weekly timesheet.
          </Text>
        </Box>

        <Box
          width={"940px"}
          height={"628 px"}
          margin="auto"
          marginBottom={"50px"}
        >
          <Image
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/61692c9dbe4680c6916e960b_time-analytics.png"
            alt="Dan Abramov"
          />
        </Box>
        <Box>
          <Heading
            size="lg"
            fontSize="40px"
            lineHeight="48px"
            margin={"auto"}
            mt="25px"
            mb="25px"
          >
            Approve or comment on your team’s time logs
          </Heading>
          <Text
            w="60%"
            margin={"auto"}
            fontFamily={'"Avenir Next", sans-serif'}
            marginBottom="25px"
            textAlign={"justify"}
          >
            Going through every timesheet is a hassle. Select a few projects or
            team members that might need a careful inspection, while other time
            logs do not need explicit approval.
          </Text>
        </Box>

        <Box
          width={"940px"}
          height={"628 px"}
          margin="auto"
          marginBottom={"50px"}
        >
          <Image
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/61692ce83988430ca662abb6_Approve%20timesheets-p-1080.png"
            alt="Dan Abramov"
          />
        </Box>
        <HStack w={"80%"} spacing="20px">
          <Box
            width={"440px"}
            height={"628 px"}
            margin="auto"
            marginBottom={"50px"}
          >
            <Image
              src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc4e6bd377fbe34a0cc7a0f_HIW-7-p-500.png"
              alt="Dan Abramov"
            />
          </Box>
          <Box width={"50%"} >
            <Heading
              size="lg"
              width={"80%"}
              // fontSize="40px"
              // lineHeight="48px"
              margin={"auto"}
              // mt="25px"
              // mb="25px"
            >
              Keep clients in the loop with scheduled email reports
            </Heading>
            <Text
              w="80%"
              margin={"auto"}
              fontFamily={'"Avenir Next", sans-serif'}
              marginBottom="25px"
            >
              Setting and downloading reports each month takes precious time.
              Save your report settings and have My Hours send it to you or your
              clients directly every period.
            </Text>
          </Box>
        </HStack>
        <HStack w={"80%"} spacing="20px">
          <Box
            width={"440px"}
            height={"628 px"}
            margin="auto"
            marginBottom={"50px"}
          >
            <Image
              src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc4e6d0c755c679d71eda9f_HIW-8-p-500.png"
              alt="Dan Abramov"
            />
          </Box>
          <Box width={"50%"} >
            <Heading
              size="lg"
              width={"80%"}
              // fontSize="40px"
              // lineHeight="48px"
              margin={"auto"}
              // mt="25px"
              // mb="25px"
            >
              Create invoices straight from your tracked hours
            </Heading>
            <Text
              w="80%"
              margin={"auto"}
              fontFamily={'"Avenir Next", sans-serif'}
              marginBottom="25px"
            >
              No need for an additional tool that handles the invoicing.
              Calculate the billable amount for each client and generate a
              numbered invoice that can be sent via email straight away.
            </Text>
          </Box>
        </HStack>
        <HStack w={"80%"} spacing="20px">
          <Box
            width={"440px"}
            height={"628 px"}
            margin="auto"
            marginBottom={"50px"}
          >
            <Image
              src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc913df96a46f4b42ee4264_Roles-p-800.png"
              alt="Dan Abramov"
            />
          </Box>
          <Box width={"50%"} >
            <Heading
              size="lg"
              width={"80%"}
              // fontSize="40px"
              // lineHeight="48px"
              margin={"auto"}
              // mt="25px"
              // mb="25px"
            >
              Flexible, but simple access roles
            </Heading>
            <Text
              w="80%"
              margin={"auto"}
              fontFamily={'"Avenir Next", sans-serif'}
              marginBottom="25px"
            >
              With a simple 3-role system, you’ll always know who sees what. You
              can hide costs and billable amounts from anyone, except account
              administrators.
            </Text>
          </Box>
        </HStack>
        <HStack w={"80%"} spacing="20px">
          <Box
            width={"440px"}
            height={"628 px"}
            margin="auto"
            marginBottom={"50px"}
          >
            <Image
              src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc91420b5951fed1bb2a187_Chickens(1).png"
              alt="Dan Abramov"
            />
          </Box>
          <Box width={"50%"} >
            <Heading
              size="lg"
              width={"80%"}
              // fontSize="40px"
              // lineHeight="48px"
              margin={"auto"}
              // mt="25px"
              // mb="25px"
            >
              Count your chickens and calculate your costs
            </Heading>
            <Text
              w="80%"
              margin={"auto"}
              fontFamily={'"Avenir Next", sans-serif'}
              marginBottom="25px"
            >
              On top of billable rates, teams can add labor costs and expenses.
              Monitor your project costs with a (monthly) budget and calculate
              your profits or losses.
            </Text>
          </Box>
        </HStack>
        <HStack w={"80%"} spacing="20px">
          <Box width={"50%"}>
            <Heading
              size="lg"
              width={"80%"}
              // fontSize="40px"
              // lineHeight="48px"
              margin={"auto"}
              // mt="25px"
              // mb="25px"
            >
              Sync your data with more than a 1000 tools
            </Heading>
            <Text
              w="80%"
              margin={"auto"}
              fontFamily={'"Avenir Next", sans-serif'}
              marginBottom="25px"
            >
              Transfer clients, projects and tasks from Quickbooks and other
              solutions via Zapier. Documented API enables tech-savvy folks to
              build their own integrations.
            </Text>
            <Image
              src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc9145d6e47e935f0570ff3_Integrations-p-500.png"
              alt="Dan Abramov"
            />
          </Box>
          <Box width={"50%"}>
            <Heading
              size="lg"
              width={"80%"}
              // fontSize="40px"
              // lineHeight="48px"
              margin={"auto"}
              // mt="25px"
              // mb="25px"
            >
              Track time on the go with a mobile app
            </Heading>
            <Text
              w="80%"
              margin={"auto"}
              fontFamily={'"Avenir Next", sans-serif'}
              marginBottom="25px"
            >
              Besides tracking time, add new projects, manage tasks and view
              reports - all through our mobile apps. Both iOS and Android are
              supported.
            </Text>
            <Image
              src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd73713f912e4498947d1a3_HIW-mobile%20(1)(1)-p-500.png"
              alt="Dan Abramov"
            />
          </Box>
        </HStack>
      </Box>
      <Footer/>
    </>
  )
};

export default HowItWorks;
