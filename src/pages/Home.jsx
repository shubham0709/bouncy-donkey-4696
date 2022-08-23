import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const state = useSelector((state) => state);
  console.log(state);
  return <div>Homess</div>;
};

export default Home;
