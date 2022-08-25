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
import React, { useState, useEffect } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleProjectAPI, editSingleProjectAPI } from "./functions";

const EditProject = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [updateProject, setUpdateProject] = useState({});
  const changeHandler = (e) => {
    let { name, value } = e.target;
    setUpdateProject({
      ...updateProject,
      [name]: value,
    });
  };
  const editProjectHandler = async () => {
    editSingleProjectAPI(updateProject)
      .then((res) => {
        console.log(res);
        navigate("/project");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSingleProjectAPI(id)
      .then((res) => {
        console.log("from edit page", res);
        setUpdateProject(res);
      })
      .then((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Flex>
      <Box w="15%" bg="blue.200"></Box>
      <FormControl w="85%">
        <VStack p="2rem 1rem" w="60%" m="auto" align="left" gap="15px">
          <Flex gap="20px" align="center" justify="left">
            <Text fontSize="40px" fontWeight="500">
              Edit Project
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
              value={updateProject.projectName || ""}
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
              value={updateProject.client}
            >
              <option value="masai">masai</option>
              <option value="scalar">scalar</option>
              <option value="newton">newton</option>
            </Select>
          </Box>
          <Box align="left">
            <Text color="gray.500">STATUS</Text>
            <Select
              name="status"
              placeholder="Select..."
              bg="gray.50"
              onChange={changeHandler}
              isRequired
              value={updateProject.status}
            >
              <option value="pending">pending</option>
              <option value="progress">progress</option>
              <option value="completed">completed</option>
            </Select>
          </Box>
          <Flex direction="column" justify="left" w="100%">
            <Text align="left" color="gray.500">
              DESCRIPTION
            </Text>
            <Textarea
              value={updateProject.description || ""}
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
              onClick={() => editProjectHandler()}
              bg="#3B8FC2"
              color="white"
            >
              Edit project
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

export default EditProject;
