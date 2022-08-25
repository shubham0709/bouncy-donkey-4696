import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import HowItWorks from "./pages/HowItWorks";
import UseCases from "./pages/UseCases";
import Project from "./pages/project/Project";
import AddProject from "./pages/project/AddProject";
import EditProject from "./pages/project/EditProject";
import ClientList from "./pages/project/ClientList";
import AddClient from "./pages/project/AddClient";

function App() {
  return (
    <Box align="center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/usecases" element={<UseCases />} />
        <Route path="/project" element={<Project />} />
        <Route path="/newproject" element={<AddProject />} />
        <Route path="/project/:id/edit" element={<EditProject />} />
        <Route path="/client" element={<ClientList />} />
        <Route path="/newclient" element={<AddClient />} />
      </Routes>
    </Box>
  );
}

export default App;
