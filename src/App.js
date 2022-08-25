import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import HowItWorks from "./pages/HowItWorks";
import UseCases from "./pages/UseCases";
import Project from "./pages/project/Project";
import AddProject from "./pages/project/AddProject";
import Sidebar from './pages/Sidebar'

function App() {
  return (
    <Box align="center">
      <Sidebar/>
    </Box>
  );
}

export default App;
