import {faFacebook, faTwitter, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import HeaderItem from "./HeaderItem";


function TopBar() {
    return (
        <div className="flex w-screen h-12 justify-between px-1 px-5 md:px-10 items-center">
            <div className="flex justify-center items-center">
                <img src="/logo.svg" alt="GoFree Logo" className="h-6 w-6 mr-1"/>
                <p className="text-white py-1 md:py-0 text-xs md:text-sm md:font-semibold">GoFree</p>
            </div>


            <div className="flex justify-evenly items-center">
                <p className="cursor-pointer hover:text-gray-300 text-white w-12 md:w-16 text-center text-xs md:text-sm md:font-semibold">Home</p>
                <p className="cursor-pointer hover:text-gray-300 text-white w-12 md:w-24 text-center text-xs md:text-sm md:font-semibold">Products</p>
            </div>

        </div>
    )
}

export default TopBar;

