import {faFacebook, faTwitter, faInstagram, faApple} from "@fortawesome/free-brands-svg-icons";
import HeaderItem from "./HeaderItem";
import {useRouter} from "next/router";
import NavItem from "./NavItem";
import ButtonDark from "./ButtonDark";
import Link from "next/link";



function Footer() {
    const router =useRouter();

    return (
        <div className="flex flex-col justify-start items-start h-auto w-screen overflow-hidden">
            <div className="flex w-screen">
                <div className="flex flex-col my-10 mx-5 md:mx-10 ">
                    <p className="mb-5 text-sm font-bold ">About Us</p>
                    <p onClick={() => router.push(`/about`)} className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">About</p>
                    <Link href={'https://t.me/apeiroxcom'}>
                        <a
                            target="_blank" rel="noopener noreferrer">
                            <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">Community</p>
                        </a>
                    </Link>

                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">Terms</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">Privacy</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">Announcements</p>
                </div>
                <div className="flex flex-col my-10 mx-5 md:mx-10 ">
                    <p className="mb-5 text-sm font-bold ">Products</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">E-commerce</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">Swap</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">P2P Trading</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">Exchange</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">Wallet</p>
                </div>
                <div className="flex flex-col my-10 mx-5 md:mx-10 ">
                    <p className="mb-5 text-sm font-bold ">Services</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">Buy Crypto</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">Fees</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">APX</p>
                    <p className="mb-2 text-sm cursor-pointer hover:text-white text-gray-400">Trading Rules</p>
                </div>

            </div>

            <div className="ml-10 mb-5">
                <p className="mb-2 text-xs text-gray-400">Copyright @ 2021 Apeirox LLC |  All Rights Reserved.</p>
            </div>

        </div>
    )
}

export default Footer;

