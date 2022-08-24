import './App.css';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react"
import HowItWorks from './pages/HowItWorks';
import UseCases from './pages/UseCases';

function App() {
  return (
    <Box className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/usecases" element={<UseCases />} />
      </Routes>
    </Box>
  );
}

export default App;
