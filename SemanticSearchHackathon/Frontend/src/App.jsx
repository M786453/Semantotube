import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Team from "./components/Team/Team";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Search />
      <Team />
    </>
  );
}

export default App;
