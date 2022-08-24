import "./App.css";
import Login from "./components/auth/Login";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Home></Home>
      <Footer /> */}
      <Login />
    </div>
  );
}

export default App;
