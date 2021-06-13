// @generated: @expo/next-adapter@2.1.75
import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import { StyleSheet, Text, View } from 'react-native';
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import BodyZero from "../components/BodyZero";
import BodyOne from "../components/BodyOne";
import BodyTwo from "../components/BodyTwo";
import Listings from "../components/Listings";
import RoadMap from "../components/RoadMap";
import Team from "../components/Team";
import Footer from "../components/Footer";
import PrivateSale from "../components/PrivateSale";



function App() {


  return (
      <div className="flex flex-col w-screen">
        <Head>
          <title>ApeiroX - Private Sales</title>
          <meta name="ApeiroX" content="Connecting Trades" />
          <link rel="icon" href="/logo.svg" />
        </Head>

        <Header />

        <div className="flex flex-col h-auto w-screen mt-10 justify-center items-center">

            <p className="font-semibold w-4/5 my-5 text-lg text-left text-yellow-400 text-justify">
                Please kindly note all responses are required
            </p>

            <PrivateSale />


        </div>


      </div>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});
