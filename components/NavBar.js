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
import {useRouter} from "next/router";



function NavBar() {
    const router =useRouter();

    return (
        <header className="flex flex-col w-screen sm:flex-row my-1 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly ">
                <NavItem title="home" Icon={ HomeIcon }  onClick={() => router.push(`/`)}/>
                <NavItem title="airdrop" Icon={StatusOnlineIcon} onClick={() => router.push(`/airdrop`)}/>
                <NavItem title="bounty" Icon={BadgeCheckIcon} onClick={() => router.push(`/bounty`)}/>
                <NavItem title="whitepaper" Icon={CollectionIcon} onClick={() => router.push(`/whitepaper`)}/>
                <NavItem title="exchange" Icon={SwitchHorizontalIcon} onClick={() => router.push(`/exchange`)}/>
                <NavItem title="forum" Icon={ChatAlt2Icon} onClick={() => router.push(`/forum`)}/>
                <NavItem title="roadmap" Icon={LocationMarkerIcon} onClick={() => router.push(`/roadmap`)}/>
                <NavItem title="product" Icon={ShoppingCartIcon} onClick={() => router.push(`/product`)}/>
                <NavItem title="partners" Icon={SearchIcon} onClick={() => router.push(`/partners`)}/>
                <NavItem title="tokenomics" Icon={CurrencyDollarIcon} onClick={() => router.push(`/tokenomics`)}/>
                <NavItem title="about" Icon={UserIcon} onClick={() => router.push(`/about`)}/>
            </div>
        </header>
    )
}

export default NavBar;

