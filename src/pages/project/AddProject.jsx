import {
  Box,
  Button,
  Flex,
  Input,
  Link,
  Select,
  Text,
  Textarea,
  VStack,
  FormControl,
  Alert,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { addProject, getClientsAPI } from "./functions";
import { useNavigate } from "react-router-dom";

const ProjectList = () => {
  const navigate = useNavigate();
  const [clients, setClients] = useState([]);
  const [newProject, setNewProject] = useState({
    status: "progress",
  });
  const changeHandler = (e) => {
    let { name, value } = e.target;
    setNewProject({
      ...newProject,
      [name]: value,
    });
  };
  const addProjectHandler = async () => {
    if (
      !newProject.projectName ||
      !newProject.client ||
      !newProject.description
    ) {
      alert("please fill all details");
      return;
    }
    await addProject(newProject);
    navigate("/project");
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

  return (
    <Flex>
      <Box w="15%" bg="blue.200"></Box>
      <FormControl w="85%">
        <VStack p="2rem 1rem" w="60%" m="auto" align="left" gap="15px">
          <Flex gap="20px" align="center" justify="left">
            <Text fontSize="40px" fontWeight="500">
              Add Project
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
              name="projectName"
              onChange={changeHandler}
              bg="gray.50"
              w="100%"
              placeholder="Enter name of project"
            />
          </Flex>
          <Box align="left">
            <Text color="gray.500">CLIENT</Text>
            <Select
              name="client"
              placeholder="Select..."
              bg="gray.50"
              onChange={changeHandler}
              isRequired
            >
              {clients?.length &&
                clients.map((elem) => (
                  <option value={elem.clientName}>{elem.clientName}</option>
                ))}
            </Select>
          </Box>
          <Flex direction="column" justify="left" w="100%">
            <Text align="left" color="gray.500">
              DESCRIPTION
            </Text>
            <Textarea
              isRequired
              name="description"
              onChange={changeHandler}
              bg="gray.50"
              placeholder="Edit project description"
              size="sm"
            />
          </Flex>
          <Box bg="gray.50" p="1rem" align="left">
            <Flex direction="column" justify="left" w="43%" textAlign="left">
              <Select
                p="4px 0"
                placeholder="Billable Settings"
                bg="gray.50"
                fontSize="25px"
                fontWeight="500"
                color="gray.600"
              >
                <option value="option1">Option 1</option>
              </Select>
              <Text color="gray.500" mt="0.5rem" ml="15px">
                Team member-based rate
              </Text>
            </Flex>
          </Box>
          <Box bg="gray.50" p="1rem" align="left">
            <Flex direction="column" justify="left" w="43%" textAlign="left">
              <Select
                p="4px 0"
                placeholder="Rounding of time"
                bg="gray.50"
                fontSize="25px"
                fontWeight="500"
                color="gray.600"
              >
                <option value="option1">Option 1</option>
              </Select>
              <Text color="gray.500" mt="0.5rem" ml="15px">
                Team member-based rate
              </Text>
            </Flex>
          </Box>
          <Box bg="gray.50" p="1rem" align="left">
            <Flex direction="column" justify="left" w="43%" textAlign="left">
              <Select
                p="4px 0"
                placeholder="Approval Settings"
                bg="gray.50"
                fontSize="25px"
                fontWeight="500"
                color="gray.600"
              >
                <option value="option1">Option 1</option>
              </Select>
              <Text color="gray.500" mt="0.5rem" ml="15px">
                Team member-based rate
              </Text>
            </Flex>
          </Box>
          <Flex justify="space-between">
            <Button
              type="submit"
              onClick={() => addProjectHandler()}
              bg="#3B8FC2"
              color="white"
            >
              Create project
            </Button>
            <Link
              textDecoration="underline"
              href="/project"
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
