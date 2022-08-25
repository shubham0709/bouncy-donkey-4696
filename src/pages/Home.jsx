import { Box, Button, Flex, Grid, Image, Link, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./css/home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getProjectsAPI } from "./project/functions";

const Home = () => {
  const state = useSelector((state) => state);

  return (
    <>
      <Navbar />
      <Box w="80%" m="auto">
        <Box w="100%" m="auto">
          <Text
            mt="100px"
            fontSize="70px"
            fontWeight="lighter"
            color="rgb(56, 56, 56)"
            mb="50px"
          >
            <strong>Organize</strong> projects, <strong>Track</strong> time and{" "}
            <strong>Report</strong> your work
          </Text>
        </Box>
        <Text mb="80px" fontSize="30px" color="#194f74">
          Coordinate projects and tasks. Track your work hours and create
          awesome-looking reports for clients.{" "}
          <strong>All-in-one free time tracking software.</strong>
        </Text>
        <Button id="btn1">
          <a href="signup.html">Get Started - It's Free</a>
        </Button>
        <Box w="90%" m="auto" mt="40px">
          <Image
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd337b26121202b5bfb96d7_OriginalSize(1)-p-1080.png"
            alt=""
          />
        </Box>
        <Text fontSize="30px" mt="80px">
          Trusted by more than <strong>100.000 businesses</strong> worldwide
        </Text>
        <Flex m="auto" mt="40px" w="60%" align="center" justify="space-between">
          <Image
            w="20%"
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/600008d9399ba39d2583a755_Capterra-4-7.png"
            alt=""
          />
          <Image
            w="20%"
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/600008d9b4eb5ca178cc55df_g2-4-7.png"
            alt=""
          />
          <Image
            w="20%"
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/600008d9487a040f81a5d142_MS-Gold.png"
            alt=""
          />
        </Flex>
        <Flex
          m="auto"
          mt="40px"
          w="100%"
          align="center"
          justify="space-between"
        >
          <Image
            w="10%"
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079c0b6e21682628f281_typefox%201.png"
            alt=""
          />
          <Image
            w="10%"
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079cd7ceecebfc3f5519_kpmg_logo%201.png"
            alt=""
          />
          <Image
            w="10%"
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079dfd768757fcf2ea64_logo-Impartner-1.png"
            alt=""
          />
          <Image
            w="10%"
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079d3f7265588b6d1dbe_semaphore-logo.png"
            alt=""
          />
          <Image
            w="10%"
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079d09b818dd84138753_aurora-logo-horiz-white%201.png"
            alt=""
          />
          <Image
            w="10%"
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/6000079d14844ef7226bb10a_logo_heading.png"
            alt=""
          />
        </Flex>
        <Flex justify="space-between" mt="150px">
          <Box w="35%" mt="10px" textAlign="left">
            <Text fontSize="30px" color="#375D75" fontWeight="bold">
              {" "}
              Coordinate your team,
              <br />
              projects and tasks
            </Text>
            <Text fontSize="20px" mt="20px">
              Get out of your inbox mess: create projects, assign tasks and
              write-down or attach details. Track project profitability with
              hourly rates. Set up budgets and get reminded when you’re close.
            </Text>
            <Text fontStyle="italic" color="#375D75" mt="20px">
              “Excellent time tracker to manage your tasks! It changed the way I
              organize myself, I'm more productive since I used it!” - Guadalupe
              G., Art Director
            </Text>
          </Box>
          <Box w="50%">
            <Image
              w="100%"
              src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd7199052d14ec5e2a6c813_HP-1.png"
              alt=""
            />
          </Box>
        </Flex>
        <Flex justify="space-between" mt="150px">
          <Box w="50%">
            <Image
              w="100%"
              src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd71991bd83c222217cac17_HP-2.png"
              alt=""
            />
          </Box>
          <Box w="35%" mt="10px" textAlign="left">
            <Text fontSize="30px" color="#375D75" fontWeight="bold">
              {" "}
              Track your work hours,
              <br />
              expenses and more
            </Text>
            <Text fontSize="20px" mt="20px">
              With My Hours you can track all your work. Add a detailed
              description to your time logs and expenses. We know time tracking
              is a hassle, so we’ve designed it to be super fast.
            </Text>
            <Text fontStyle="italic" color="#375D75" mt="20px">
              “A wonderful product. We no longer have to use multiple programs
              to track time, projects, PTO, etc.” - Katie L., Office Coordinator
            </Text>
          </Box>
        </Flex>
        <Flex justify="space-between" mt="150px">
          <Box w="35%" mt="10px" textAlign="left">
            <Text fontSize="30px" color="#375D75" fontWeight="bold">
              {" "}
              Create great-looking <br /> reports
            </Text>
            <Text fontSize="20px" mt="20px">
              Turn your work into dazzling reports with confidence. From
              Dashboard to more advanced time analytics. No need for extra
              spreadsheet work, even though you can export your data.
            </Text>
            <Text fontStyle="italic" color="#375D75" mt="20px">
              “My Hours is a super easy to use time tracker and great for
              sending hourly reports to clients for billable work” - Erin A.
              Business owner
            </Text>
          </Box>
          <Box w="50%">
            <Image
              w="100%"
              src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd71991a6df42a49f7e6d5c_HP-3.png"
              alt=""
            />
          </Box>
        </Flex>
        <Text
          color="#375D75"
          fontSize="25px"
          mt="7rem"
          textDecoration="underline"
          fontWeight="500"
        >
          See how My Hours works in detail {"->"}
        </Text>
        <Text fontSize="35px" mt="5rem" fontWeight="bold" color="#375D75">
          A flexible tool for all types of organizations
        </Text>
        <Flex
          width="80%"
          gap="30px"
          justify="space-between"
          m="auto"
          mt="5rem"
          color="#375D75"
        >
          <Box w="25%">
            <Text fontSize="30px">Billing</Text>
            <h3>We need to bill our clients with flexible hourly rates.</h3>
            <a href="extra.html" id="a2">
              Here's how...
            </a>
          </Box>
          <Box w="25%">
            <Text fontSize="30px">Profitability</Text>
            <h3>
              We would like to calculate the profitability of our projects.
            </h3>
            <a href="extra.html" id="a2">
              Here's how...
            </a>
          </Box>
          <Box w="25%">
            <Text fontSize="30px">Time tracking</Text>
            <h3>We want to track time on projects and tasks.</h3>
            <a href="extra.html" id="a2">
              Here's how...
            </a>
          </Box>
        </Flex>
        <Flex
          color="#375D75"
          width="80%"
          gap="30px"
          justify="space-between"
          m="auto"
          mt="5rem"
        >
          <Box w="25%">
            <Text fontSize="30px">Attedance</Text>
            <h3>We need to track employee attendance/absence and tasks.</h3>
            <a href="extra.html" id="a2">
              Here's how...
            </a>
          </Box>
          <Box w="25%">
            <Text fontSize="30px">Client Reporting</Text>
            <h3>I need to report the time spent to clients or invoice them.</h3>
            <a href="extra.html" id="a2">
              Here's how...
            </a>
          </Box>
          <Box w="25%">
            <Text fontSize="20px" style={{ marginTop: 60 }}>
              <a href="extra.html" id="a3">
                Find more use cases
              </a>{" "}
              →
            </Text>
          </Box>
        </Flex>
        <Text fontSize="40px" mt="5rem" fontWeight="500" color="#375D75">
          My Hours has changed the way our customers work
        </Text>
        <Text fontSize="20px" mt="5rem">
          We've helped <u>250.000+ people</u> track their work{" "}
          <u>since 2002.</u>
        </Text>
        <Text fontSize="20px">
          {" "}
          Our software <u>does not include employee monitoring</u> and never
          will.
        </Text>
        <Grid mt="5rem" templateColumns="repeat(3, 1fr)" gap="9%">
          <Box>
            <Text>
              "Easy tracking of billable hours across various projects.{" "}
              <Text
                bgGradient="linear(to-r, green.200, green.500)"
                borderRadius="1em 0 1em 0"
              >
                Makes time tracking for different tasks simple.
              </Text>
              "
            </Text>
            <Text as="cite" fontSize="20px" fontWeight="bold">
              - Paul H., Business Owner
            </Text>
            <Text>
              "Ease of use, simplicity, streamlined,{" "}
              <Text
                bgGradient="linear(to-r, green.200, green.500)"
                borderRadius="1em 0 1em 0"
              >
                it really helped me get my hour tracking in order
              </Text>
              . No negatives for the purpose and scope for which I am using the
              software."
            </Text>
            <Text as="cite" fontSize="20px" fontWeight="bold">
              - Arieh F., CFO
            </Text>
            <Text>
              <Text
                bgGradient="linear(to-r, green.200, green.500)"
                borderRadius="1em 0 1em 0"
              >
                "Easy to use for my team members who are remote but hourly
              </Text>
              . My House provides a simple and easy way to record, track and
              manage activity."
            </Text>
            <Text as="cite" fontSize="20px" fontWeight="bold">
              - Thomas S., Head of Customer Success
            </Text>
          </Box>
          <Box>
            <Text>
              "My Hours is great for keeping track of time spent on different
              projects. It makes completing my mandatory timesheets at the end
              of the week{" "}
              <Text
                bgGradient="linear(to-r, green.200, green.500)"
                borderRadius="1em 0 1em 0"
              >
                WAY FASTER
              </Text>
              ."
            </Text>
            <Text as="cite" fontSize="20px" fontWeight="bold">
              - Michael B., Manager
            </Text>
            <Text>
              "The software is very easy to set up, and you can start using it
              right away to track your time,{" "}
              <Text
                bgGradient="linear(to-r, green.200, green.500)"
                borderRadius="1em 0 1em 0"
              >
                assigning different hourly rates for different types of work.
              </Text>
              "
            </Text>
            <Text as="cite" fontSize="20px" fontWeight="bold">
              - Naomi S., Marketing Manager
            </Text>
            <Text>
              "I really love this time tracking software.{" "}
              <Text
                bgGradient="linear(to-r, green.200, green.500)"
                borderRadius="1em 0 1em 0"
              >
                It keeps track of all my hours and is really easy to use.
              </Text>{" "}
              I would definitely recommend this software. There is nothing that
              I don't like about this software."
            </Text>
            <Text as="cite" fontSize="20px" fontWeight="bold">
              - Christina C., Paralegal
            </Text>
          </Box>
          <Box>
            <Text>
              "I've enjoyed using My Hours, and I use it every day.{" "}
              <Text
                bgGradient="linear(to-r, green.200, green.500)"
                borderRadius="1em 0 1em 0"
              >
                Great tool for tracking my time!
              </Text>
              Great tool for tracking my time!"
            </Text>
            <Text as="cite" fontSize="20px" fontWeight="bold">
              {" "}
              - Cody H., Engineer
            </Text>
            <Text>
              "Simple to use, perfect for the price,{" "}
              <Text
                bgGradient="linear(to-r, green.200, green.500)"
                borderRadius="1em 0 1em 0"
              >
                genuinely the best hour tracker I've used yet.
              </Text>
              "
            </Text>
            <Text as="cite" fontSize="20px" fontWeight="bold">
              - Leah M., Engineer
            </Text>
            <Text>
              "This is the{" "}
              <Text
                bgGradient="linear(to-r, green.200, green.500)"
                borderRadius="1em 0 1em 0"
              >
                easiest-to-use software that
              </Text>{" "}
              I've found in terms of tracking hours and minutes for multiple
              projects."
            </Text>
            <Text as="cite" fontSize="20px" fontWeight="bold">
              - Michelle W., Virtual Assistant
            </Text>
            <Text>
              "I love that I can track my hours and use it to{" "}
              <Text
                bgGradient="linear(to-r, green.200, green.500)"
                borderRadius="1em 0 1em 0"
              >
                generate meaningful reports
              </Text>
              generate meaningful reports to measure time spent. It's intuitive,
              easy-to-use, and highly customizable."
            </Text>
            <Text as="cite" fontSize="20px" fontWeight="bold">
              - Kristen B., Bussines Owner
            </Text>
          </Box>
        </Grid>
        <Text color="#2775a9" fontSize="27" mb="100" mt="5rem">
          <a href="/my hours/review.html" id="a3">
            Read more reviews
          </a>{" "}
          →
        </Text>
        <h1 id="head">Have questions? We're here</h1>
        <Box w="68%" m="auto">
          <Text fontSize="22">
            It's always nice to have someone to talk to when facing new
            software. Get in touch and we'll try our best to help you out.
          </Text>
        </Box>
        <Box mt="2rem" mb="100" id="block 8">
          <a
            href="supportpage.html"
            id="a3"
            style={{ marginRight: 20, fontWeight: "bold" }}
          >
            ✓ EMAIL &amp; LIVE CHAT
          </a>
          <a
            href="supportpage.html"
            id="a3"
            style={{ marginRight: 20, fontWeight: "bold" }}
          >
            ✓ TRAINING FOR TEAMS
          </a>
          <a
            href="supportpage.html"
            id="a3"
            style={{ marginRight: 20, fontWeight: "bold" }}
          >
            ✓ KNOWLEDGE BASE
          </a>
        </Box>
        {
          // display: flex;
          // justify-content: space-between;
          // margin-bottom: 110px;
        }
        <Flex justify="space-around" mb="5rem">
          <Box bg="#F8FAFB" w="58%">
            <Box m="auto" w="60%" bg="#8fafb" mt="1rem">
              <Text mt="30px" color="#375D75" fontSize="40px" fontWeight="bold">
                Waste no more time, jump right in!
              </Text>
            </Box>
            <Button
              w="50%"
              fontSize="20px"
              height="60px"
              bg="#3b8fc2"
              cursor="pointer"
              borderRadius="5px"
              border="none"
              mt="3rem"
            >
              <Link color="white">Get Started - It's Free</Link>
            </Button>
            <Text w="80%" color="#375D75" m="auto" mt="1rem" mb="2rem">
              My Hours is Free to use for teams of any size.
              <a
                style={{ color: "black", textDecoration: "underline" }}
                href=""
              >
                Pro paid plan
              </a>{" "}
              comes with additional features like invoicing, admin controls and
              priority support.
            </Text>
          </Box>
          <Box w="38%" bg="#FAF9F7">
            <Text
              w="80%"
              m="auto"
              textAlign="left"
              fontSize="30px"
              mt="30px"
              mb="35px"
            >
              Need more info? Get a product demo.
            </Text>
            <Button border="1px solid black" bg="white" mb="3rem">
              <Link color="black">Talk to our Team</Link>
            </Button>
            <Text>
              Teams of 6+ are welcome to book a personalized demo to see how My
              Hours works in detail.
            </Text>
          </Box>
        </Flex>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
