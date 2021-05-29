import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/image";
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";



function Header() {
    return (
        <header className="flex sm:flex-row my-3 justify-between items-center h-auto w-screen">
            <img src="/logo3.png" alt="Apeirox Logo" className="ml-10 h-10 sm:h-12 object-contain" />

            <div className="flex flex-grow items-center justify-end sm:justify-evenly w-xs sm:max-w-xs mr-10 sm:mr-0">
                <HeaderItem icon={faFacebook} url="https://facebook.com/apeiroxcom" />
                <HeaderItem icon={faTwitter} url="https://twitter.com/apeiroxcom" />
                <HeaderItem icon={faInstagram} url="https://instagram.com/apeiroxcom" />
            </div>

        </header>
    )
}

export default Header;

