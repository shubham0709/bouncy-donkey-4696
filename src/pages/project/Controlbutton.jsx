import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { BsFillStopFill } from "react-icons/bs";
import { RiTimerLine } from "react-icons/ri";

export default function ControlButtons(props) {
  const StartButton = (
    <div onClick={props.handleStart}>
      <Button size="md" colorScheme="green">
        <RiTimerLine style={{ marginRight: "5px" }} />
        Start
      </Button>
    </div>
  );
  const ActiveButtons = (
    <Box display="flex" gap="4">
      <div onClick={props.handleReset}>
        <Button size="md" colorScheme="red">
          {" "}
          <BsFillStopFill style={{ marginRight: "5px" }} />
          Stop
        </Button>
      </div>
      <Box onClick={props.handlePauseResume}>
        <Button size="md" colorScheme="green">
          <RiTimerLine style={{ marginRight: "5px" }} />
          {props.isPaused ? "Resume" : "Pause"}
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box display="flex">
      <Box display="flex">{props.active ? ActiveButtons : StartButton}</Box>
    </Box>
  );
}
