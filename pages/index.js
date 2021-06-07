// @generated: @expo/next-adapter@2.1.75
import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import { StyleSheet, Text, View } from 'react-native';
import {windowWidth, windowHeight} from "../utils/Dimentions";
import HeaderItem from "../components/HeaderItem";
import {faApple, faLinkedin, faGooglePlay, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import ButtonDark from "../components/ButtonDark";
import Link from "next/link";



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
              <meta name="goFree" content="Just be free" />
              <link rel="icon" href="/logo.svg" />
          </Head>

          <div className="">
              <img src="/bg-img.png" alt="african women" className="h-screen w-screen"/>
          </div>

          <div className="flex flex-col h-screen w-screen absolute justify-evenly">

              <div className="flex flex-col md:flex-row h-5/6 w-screen">
                  <div className="flex flex-col h-1/2 md:h-full w-full md:w-3/5 justify-center items-center">
                      <div className="flex flex-col justify-center items-center">
                          <div className="">
                              <img src="/logo.svg" alt="GoFree Logo" className="h-10 w-10"/>
                          </div>
                          <div className="px-10 py-10">
                              <p className="text-white font-base text-lg md:text-3xl text-center font-sans">Connecting a billion Africans with </p>
                              <p className="text-white font-base text-lg md:text-3xl text-center font-sans">calls, chats, banking and more</p>
                          </div>
                      </div>
                      <div className="md:mt-10 flex justify-center">
                          <ButtonDark subtitle="COMING SOON" title="Google PlayStore" icon={faGooglePlay} />
                          <ButtonDark subtitle="COMING SOON" title="App Store" icon={faApple} />
                      </div>
                  </div>

                  <div className="flex h-1/2 md:h-auto w-full md:w-2/5 justify-center items-center">
                      <img src="/phone.png" alt="Phone Demo" className=" h-full w-4/6 object-contain"/>
                  </div>
              </div>

              <div className="flex flex-col md:flex-row w-screen h-12 justify-between px-1 md:px-10 items-center border-t border-gray-300">
                  <p className="text-white py-1 md:py-0 text-xs md:text-sm md:font-semibold">Copyright © 2021 GoFree. All Rights Reserved</p>

                  <div className="flex justify-evenly items-center">
                      <p className="cursor-pointer hover:text-gray-300 text-white w-12 md:w-16 text-center text-xs md:text-sm md:font-semibold">About</p>
                      <Link href='/payments'>
                          <p className="cursor-pointer hover:text-gray-300 text-white w-12 md:w-24 text-center text-xs md:text-sm md:font-semibold">Payments</p>
                      </Link>
                      <p className="cursor-pointer hover:text-gray-300 text-white w-16 md:w-24 text-center text-xs md:text-sm md:font-semibold">Help Center</p>
                      <div className="flex justify-evenly items-center">
                          <p className="cursor-pointer hover:text-gray-300 text-white w-12 md:w-16 text-center text-xs md:text-sm md:font-semibold">Terms</p>
                          <p className="cursor-pointer hover:text-gray-300 text-white w-24 md:w-24 text-center text-xs md:text-sm md:font-semibold">Privacy Policy</p>
                          <div className="flex flex-row items-center md:ml-10">
                              <HeaderItem icon={faLinkedin} url="https://www.linkedin.com/company/swiftpayapp" />
                              <HeaderItem icon={faTwitter} url="https://twitter.com/gofreeHQ" />
                              <HeaderItem icon={faInstagram} url="https://instagram.com/gofreeHQ" />
                          </div>
                      </div>
                  </div>

              </div>

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
