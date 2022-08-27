import React from "react";
import { Box, Button, Icon, HStack, Text, Flex, Input } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { BiCalendarWeek } from "react-icons/bi";
import { RiUser3Line } from "react-icons/ri";
import { RiTimerLine } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";
import TrackProjectInp from "./TrackProjectInp";
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdCopy } from "react-icons/io";
const TrackProject = () => {
  let x = [1, 2, 3, 4, 5];
  return (
    <>
      <Flex justifyContent={"flex-end"}>
        <Box padding={4} boxSizing="border-box" w="80%">
          {/* Heading  */}
          <Box>
            <Text textAlign={"left"} fontSize={"50px"} fontWeight="medium">
              Weekly timesheet
            </Text>
          </Box>
          <Flex justifyContent={"space-between"}>
            {/* below heading part  */}
            <HStack padding={3} spacing={8} mt={"20px"}>
              {/* week flex-box */}
              <Flex flexDirection={"row"}>
                <Button variant="outline">
                  {" "}
                  <ArrowBackIcon w={6} h={6} />{" "}
                </Button>
                <Flex
                  flexDirection={"row"}
                  textAlign="center"
                  w="350px"
                  boxSizing="border-box"
                  padding={1}
                  border={"1px solid #DEE2E6"}
                >
                  <Icon w={7} h={7} as={BiCalendarWeek}></Icon>
                  <Text fontSize={18} fontWeight="medium">
                    This week, 22 aug - 28 aug 2022
                  </Text>
                </Flex>
                <Button variant="outline">
                  <ArrowForwardIcon w={6} h={6} />
                </Button>
              </Flex>
              {/* profile flex box  */}

              <Box
                boxSizing="border-box"
                padding={1}
                border={"1px solid #DEE2E6"}
                w="300px"
              >
                <Flex gap={5} justifyContent={"flex-start"}>
                  <Icon w={7} h={7} as={RiUser3Line}></Icon>

                  <Text fontSize={18} fontWeight="normal">
                    John Doe
                  </Text>
                </Flex>
              </Box>
            </HStack>
            <HStack>
              {/* Buttons section  */}
              <Button bg={"#BBDEF5"} size={"lg"}>
                <Icon w={7} h={7} as={RiTimerLine}></Icon>
                <Text fontSize={18}>Timer</Text>
              </Button>
              <Button bg={"#BBDEF5"} size={"lg"}>
                <Icon w={7} h={7} as={AiOutlineSetting}></Icon>
              </Button>
            </HStack>
          </Flex>
          <hr />
          <br />
          {/* 2nd part  */}
          <HStack spacing="10px">
            {/* client & project box  */}
            <Box w="500px">
              <Text
                textAlign={"start"}
                color={"#687481"}
                fontSize={"x-large"}
                fontWeight="bold"
              >
                Client & Project
              </Text>
            </Box>

            {/* task box */}
            <Box w="250px">
              <Text
                textAlign={"start"}
                color={"#687481"}
                fontSize={"x-large"}
                fontWeight="bold"
              >
                Task
              </Text>
            </Box>

            {/* date flex box  */}
            <Flex w="600px" flexDirection={"row"}>
              <Box w="20%">
                <Text textAlign={"center"} color="grey">
                  Mon, 22 Aug
                </Text>
                <Text
                  textAlign={"end"}
                  color={"#687481"}
                  fontSize={"x-large"}
                  fontWeight="bold"
                >
                  0.00
                </Text>
              </Box>

              <Box w="20%">
                <Text textAlign={"center"} color="grey">
                  Tue, 23 Aug
                </Text>
                <Text
                  textAlign={"end"}
                  color={"#687481"}
                  fontSize={"x-large"}
                  fontWeight="bold"
                >
                  0.00
                </Text>
              </Box>

              <Box w="20%">
                <Text textAlign={"center"} color="grey">
                  Wed, 24 Aug
                </Text>
                <Text
                  textAlign={"end"}
                  color={"#687481"}
                  fontSize={"x-large"}
                  fontWeight="bold"
                >
                  0.00
                </Text>
              </Box>

              <Box w="20%">
                <Text textAlign={"center"} color="grey">
                  Thu, 25 Aug
                </Text>
                <Text
                  textAlign={"end"}
                  color={"#687481"}
                  fontSize={"x-large"}
                  fontWeight="bold"
                >
                  0.00
                </Text>
              </Box>

              <Box w="20%">
                <Text textAlign={"center"} color="grey">
                  Fri, 26 Aug
                </Text>
                <Text
                  textAlign={"end"}
                  color={"#687481"}
                  fontSize={"x-large"}
                  fontWeight="bold"
                >
                  0.00
                </Text>
              </Box>
            </Flex>

            {/* total budget box */}
            <Box w="300px">
              <Text
                textAlign={"center"}
                color={"#687481"}
                fontSize={"x-large"}
                fontWeight="bold"
              >
                Total Budget
              </Text>
              <Flex justifyContent={"center"} gap={"4"}>
                <Text
                  textAlign={"center"}
                  color={"#687481"}
                  fontSize={"x-large"}
                  fontWeight="bold"
                >
                  0:00
                </Text>
                <Text color="grey" textAlign={"center"}>
                  Budget spent
                </Text>
              </Flex>
            </Box>
          </HStack>
          <br />
          <hr />

          {x.map((el) => (
            <TrackProjectInp />
          ))}
          <br />
          <hr />
          <HStack mt="20px" spacing="10px">
            {/* client & project box  */}
            <Flex flexDirection={"row"} gap={3} color="#68ADD2" w="375px">
              <Icon h="7" w="7" as={AiOutlinePlus}></Icon>
              <Text fontSize={"20px"} fontWeight="medium">
                Add timesheet row
              </Text>
            </Flex>

            <Flex flexDirection={"row"} gap={3} color="#68ADD2" w="375px">
              <Icon h="7" w="7" as={IoMdCopy}></Icon>
              <Text fontSize={"20px"} fontWeight="medium">
                Copy previous week
              </Text>
            </Flex>

            {/* date flex box  */}
            <Flex
              w="600px"
              justifyContent={"space-between"}
              flexDirection={"row"}
            >
              <Box w="19%">
                <Text
                  textAlign={"center"}
                  color={"#687481"}
                  fontSize={"large"}
                  fontWeight="bold"
                >
                  0:00
                </Text>
              </Box>

              <Box w="19%">
                <Text
                  textAlign={"center"}
                  color={"#687481"}
                  fontSize={"large"}
                  fontWeight="bold"
                >
                  0:00
                </Text>
              </Box>

              <Box w="19%">
                <Text
                  textAlign={"center"}
                  color={"#687481"}
                  fontSize={"large"}
                  fontWeight="bold"
                >
                  0:00
                </Text>
              </Box>

              <Box w="19%">
                <Text
                  textAlign={"center"}
                  color={"#687481"}
                  fontSize={"large"}
                  fontWeight="bold"
                >
                  0:00
                </Text>
              </Box>

              <Box w="19%">
                <Text
                  textAlign={"center"}
                  color={"#687481"}
                  fontSize={"large"}
                  fontWeight="bold"
                >
                  0:00
                </Text>
              </Box>
            </Flex>
            <Box padding={1} alignItems={"center"}></Box>
            {/* total budget box */}
            <Box w="250px">
              <Text
                textAlign={"center"}
                color={"#687481"}
                fontSize={"large"}
                fontWeight="bold"
              >
                0:00
              </Text>
            </Box>
            <hr />
          </HStack>
        </Box>
      </Flex>
    </>
  );
};

export default TrackProject;
