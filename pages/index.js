// @generated: @expo/next-adapter@2.1.75
import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import { StyleSheet, Text, View } from 'react-native';
import {windowWidth, windowHeight} from "../utils/Dimentions";
import HeaderItem from "../components/HeaderItem";
import {faApple, faLinkedin, faGooglePlay, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import ButtonDark from "../components/ButtonDark";
import Link from "next/link";
import BodyZero from "../components/BodyZero";
import BodyNavBar from "../components/BodyNavBar";



function App() {

    //const [isMobile, setIsMobile] = useState(null);

    {/*
        useEffect(() => {
            if (windowWidth < 500) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }, [windowWidth]);
    */}

    //console.log(windowWidth);

  return (
      <View style={styles.container}>
          <Head>
              <title>GoFree: Chat, Call & Bank for Free</title>
              <meta name="GoFree" content="Just be free" />
              <link rel="icon" href="/logo.svg" />
          </Head>

          <div className="flex flex-col h-screen w-screen justify-evenly">

              <BodyZero />

              <BodyNavBar />



          </div>

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
