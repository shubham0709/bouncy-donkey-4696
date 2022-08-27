import "./App.css";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import SignUpPage2 from "./components/auth/SignUpPage2";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
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
import TrackProject from "./pages/TrackProject";
import TrackProjectInp from "./pages/TrackProjectInp";

function App() {
  return (
    <Box align="center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/usecases" element={<UseCases />} />
        <Route path="/trackproject" element={<TrackProject />} />
        <Route path="/project" element={<Project />} />
        <Route path="/newproject" element={<AddProject />} />
        <Route path="/project/:id/edit" element={<EditProject />} />
        <Route path="/client" element={<ClientList />} />
        <Route path="/newclient" element={<AddClient />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signupnext" element={<SignUpPage2 />} />
        <Route path="/price" element={<Pricepage />} />
        <Route path="/xyz" element={<TrackProjectInp />} />
      </Routes>
    </Box>
  );
}

export default App;
