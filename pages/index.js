// @generated: @expo/next-adapter@2.1.75
import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import { StyleSheet, Text, View } from 'react-native';
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import {windowWidth} from "../utils/Dimentions";



function App() {

    const [isMobile, setIsMobile] = useState(null);

    useEffect(() => {
       if (windowWidth < 500 ) {
           setIsMobile(true)
       } else {
           setIsMobile(false)
       }
    }, [windowWidth]);

    console.log(windowWidth);

  return (
    <View style={styles.container}>
      <Head>
        <title>Apeirox</title>
        <meta name="Apeirox" content="Connecting Trades" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Header />

        {
            isMobile ? <p>Is Mobile Screen</p> : <NavBar />
        }


      <p className="text-gray-300 font-bold">Welcome to Expo + Next.js 👋</p>
    </View>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    //backgroundColor: 'whitesmoke',
  },
  text: {
    fontSize: 16,
  },
});
