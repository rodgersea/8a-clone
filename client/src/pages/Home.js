import React from "react";
import AscentCard from "../components/AscentCard";
import HotTopics from "../components/HotTopics";
import Nav from "../components/Nav";

function Home() {
  return (
    <div>
      <Nav />
      <AscentCard />
      <HotTopics />
    </div>
  );
};

export default Home;
