// @generated: @expo/next-adapter@2.1.75
import React from 'react';
import Head from 'next/head';
import Landing from "../components/Landing";
import Products from "../components/Products";
import UseCases from "../components/UseCases";
import Footer from "../components/Footer";
import Product from "../components/Product";
import Team from "../components/Team";
import Feature from "../components/Feature";
import Services from "../components/Services";
import Features from "../components/Features";
import Exchanges from "../components/Exchanges";
import {View} from "react-native-web";


function Payments() {

  return (
      <View style={{backgroundColor: "#2793FF"}}>
          <div className="flex flex-col overflow-hidden w-screen">
              <Head>
                  <title>GoFree Payments</title>
                  <meta name="GoFree Payments" content="Just be free" />
                  <link rel="icon" href="/logo.svg" />
              </Head>

              <Landing />

              <Features />

              <Products />

              <Feature />

              <UseCases />

              <Product />

              <Footer />

          </div>
      </View>
  );
}

export default Payments;
