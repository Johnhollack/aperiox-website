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


function Payments() {

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

          <Services />

          <Team />

          <Footer />

      </div>
  );
}

export default Payments;
