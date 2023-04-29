//import { Inter } from "next/font/google";
import useStore from "./../store/store";
import LandingPage from "../components/homepage/LandingPage";
import Navbar from "../components/navbars/Navbar";
import { useStateContext } from '../context';
import { Text } from "@chakra-ui/react";
//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {address, alerting, setAlert} = useStateContext();
  if(address){
    setAlert("");
   }
  const color = useStore((state) => state.color);
  const changeColor = useStore((state) => state.changeColor);
  return (   
    <>
      <Text>{alerting}</Text>
      <main>
        {/* <Navbar /> */}
        <LandingPage />
      </main>
    </>
  );
}