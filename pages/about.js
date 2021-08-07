import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Head from 'next/head';
import Link from "next/link";


const about = () => {
    return (
        <div className="flex flex-col overflow-hidden h-screen w-screen px-5 md:px-20">
            <Head>
                <title>GoFree - About</title>
                <meta name="GoFree Payments" content="Just be free" />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <div className="flex w-full my-5 h-12 justify-between items-center">
                <Link href='/'>
                    <div className="flex cursor-pointer justify-center items-center">
                        <img src="/logo.svg" alt="GoFree Logo" className="h-6 w-6 md:h-8 md:w-8 mr-1"/>
                    </div>
                </Link>

                <div className="flex justify-between md:justify-evenly items-center w-2/3 lg:w-1/2">
                    <Link href='/'>
                        <p className="cursor-pointer hover:text-black text-white  text-center text-xs md:text-base md:font-semibold">Home</p>
                    </Link>
                    <Link href='/payments'>
                        <p className="cursor-pointer hover:text-black text-white text-center text-xs md:text-base md:font-semibold">Payments</p>
                    </Link>
                    <Link href='/about'>
                        <p className="cursor-pointer hover:text-gray-700 text-black text-center text-xs md:text-base md:font-semibold">About</p>
                    </Link>
                    <Link href='/whitepaper.pdf'>
                        <p className="cursor-pointer hover:text-black text-white text-center text-xs md:text-base md:font-semibold">Whitepaper</p>
                    </Link>
                </div>

            </div>

            <div className="flex flex-col w-full h-full md:flex-row py-10">
                <div className="flex h-96 md:h-auto py-10 w-full md:w-1/3 justify-center items-center">
                    <img src="/s1.png" alt="" className=" h-full w-full object-contain"/>
                </div>


                <div className="flex md:flex-col md:w-2/3 mx-auto justify-center pb-10">
                    
                    <p className="text-white font-sans rounded font-bold md:font-semibold md:text-2xl">ABOUT</p>
                    <p className="text-white font-sans rounded font-bold px-1 md:px-0 md:text-6xl">GOFREE</p>

                    <p className="text-white w-full font-sans rounded text-justify mt-10">
                        With GoFree, fiat currency and cryptocurrency payments and transfers are completed immediately
                        and with ease. GoFree provides an electronic wallets that supports multiple fiat currencies and
                        multiple tokens on the Blockchain and the transfer of funds from one user to anothe can be 
                        completed in one click, during chats or between them.
                    </p>

                    <p className="text-white w-full font-sans rounded text-justify mt-10">
                        With GoFree, fiat currency and cryptocurrency payments and transfers are completed immediately
                        and with ease. GoFree provides an electronic wallets that supports multiple fiat currencies and
                        multiple tokens on the Blockchain and the transfer of funds from one user to anothe can be 
                        completed in one click, during chats or between them.
                    </p>

                    <p className="text-white w-full font-sans rounded text-justify mt-10">
                        With GoFree, fiat currency and cryptocurrency payments and transfers are completed immediately
                        and with ease. GoFree provides an electronic wallets that supports multiple fiat currencies and
                        multiple tokens on the Blockchain and the transfer of funds from one user to anothe can be 
                        completed in one click, during chats or between them.
                    </p>

                </div>
            </div>

           
        </div>
    )
};

export default about;


const styles = StyleSheet.create({});
