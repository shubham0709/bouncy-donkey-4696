import {
  Box,
  Button,
  Flex,
  Input,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import {
  FaQuestionCircle,
  FaArchive,
  FaFileImport,
  FaEdit,
} from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { ImCheckmark, ImStack } from "react-icons/im";
import { getProjectsAPI, deleteSingleProjectAPI } from "./functions";
import { useNavigate } from "react-router-dom";
import { editSingleProjectAPI } from "./functions";
import Sidebar from "../Sidebar";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const getColor = (status) => {
    switch (status) {
      case "completed":
        return "green.100";
      case "progress":
        return "yellow.100";
      case "pending":
        return "red.100";
    }
  };

  const deleteHandler = (id) => {
    deleteSingleProjectAPI(id)
      .then((res) => {
        console.log(res);
        getProjectsAPI()
          .then((res) => {
            setProjects(res);
          })
          .then((err) => {
            console.log(err);
          });
      })
      .then((err) => console.log(err));
    return;
  };

  const editHandler = (elem) => {
    editSingleProjectAPI({ ...elem, status: "completed" })
      .then((res) => {
        console.log(res);
        getProjectsAPI()
          .then((res) => {
            setProjects(res);
            console.log(res);
          })
          .then((err) => {});
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProjectsAPI()
      .then((res) => {
        setProjects(res);
        console.log(res);
      })
      .then((err) => {});
  }, []);

  return (
    <Flex>
      <Box w="15%" bg="blue.200">
        <Sidebar />
      </Box>
      <Box w="80%" h="100vh" m="auto">
        <VStack p="1rem 2rem">
          <Flex align="center" w="100%" justify="space-between">
            <Flex gap="20px" align="center">
              <Text fontSize="40px">Projects</Text>
              <Text fontSize="20px">
                <FaQuestionCircle />
              </Text>
            </Flex>
            <Box>
              <Button
                bg="#3B8FC2"
                color="white"
                onClick={() => navigate("/newproject")}
              >
                <Flex align="center" gap="0.5rem">
                  <Text fontSize="30px">+</Text>
                  Add new project
                </Flex>
              </Button>
            </Box>
          </Flex>

          {/* jdbfkjs */}

          <Flex justify="space-between" w="100%" color="#3B8FC2">
            <Flex w="40%">
              <Input placeholder="search by project or client name" />
              <Button
                p="1rem 2rem"
                ml="1rem"
                bg="white"
                border="1px solid #3B8FC2"
              >
                {" "}
                <Text fontSize="20px" mr="1rem">
                  <FaArchive />
                </Text>
                Archive
              </Button>
            </Flex>
            <Flex gap="4rem">
              <Flex fontSize="20px" align="center" gap="0.5rem">
                <FaFileImport />
                Export
              </Flex>
              <Flex align="center">
                <Text fontSize="25px">
                  <ImStack />
                </Text>
                <Select placeholder="GroupBy:" border="none">
                  <option value="option1">Client</option>
                  <option value="option2">None</option>
                </Select>
              </Flex>
            </Flex>
          </Flex>

          {/* jskdjjbdhsb */}

          <Box w="100%">
            <TableContainer w="100%">
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Project Name</Th>
                    <Th>Client</Th>
                    <Th>Total Minutes</Th>
                    <Th>Billable Amount</Th>
                    <Th>Created</Th>
                    <Th>Status</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {projects?.length > 0 &&
                    projects.map((elem) => (
                      <Tr key={elem._id} bg={getColor(elem.status)}>
                        <Td
                          textDecoration="underline"
                          color="#3B8FC2"
                          cursor="pointer"
                          fontSize="20px"
                        >
                          {elem.projectName}
                        </Td>
                        <Td fontWeight="600" color="#989898">
                          {elem.client}
                        </Td>
                        <Td fontWeight="600" color="#989898">
                          {Math.ceil(
                            (Date.now() - new Date(elem.startDate)) /
                              (1000 * 60)
                          )}{" "}
                          minutes
                        </Td>
                        <Td fontWeight="600" color="#989898">
                          {Math.ceil(
                            (Date.now() - new Date(elem.startDate)) /
                              (1000 * 60 * 60)
                          ) * 109}
                        </Td>
                        <Td fontWeight="600" color="#989898">
                          {elem.startDate.slice(0, 15)}
                        </Td>
                        <Td fontWeight="600" color="#989898">
                          {elem.status}
                        </Td>
                        <Td fontWeight="600" color="#989898">
                          <Flex gap="0.7rem" cursor="pointer">
                            <FaEdit
                              onClick={() => navigate(`${elem._id}/edit`)}
                            />
                            <AiFillDelete
                              onClick={() => {
                                deleteHandler(elem._id);
                              }}
                            />
                            <ImCheckmark onClick={() => editHandler(elem)} />
                          </Flex>
                        </Td>
                      </Tr>
                    ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
};

export default ProjectList;
