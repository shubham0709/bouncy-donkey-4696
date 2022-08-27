import { Box } from "@chakra-ui/react";
import React from "react";
import "./Timer.css";
  
export default function Timer(props) {
  return (
    <Box display='flex' fontSize='25px'>
      <span >
        {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
      </span>
      <span >
        {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.
      </span>
      <span >
        {("0" + ((props.time / 10) % 100)).slice(-2)}
      </span>
    </Box>
  );
}