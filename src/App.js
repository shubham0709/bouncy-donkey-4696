import "./App.css";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import SignUpPage2 from "./components/auth/SignUpPage2";
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
import Pricepage from "./pages/Pricepage";
import Track from "./pages/project/Track";
import Protected from "./hoc/Protected";

function App() {
  return (
    <Box align="center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/usecases" element={<UseCases />} />
        <Route path="/project" element={<Protected> <Project /></Protected>} />
        <Route path="/newproject" element={<Protected><AddProject /></Protected>} />
        <Route path="/project/:id/edit" element={<Protected><EditProject /></Protected>} />
        <Route path="/client" element={<Protected> <ClientList /></Protected>} />
        <Route path="/newclient" element={<Protected> <AddClient /></Protected>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signupnext" element={<SignUpPage2 />} />
        <Route path="/price" element={<Protected><Pricepage /></Protected>} />
        <Route path="/track" element={<Protected><Track /></Protected>} />
      </Routes>
    </Box>
  );
}

export default App;