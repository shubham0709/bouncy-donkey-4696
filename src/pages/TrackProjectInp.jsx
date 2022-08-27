import { Box, Flex, HStack, Icon, Input, Text } from "@chakra-ui/react";
import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
const TrackProjectInp = () => {
  return (
    <>
      <HStack mt="20px" spacing="10px">
        {/* client & project box  */}
        <Box w="500px">
          <Input placeholder="Select/Create Project" />
        </Box>

        {/* task box */}
        <Box w="250px">
          <Input placeholder="Select/Create Task"></Input>
        </Box>

        {/* date flex box  */}
        <Flex w="600px" justifyContent={"space-between"} flexDirection={"row"}>
          <Box w="19%">
            <Input placeholder="hh:mm"></Input>
          </Box>

          <Box w="19%">
            <Input placeholder="hh:mm"></Input>
          </Box>

          <Box w="19%">
            <Input placeholder="hh:mm"></Input>
          </Box>

          <Box w="19%">
            <Input placeholder="hh:mm"></Input>
          </Box>

          <Box w="19%">
            <Input placeholder="hh:mm"></Input>
          </Box>
        </Flex>
        <Box padding={1} alignItems={"center"}>
          <Icon h={6} w={6} as={RiDeleteBinLine}></Icon>
        </Box>
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
    </>
  );
};

export default TrackProjectInp;
