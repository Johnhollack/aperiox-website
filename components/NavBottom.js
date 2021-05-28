import {  } from "@fortawesome/free-brands-svg-icons";
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
import NavItem from "./NavItem";
import NavText from "./NavText";



function NavBottom() {

    const data =[ {"title":"HOME"}, {"title":"AIRDROP"}, {"title":"BOUNTY"}, {"title":"WHITEPAPER"},
        {"title":"EXCHANGE"}, {"title":"FORUM"}, {"title":"ROADMAP"}, {"title":"PRODUCT"}, {"title":"TOKENOMICS"},
        {"title":"ABOUT"}, {"title":"PARTNERS"},];

    return (
        <div className="flex scrollbar-hide md:h-0 px-10 sm:px-10 text-sm whitespace-nowrap space-x-10 sm:space-x-10 overflow-x-scroll" >
            {Object.entries(data).map(([key, {title, url}]) => (
                <h2
                    key={key}
                    className="mt-3 font-bold last:pr-10 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-yellow-500 "
                >
                    {title}
                </h2>
            ))}

        </div>
    )
}

export default NavBottom;

