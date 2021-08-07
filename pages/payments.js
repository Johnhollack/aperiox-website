import React from 'react';
import Head from 'next/head';
import Landing from "../components/Landing";
import Products from "../components/Products";
import UseCases from "../components/UseCases";
import Footer from "../components/Footer";
import Feature from "../components/Feature";
import Features from "../components/Features";
import CashTransfer from "../components/CashTransfer";
import CryptoTransfer from "../components/CryptoTransfer";
import CollectPayments from "../components/CollectPayments";
import SupportLovedOnes from "../components/SupportLovedOnes";
import AISupport from "../components/AISupport";
import CashText from "../components/CashText";
import CryptoText from "../components/CryptoText";
import CollectText from "../components/CollectText";
import SupportText from "../components/SupportText";
import AIText from "../components/AIText";
import { View } from "react-native-web";


function Payments() {

  return (
      <View style={{backgroundColor: "#2793FF"}}>
          <div className="flex flex-col overflow-hidden w-screen">
              <Head>
                  <title>GoFree - Payments</title>
                  <meta name="GoFree Payments" content="Just be free" />
                  <link rel="icon" href="/logo.svg" />
              </Head>

              <Landing />

              <Feature />

              <CashTransfer />

              <CashText />

              <CryptoTransfer />

              <CryptoText />

              <CollectPayments />

              <CollectText />

              <SupportLovedOnes />

              <SupportText />

              <AISupport />

              <AIText />
              
              <Features />

              <Products />

              <UseCases />

              <Footer />

          </div>
      </View>
  );
}

export default Payments;
