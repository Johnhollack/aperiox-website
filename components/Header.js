import React, { useState, useEffect } from "react";
import { faFacebook, faTwitter, faInstagram, } from "@fortawesome/free-brands-svg-icons";
import HeaderItem from "./HeaderItem";
import MenuButton from "./MenuButton";
import ModalSheet from "./ModalSheet";
import { faBars } from "@fortawesome/free-solid-svg-icons";



function Header() {

    const [modalVisible, setModalVisible] = useState(false);

    const onPress = () => {
        setModalVisible(true)
    };
    const onClose = () => {
        setModalVisible(false)
    };

    return (
        <header className="flex sm:flex-row my-3 justify-between items-center h-auto w-screen">
            <img src="/logo3.png" alt="Apeirox Logo" className="ml-10 h-10 sm:h-12 object-contain" />

            <div className="flex flex-grow items-center justify-end sm:justify-evenly w-xs sm:max-w-xs sm:mr-0">
                <HeaderItem icon={faFacebook} url="https://facebook.com/apeiroxcom" />
                <HeaderItem icon={faTwitter} url="https://twitter.com/apeiroxcom" />
                <HeaderItem icon={faInstagram} url="https://instagram.com/apeiroxcom" />

                <MenuButton
                    onClick={onPress}
                    icon={faBars}
                    className="cursor-pointer hover:text-gray-400 h-5 text-gray-300 lg:w-0 lg:h-0 lg:opacity-0 px-5 lg:px-0"
                />

                <ModalSheet
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    onClose={onClose}
                    button1="home"
                    button2="airdrop"
                    button3="bounty"
                    button4="whitepaper"
                    button5="exchanges"
                    button6="forum"
                    button7="roadmap"
                    button8="product"
                    button9="partners"
                    button10="tokenomics"
                    button11="about"
                />
            </div>


        </header>
    )
}

export default Header;

