import React, {useState} from 'react'
import { StyleSheet } from "react-native";
import { useRouter } from "next/router";
import ButtonBlack from "./ButtonBlack";


function Product() {
    const router =useRouter();
    // const [modalVisible, setModalVisible] = useState(false);
    const [p2p, setP2p] = useState( "cursor-pointer w-32 lg:w-40 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 bg-black focus:bg-black rounded-full");

    const [AI, setAI] = useState( "");
    const [Mobile, setMobile] = useState( "h-0 opacity-0 m-0");
    const [Secure, setSecure] = useState( "h-0 opacity-0 m-0");

    const [NiText, setNiText] = useState( "font-semibold text-xs lg:text-sm text-white");
    const [FinText, setFinText] = useState( "font-semibold text-xs lg:text-sm text-gray-900");
    const [RealText, setRealText] = useState( "font-semibold text-xs lg:text-sm text-gray-900");

    const [titleAI, setTitleAI] = useState( "mt-10 mb-5 text-lg lg:text-2xl font-semibold text-gray-900");
    const [subTitleAI, setSubTitleAI] = useState( "mb-10 text-xs lg:text-sm text-gray-900 lg:w-4/5");

    const [titleMobile, setTitleMobile] = useState( "my-0 text-lg lg:text-2xl font-semibold text-gray-900");
    const [subTitleMobile, setSubTitleMobile] = useState( "mb-0 text-xs lg:text-sm text-gray-900 lg:w-4/5");

    const [titleSecure, setTitleSecure] = useState( "my-0 text-lg lg:text-2xl font-semibold text-gray-900");
    const [subTitleSecure, setSubTitleSecure] = useState( "mb-0 text-xs lg:text-sm text-gray-900 lg:w-4/5");


    const onPressNational = () => {
        setAI("opacity-100 h-auto my-0 lg:my-5 flex flex-col justify-start ");
        setMobile("opacity-0 h-0");
        setSecure("opacity-0 h-0");
        setTitleAI("my-5 text-lg lg:text-2xl font-semibold text-gray-900");
        setSubTitleAI("mb-10 text-sm lg:w-4/5 text-gray-900");
        setTitleMobile("my-0 text-2xl font-semibold text-gray-900");
        setSubTitleMobile("mb-0 text-sm text-gray-900");
        setTitleSecure("my-0 text-2xl font-semibold text-gray-900");
        setSubTitleSecure("mb-0 text-sm text-gray-900");
        setNiText("font-semibold text-xs lg:text-sm text-white");
        setFinText("font-semibold text-xs lg:text-sm text-gray-900");
        setRealText("font-semibold text-xs lg:text-sm text-gray-900");
        setP2p("cursor-pointer w-32 lg:w-40  h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 focus:bg-black rounded-full");
    };

    const onPressFintech = () => {
        setMobile("opacity-100 h-auto my-0 lg:my-5 flex flex-col justify-start ");
        setAI("opacity-0 h-0 m-0");
        setSecure("opacity-0 h-0 m-0");
        setTitleMobile("my-5 text-lg lg:text-2xl font-semibold text-gray-900");
        setSubTitleMobile("mb-10 text-sm lg:w-4/5 text-gray-900");
        setTitleAI("my-0 text-2xl font-semibold text-gray-900");
        setSubTitleAI("mb-0 text-sm text-gray-900");
        setTitleSecure("my-0 text-2xl font-semibold text-gray-900");
        setSubTitleSecure("mb-0 text-sm text-gray-900");
        setNiText("font-semibold text-xs lg:text-sm text-gray-900");
        setFinText("font-semibold text-xs lg:text-sm text-white");
        setRealText("font-semibold text-xs lg:text-sm text-gray-900");
        setP2p("cursor-pointer w-32 lg:w-40 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 focus:bg-black rounded-full");
    };

    const onPressReal = () => {
        setSecure("opacity-100 h-auto my-0 lg:my-5 flex flex-col justify-start ");
        setMobile("opacity-0 h-0 m-0");
        setAI("opacity-0 h-0 m-0");
        setTitleSecure("my-5 text-lg lg:text-2xl font-semibold text-gray-900");
        setSubTitleSecure("mb-10 text-sm lg:w-4/5 text-gray-900");
        setTitleAI("my-0 text-2xl font-semibold text-gray-900");
        setSubTitleAI("mb-0 text-sm text-gray-900");
        setTitleMobile("my-0 text-2xl font-semibold text-gray-900");
        setSubTitleMobile("mb-0 text-sm text-gray-900");
        setNiText("font-semibold text-xs lg:text-sm text-gray-900");
        setFinText("font-semibold text-xs lg:text-sm text-gray-900");
        setRealText("font-semibold text-xs lg:text-sm text-white");
        setP2p("cursor-pointer w-32 lg:w-40 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 focus:bg-black rounded-full");
    };



    return (
        <div name="products" id="products"
             className="flex flex-col lg:flex-row justify-center items-center h-auto w-screen overflow-hidden px-5 lg:px-20 bg-white"
        >

            <div className="w-full lg:w-1/2 h-1/2 lg:h-5/6 my-10" >

                <div className="flex flex-row mt-5">

                    <div className="flex flex-col sm:flex-row">
                        <div className="">
                            <button
                                onClick={onPressNational}
                                className={p2p}
                            >
                                <p className={NiText}>Mission Statement</p>
                            </button>
                        </div>

                        <div className="mt-3 sm:mt-0">
                            <button
                                onClick={onPressFintech}
                                className="cursor-pointer w-24 lg:w-28 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 focus:bg-black rounded-full"
                            >
                                <p className={FinText}>Mobile</p>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row">
                        <div className="">
                            <button
                                onClick={onPressReal}
                                className="cursor-pointer w-24 lg:w-28 h-10 mr-3 justify-center items-center transition duration-100 hover:bg-gray-300 focus:bg-black rounded-full"
                            >
                                <p className={RealText}>Secure</p>
                            </button>
                        </div >
                    </div>
                </div>

                <div className={AI}>
                    <p className={titleAI}>A Peer-to-Peer Electronic Cash System</p>
                    <p className={subTitleAI}>
                        To build a seamless, trusted and innovative financial network that enables
                        people and businesses to go free across Africa on a peer-to-peer messaging app...
                    </p>

                    <ButtonBlack title="Get Started" onClick={() => router.push(`/exchanges`)}/>
                </div>

                <div className={Mobile}>
                    <p className={titleMobile}>A Peer-to-Peer Messaging Platform</p>
                    <p className={subTitleMobile}>
                        Using the power of instant messaging, communication and file sharing
                        to connect with your loved ones across the globe, anywhere, anytime,
                        anyhow, without any restriction, helping you go free...
                    </p>

                    <ButtonBlack title="Get Started" onClick={() => router.push(`/exchanges`)}/>
                </div>

                <div className={Secure}>
                    <p className={titleSecure}>Secured with End-to-End Encryption</p>
                    <p className={subTitleSecure}>
                        Simple, safe and secure. Privacy is not an option for us, it's our focus.
                        Our security protocol developed on genuine end-to-end encryption and blockchain based authentication...
                    </p>

                    <ButtonBlack title="Get Started" onClick={() => router.push(`/exchanges`)} />
                </div>

            </div>

            <div className="flex w-full lg:w-1/2 h-96 lg:my-10 mb-10 ">
                <img
                    layout="responsive"
                    className=" h-full w-full object-cover md:object-contain"
                    //style={{width: 600, height: 400}}
                    src="/gateway.gif"

                />
            </div>

        </div>
    )
}

export default Product;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    topContainer: {
        marginTop: 50,
    },
    navigationContainer: {
        marginTop: 20,
        flexDirection: 'row',

    },
    buttonContainer1: {
        marginRight: 20,
        width: 200,
        height: 40,
        backgroundColor: "#fcb316",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer2: {
        marginRight: 20,
        width: 120,
        height: 40,
        backgroundColor: "transparent",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    textTitle: {
        fontSize: 32,
        fontWeight: 600,
        color: '#000A17',
        lineHeight: 50,
    },
    textContainer: {
        flexDirection: 'column',
        marginLeft: 5,
    },
    text0: {
        fontSize: 10,
        fontWeight: 400,
        color: 'white'
    },
    text1: {
        fontSize: 12,
        fontWeight: 600,
        color: 'white'
    },
});