import { Box, Text, Grid, Button } from "@chakra-ui/react";

export default function HomeCard() {
  const basicBoxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100vw",
    height: "90vh",
    color: "white",
    textShadow: "0 0 20px black",
    fontWeight: "bold",
    fontSize: "20px",
    px: 4,
    background: "url('/images/svg/bg_home.svg') center/cover no-repeat",
  };

  return (
    <Box sx={basicBoxStyles}>
      <Box marginTop={20}>
        <Text fontSize="5xl" fontWeight="extrabold">
          Welcome to the Future of Autions <br />
          where Heroes are made and legends are born
        </Text>
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
      </Box>
    </Box>
  );
}
