import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { RiTimerLine } from "react-icons/ri";
import Sidebar from "../Sidebar";
import DatePicker from "react-multi-date-picker";
import InputIcon from "react-multi-date-picker/components/input_icon";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineHome,
  AiOutlineStar,
} from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { FcTodoList } from "react-icons/fc";
import StopWatch from "./Stopwatch";
import TrackList from "../project/TrackList";

const Track = () => {
  const [value, setValue] = useState(new Date());
  const convert = () => {
    let today = new Date();
    let [day, month, date] = (today + "").split(" ");

    return day + ", " + month + " " + date;
  };

  return (
    <Flex>
      <Box w="15%">
        <Sidebar />
      </Box>
      <Box width="85%">
        <VStack w="100%" gap="20px">
          <Flex
            align="center"
            justify="space-around"
            w="100%"
            mt="2rem"
            gap="1rem"
          >
            {" "}
            <Flex justifyContent="space-around">
              <Text fontSize="30px" color="#375D75">
                {convert()}
              </Text>
              <Flex gap="1rem" align="center">
                <AiOutlineArrowLeft size="25px" />
                <AiOutlineArrowRight size="25px" />
                <AiOutlineHome size="20px" />
              </Flex>
            </Flex>
            <Box>
              <StopWatch />
            </Box>
          </Flex>
          <Flex gap="35%" mt="2rem" justify="center" w="100%">
            <Box>
              <Button color="gray.400">+ ADD TIME LOG</Button>
            </Box>
            <Flex gap="1rem">
              <Button fontSize="22px">
                <MdDateRange />
              </Button>
              <Button fontSize="22px">
                <FaBars />
              </Button>
              <Button fontSize="22px">
                <AiOutlineStar />
              </Button>
              <Button fontSize="22px">
                <FcTodoList />
              </Button>
            </Flex>
          </Flex>
          <Divider />
          <TrackList />
        </VStack>
      </Box>
    </Flex>
  );
};

export default Track;
