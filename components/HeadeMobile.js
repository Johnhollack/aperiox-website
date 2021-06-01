import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
//import { faMenu} from "@fortawesome/free-solid-svg-icons";
import MenuButton from "./MenuButton";
import ModalSheet from "./ModalSheet";
import React, { useState, useEffect } from "react";



function HeaderMobile() {

    const [modalVisible, setModalVisible] = useState(false);

    const onPress = () => {
        setModalVisible(true)
    };
    const onClose = () => {
        setModalVisible(false)
    };

    return (
        <header className="flex flex-row my-3 px-3 justify-between items-center h-auto w-screen">

            <button
                onClick={onPress}
                className=""
            >
                <p>Menu</p>
            </button>

            <img src="/logo3.png" alt="Apeirox Logo" className="h-10 w-24 object-contain" />

            <div className="flex w-24 items-center justify-evenly">
                <MenuButton icon={faFacebook} url="https://facebook.com/apeiroxcom" />
                <MenuButton icon={faTwitter} url="https://twitter.com/apeiroxcom" />
                <MenuButton icon={faInstagram} url="https://instagram.com/apeiroxcom" />
            </div>

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
        </header>
    )
}

export default HeaderMobile;

