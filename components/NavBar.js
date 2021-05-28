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
    SwitchHorizontalIcon,
    ChatAlt2Icon,
    StatusOnlineIcon,
    LocationMarkerIcon,
    CurrencyDollarIcon,
    ShoppingCartIcon
} from "@heroicons/react/outline";
import NavItem from "./NavItem";
import React from "react";



function NavBar() {
    return (
        <header className="flex flex-col w-screen sm:flex-row my-1 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly ">
                <NavItem title="HOME" Icon={ HomeIcon } url="/ " />
                <NavItem title="AIRDROP" Icon={StatusOnlineIcon} url="/ "/>
                <NavItem title="BOUNTY" Icon={BadgeCheckIcon} url="/ "/>
                <NavItem title="WHITEPAPER" Icon={CollectionIcon} url="/ "/>
                <NavItem title="EXCHANGE" Icon={SwitchHorizontalIcon} url="/ "/>
                <NavItem title="FORUM" Icon={ChatAlt2Icon} url="/ "/>
                <NavItem title="ROADMAP" Icon={LocationMarkerIcon} url="/ "/>
                <NavItem title="PRODUCT" Icon={ShoppingCartIcon} url="/ "/>
                <NavItem title="PARTNERS" Icon={SearchIcon} url="/ "/>
                <NavItem title="TOKENOMICS" Icon={CurrencyDollarIcon} url="/ "/>
                <NavItem title="ABOUT" Icon={UserIcon} url="/ "/>
            </div>
        </header>
    )
}

export default NavBar;

