import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getProjectsAPI } from "./functions";
import Sidebar from "../../pages/Sidebar";
import { Flex } from "@chakra-ui/react";

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
    <Box w="85%" bg="gray.200">
      {projects.length && projects.map((elem) => <Box>{"elem"}</Box>)}
    </Box>
  );
};
export default TrackList;
