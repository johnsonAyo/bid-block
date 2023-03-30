import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import useStore from "./../store/store";
import { immer } from "zustand/middleware/immer";
import HomePage from "../components/Homepage/LandingPage";
import Navbar from "../components/NavBars/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const color = useStore((state) => state.color);
  const changeColor = useStore((state) => state.changeColor);
  return (
    <>
      <main>
        <Navbar />
        <HomePage />
      </main>
    </>
  );
}
