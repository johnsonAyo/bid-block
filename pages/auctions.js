import React from "react";
import MainNavbar from "components/NavBars/MainNavbar";
import SearchBar from "components/Homepage/SearchBar";
import Auctions from "components/Homepage/Auctions";
import TopAunction from "components/Homepage/TopAunction";
import { Box } from "@chakra-ui/react";

const autions = () => {
  return (
    <Box height="100vh">
      <MainNavbar />
      <SearchBar />
      <Auctions />
      <TopAunction />
    </Box>
  );
};

export default autions;
