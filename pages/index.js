// @generated: @expo/next-adapter@2.1.75
import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import { StyleSheet, Text, View } from 'react-native';
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import {windowWidth} from "../utils/Dimentions";
import Mobile from "../components/Mobile";
import Desktop from "../components/Desktop";



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
        {
            isMobile ? <Mobile /> : <Desktop />
        }
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
