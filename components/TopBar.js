import {faFacebook, faTwitter, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import HeaderItem from "./HeaderItem";
import Link from "next/link";


function TopBar() {
    return (
        <div className="flex w-screen h-12 justify-between px-5 md:px-20 items-center overflow-hidden">
            <Link href='/'>
                <div className="flex cursor-pointer justify-center items-center">
                    <img src="/logo.svg" alt="GoFree Logo" className="h-6 w-6 md:h-8 md:w-8 mr-1"/>
                </div>
            </Link>

            <div className="flex justify-between md:justify-evenly items-center w-2/3 lg:w-1/2">
                <Link href='/'>
                    <p className="cursor-pointer hover:text-black text-white  text-center text-xs md:text-base md:font-semibold">Home</p>
                </Link>

                <p className="cursor-pointer hover:text-black text-white text-center text-xs md:text-base md:font-semibold">Features</p>
                <p className="cursor-pointer hover:text-black text-white text-center text-xs md:text-base md:font-semibold">About</p>
                <p className="cursor-pointer hover:text-black text-white text-center text-xs md:text-base md:font-semibold">Whitepaper</p>
            </div>

        </div>
    )
}

export default TopBar;

