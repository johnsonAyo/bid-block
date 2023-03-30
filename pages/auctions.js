import React from "react";
import MainNavbar from "../components/NavBars/MainNavbar";
import SearchBarComponent from "../components/Homepage/SearchBar";
import AuctionsComponent from "../components/Homepage/Auctions";
import TopAunctionComponent from "../components/Homepage/TopAunction";
import { Box } from "@chakra-ui/react";

const autions = () => {
  return (
    <Box height="100vh">
      <MainNavbar />
      <SearchBarComponent />
      <AuctionsComponent />
      <TopAunctionComponent />
    </Box>
  );
};

export default autions;
