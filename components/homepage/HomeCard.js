import { Box, Text } from "@chakra-ui/react";

import { useMetamask, useAddress, ConnectWallet } from "@thirdweb-dev/react";
import { useStateContext } from '../../context';

export default function HomeCard() {
  const { connect, currentaddress, setAddress } = useStateContext();
   const address = useAddress();
   setAddress(address);
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
        {/* <Text>{currentaddress}</Text> */}
        <Box marginTop="20">
          
          <ConnectWallet
            btnTitle="Get Started"
            theme="white"
            className="my-custom-class"
            // handleClick={() => {
            //   if(addr) navigate('mynft')
            //   else connect()
            // }}
          />
        </Box>
      </Box>
    </Box>
  );
}
