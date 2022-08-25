import {
  Box,
  Button,
  Flex,
  Input,
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
import { FaQuestionCircle, FaArchive, FaDownload } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { ImCheckmark, ImStack } from "react-icons/im";
import {
  getProjectsAPI,
  deleteSingleProjectAPI,
  getClientsAPI,
  deleteSingleClientAPI,
} from "./functions";
import { useNavigate } from "react-router-dom";
import { editSingleProjectAPI } from "./functions";

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();
  // const getColor = (status) => {
  //   switch (status) {
  //     case "completed":
  //       return "green.100";
  //     case "progress":
  //       return "yellow.100";
  //     case "pending":
  //       return "red.100";
  //   }
  // };

  const deleteHandler = (id) => {
    deleteSingleClientAPI(id)
      .then((res) => {
        console.log(res);
        getClientsAPI()
          .then((res) => {
            setClients(res);
            console.log(res);
          })
          .then((err) => {});
      })
      .then((err) => console.log(err));
    return;
  };

  useEffect(() => {
    getClientsAPI()
      .then((res) => {
        setClients(res);
        console.log(res);
      })
      .then((err) => {});
  }, []);

  function getColor(i) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let a = (i % 10) + 1;
    // let color = "rgb" + "(" + 230 + "," + 183 + "," + 202 + ",0." + a + ")";
    let color = "rgb" + "(" + 59 + "," + 80 + "," + 93 + ",0." + a + ")";

    // let color = rgb(230, 183, 202, (i % 10) + 1);
    console.log(color);
    return color;
  }
  // return <Box>SHUBHAM</Box>;

  return (
    <Flex>
      <Box w="15%" h="100vh" bg="blue.200"></Box>
      <Box w="85%" h="100vh">
        <VStack p="1rem 2rem">
          <Flex align="center" w="100%" justify="space-between">
            <Flex gap="20px" align="center">
              <Text fontSize="40px">Clients</Text>
              <Text fontSize="20px">
                <FaQuestionCircle />
              </Text>
            </Flex>
            <Box>
              <Button
                bg="#3B8FC2"
                color="white"
                onClick={() => navigate("/newclient")}
              >
                <Flex align="center" gap="0.5rem">
                  <Text fontSize="30px">+</Text>
                  New Client
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
              <Flex fontSize="20px" align="center" gap="0.5rem" mr="20px">
                <FaDownload />
              </Flex>
            </Flex>
          </Flex>

          {/* jskdjjbdhsb */}

          <Box w="100%">
            <TableContainer w="100%">
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>NAME</Th>
                    <Th>CONTACT PERSON</Th>
                    <Th>EMAIl</Th>
                    <Th>PHONE</Th>
                    <Th>ADDRESS</Th>
                    <Th>DELETE</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {clients?.length > 0 &&
                    clients.map((elem, i) => (
                      <Tr key={elem._id} bg={getColor(i)}>
                        <Td
                          textDecoration="underline"
                          color="#3B8FC2"
                          cursor="pointer"
                          fontSize="20px"
                          bg="white"
                        >
                          {elem.clientName}
                        </Td>
                        <Td
                          fontWeight="600"
                          color={i >= 10 ? "white" : "black"}
                        >
                          {elem.contactPerson}
                        </Td>
                        <Td fontWeight="600" color="black">
                          {elem.email}
                        </Td>
                        <Td fontWeight="600" color="black">
                          {elem.phone}
                        </Td>
                        <Td fontWeight="600" color="black">
                          {elem.address.slice(0, 20) +
                            (elem.address.length > 20 ? "..." : "")}
                        </Td>
                        <Td>
                          <AiFillDelete
                            cursor="pointer"
                            onClick={() => {
                              deleteHandler(elem._id);
                            }}
                          />
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

export default ClientList;
