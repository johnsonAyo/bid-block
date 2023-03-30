import React from "react";
import { Box, Text, Button, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const AunctinDetails = [
  {
    id: 1,
    img: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    creator: "",
    price: "0.45",
    auctionDate: "21-12-2023",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=816&q=80",
    creator: "",
    price: "0.45",
    auctionDate: "21-12-2023",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=818&q=80",
    creator: "",
    price: "0.45",
    auctionDate: "21-12-2023",
  },
];

const TopAuctionCard = () => {
  const basicBoxStyles = {
    width: "100%",
    height: "100%",
    color: "white",
    textShadow: "0 0 20px black",
    fontWeight: "bold",
    fontSize: "20px",
    p: "10",
    flexDirection: "column",
    gap: "5",
  };

  const topAunctionStyle = {
    variant: "outline",
    border: "2px",
    borderColor: "grey",
    boxShadow: "dark-lg",
    margin: "2",
    marginTop: "10",
    w: "35%",
    h: "70vh",
    rounded: "md",
  };

  const aunctionbtnStyle = {
    paddingX: "10",
    paddingY: "7",
    marginTop: "10",
    variant: "outline",
    border: "2px",
    borderColor: "white",
    bgColor: "white",
    color: "black",
  };
  return (
    <Flex justifyContent="space-between">
      {AunctinDetails.map((auction) => {
        return (
          <Flex sx={topAunctionStyle} key={auction.id}>
            <Flex backgroundImage={`url(${auction.img})`} sx={basicBoxStyles}>
              <Flex>
                <a href="./nft-auction-page">
                  <Image src="/images/svg/profile.svg" alt="" />
                </a>
                <Box marginLeft={5}>
                  <Text marginBottom={2} fontSize="md">
                    @TheManKinniboss
                  </Text>
                  <Text fontSize="xs"> Created on 23-12-2023</Text>
                </Box>
              </Flex>

              <Text> Starting Price</Text>
              <Text fontSize="3xl">{auction.price}Eth</Text>
              <Text>Aunction Date</Text>
              <Text fontSize="3xl">{auction.auctionDate}</Text>
              <Button sx={aunctionbtnStyle}>Enter Auction</Button>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default TopAuctionCard;
