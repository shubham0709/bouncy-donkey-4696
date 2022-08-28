import { Box, Divider, Link, Text } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { getProjectsAPI } from "./functions";
import Sidebar from "../../pages/Sidebar";
import { Flex } from "@chakra-ui/react";
import StopWatch from "./Stopwatch";
import { AiFillExclamationCircle } from "react-icons/ai";

const TrackList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjectsAPI()
      .then((res) => {
        setProjects(res);
        console.log(projects);
      })
      .then((err) => {});
  }, []);

  return (
    <Box w="90%">
      <>
        <Text align="left" w="70%" m="auto" color="gray.400">
          {projects.length == 0 ? "No time tracked for this day" : ""}
          {projects.length == 0 ? (
            <Link color="blue.400">start a new time log</Link>
          ) : (
            ""
          )}
        </Text>
      </>
      <TableContainer m="auto" ml="2rem" w="100%">
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Project</Th>
              <Th>Description</Th>
              <Th>status</Th>
              <Th>Time</Th>
            </Tr>
          </Thead>
          <Tbody>
            {projects.length &&
              projects.map((elem) => (
                <Tr border="1px solid black">
                  <Td fontWeight="bold">{elem.projectName}</Td>
                  <Td>{elem.description.slice(0, 20)}</Td>
                  <Td>{elem.status}</Td>
                  <Td>
                    <StopWatch />
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default TrackList;
