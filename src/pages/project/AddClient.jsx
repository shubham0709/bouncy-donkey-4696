import {
  Box,
  Button,
  Flex,
  Input,
  Link,
  Text,
  Textarea,
  VStack,
  FormControl,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { addClient } from "./functions";
import { useNavigate } from "react-router-dom";

const ProjectList = () => {
  const navigate = useNavigate();
  const [newClient, setNewClient] = useState({});

  const changeHandler = (e) => {
    let { name, value } = e.target;
    setNewClient({
      ...newClient,
      [name]: value,
    });
  };
  const addClientHandler = async () => {
    if ((newClient.phone + "").length != 10) {
      alert("Enter 10 digit phone Number");
      return;
    }
    if (
      !newClient.clientName ||
      !newClient.contactPerson ||
      !newClient.email ||
      !newClient.phone ||
      !newClient.address
    ) {
      alert("please fill all details");
      return;
    }
    console.log(newClient);
    await addClient(newClient);
    navigate("/client");
    return;
  };
  return (
    <Flex>
      <Box w="15%" bg="blue.200"></Box>
      <FormControl w="60%" m="auto">
        <VStack p="2rem 1rem" w="60%" m="auto" align="left" gap="15px">
          <Flex gap="20px" align="center" justify="left">
            <Text fontSize="40px" fontWeight="500">
              New Client
            </Text>
            <Text fontSize="20px">
              <FaQuestionCircle />
            </Text>
          </Flex>
          <Flex direction="column" justify="left" w="100%">
            <Text color="gray.500" align="left">
              NAME
            </Text>
            <Input
              isRequired
              name="clientName"
              onChange={changeHandler}
              bg="gray.50"
              w="100%"
              placeholder="Enter name of project"
            />
          </Flex>
          <Flex direction="column" justify="left" w="100%">
            <Text color="gray.500" align="left">
              CONTACT PERSON
            </Text>
            <Input
              isRequired
              name="contactPerson"
              onChange={changeHandler}
              bg="gray.50"
              w="100%"
              placeholder="Enter name of project"
            />
          </Flex>
          <Flex direction="column" justify="left" w="100%">
            <Text color="gray.500" align="left">
              EMAIL
            </Text>
            <Input
              isRequired
              name="email"
              onChange={changeHandler}
              bg="gray.50"
              w="100%"
              placeholder="Enter name of project"
            />
          </Flex>
          <Flex direction="column" justify="left" w="100%">
            <Text color="gray.500" align="left">
              PHONE
            </Text>
            <Input
              type="number"
              isRequired
              name="phone"
              onChange={changeHandler}
              bg="gray.50"
              w="100%"
              placeholder="Enter name of project"
            />
          </Flex>
          <Flex direction="column" justify="left" w="100%">
            <Text align="left" color="gray.500">
              ADDRESS
            </Text>
            <Textarea
              isRequired
              name="address"
              onChange={changeHandler}
              bg="gray.50"
              placeholder="Edit Client Address"
              size="sm"
            />
          </Flex>
          <Flex justify="space-between">
            <Button
              type="submit"
              onClick={() => addClientHandler()}
              bg="#3B8FC2"
              color="white"
            >
              Create Client
            </Button>
            <Link
              textDecoration="underline"
              onClick={() => navigate("/project")}
              color="#3B8FC2"
              fontSize="20px"
            >
              cancel
            </Link>
          </Flex>
        </VStack>
      </FormControl>
    </Flex>
  );
};

export default ProjectList;
