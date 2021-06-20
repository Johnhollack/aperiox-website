// @generated: @expo/next-adapter@2.1.75
import React from 'react';
import Head from 'next/head';
import { StyleSheet } from 'react-native';
import Mission from "../components/Mission";
import Landing from "../components/Landing";
import Products from "../components/Products";
import UseCases from "../components/UseCases";
import Footer from "../components/Footer";
import GateWay from "../components/GateWay";
import Product from "../components/Product";
import Features from "../components/Features";
import Team from "../components/Team";
import Feature from "../components/Feature";
import Partners from "../components/Partners";


function Payments() {

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
      <div className="flex flex-col overflow-hidden w-screen">
          <Head>
              <title>GoFree Payments</title>
              <meta name="GoFree Payments" content="Just be free" />
              <link rel="icon" href="/logo.svg" />
          </Head>

          <div className="">
              <img src="/p2p.gif" alt="african women" layout="responsive" className="h-96 md:h-screen w-screen "/>
          </div>

          <Landing />

          <Product />

          <Products />

          <UseCases />

          <Feature />

          <Features />

          <Team />

          <Footer />

      </div>
  );
}

export default Payments;


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
