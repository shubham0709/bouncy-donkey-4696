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
import React from "react";
import {
  FaQuestionCircle,
  FaArchive,
  FaFileImport,
  FaEdit,
} from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { ImCheckmark, ImStack } from "react-icons/im";

const ProjectList = () => {
  return (
    <Flex>
      <Box w="15%" h="100vh" bg="blue.200"></Box>
      <Box w="85%" h="100vh">
        <VStack p="1rem 2rem">
          <Flex align="center" w="100%" justify="space-between">
            <Flex gap="20px" align="center">
              <Text fontSize="40px">Projects</Text>
              <Text fontSize="20px">
                <FaQuestionCircle />
              </Text>
            </Flex>
            <Box>
              <Button bg="#3B8FC2" color="white">
                <Flex align="center" gap="0.5rem">
                  <Text fontSize="30px">+</Text>Add new project
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
                    <Th>Name</Th>
                    <Th>Client</Th>
                    <Th>Total hours</Th>
                    <Th>Billable Amount</Th>
                    <Th>Created</Th>
                    <Th>Status</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td color="#3B8FC2" fontSize="20px">
                      inches
                    </Td>
                    <Td fontWeight="600" color="#989898">
                      millimetres (mm)
                    </Td>
                    <Td fontWeight="600" color="#989898">
                      25.4
                    </Td>
                    <Td fontWeight="600" color="#989898">
                      inches
                    </Td>
                    <Td fontWeight="600" color="#989898">
                      millimetres (mm)
                    </Td>
                    <Td fontWeight="600" color="#989898">
                      25.4
                    </Td>
                    <Td fontWeight="600" color="#989898">
                      <Flex gap="0.7rem" cursor="pointer">
                        <FaEdit />
                        <AiFillDelete />
                        <ImCheckmark />
                      </Flex>
                    </Td>
                  </Tr>
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
