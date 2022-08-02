import React from "react";
import { NavBar } from "./components/NavBar";
import Hero from "./components/Hero";
import { Box } from "@chakra-ui/react";
import { Fonts } from "./components/Fonts";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Box>
      <Fonts />
      <NavBar />
      <Hero />
      <Footer/>
    </Box>
  );
}

export default App;
