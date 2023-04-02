import { Box, Text, Grid, Button } from "@chakra-ui/react";

export default function HomeCard() {
  const basicBoxStyles = {
    display: "flex",
    alignItems: "end",
    justifyContent: "center",
    textAlign: "center",
    width: "100vw",
    height: "90vh",
    color: "white",
    textShadow: "0 0 20px black",
    fontWeight: "bold",
    background: "url('/images/svg/bg_home.svg') center/cover no-repeat",
  };

  return (
    <Box sx={basicBoxStyles}>
      <Box marginBottom="20">
        <Text fontSize="4xl" fontWeight="extrabold">
          Welcome to the Future of auctions <br />
          where Heroes are made and legends are born
        </Text>
        <a href="./auctions">
          <Button
            colorScheme="black"
            size="xlg"
            paddingX={10}
            paddingY={5}
            marginTop={20}
            color="white"
            variant="outline"
            border="2px"
            borderColor="white"
          >
            Get Started
          </Button>
        </a>
      </Box>
    </Box>
  );
}
