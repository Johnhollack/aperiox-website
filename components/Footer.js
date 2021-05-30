import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import HeaderItem from "./HeaderItem";



function Footer() {
    return (
        <div className="flex flex-col justify-start items-start h-auto w-screen">
            <div className="flex ">
                <div className="flex flex-col my-10 mx-10 ">
                    <p className="mb-5 font-bold ">About Us</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">About</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">Career</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">Business Contacts</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">Community</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">Terms</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">Privacy</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">Announcements</p>
                </div>
                <div className="flex flex-col my-10 mx-10">
                    <p className="mb-5 font-bold ">Products</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">E-commerce</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">Swap</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">P2P Trading</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">Exchange</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">Wallet</p>
                </div>
                <div className="flex flex-col my-10 mx-10">
                    <p className="mb-5 font-bold ">Services</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">Downloads</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">Buy Crypto</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">Fees</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">APX</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">Buy AUSD</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">Trading Rules</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">P2P Merchant</p>
                </div>
                <div className="flex flex-col my-10 mx-10">
                    <p className="mb-5 font-bold ">Support</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">Give us feedback</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">Support center</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">Summit a request</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">Apeirox verify</p>
                </div>
            </div>

            <div className="ml-10 mb-5">
                <p className="mb-2 text-xs text-gray-400">Copyright @ 2021 Apeirox LLC |  All Rights Reserved.</p>
            </div>

        </div>
    )
}

export default Footer;

