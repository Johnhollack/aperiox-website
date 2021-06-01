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



function NavBar(props) {
    const router =useRouter();

    const {
        classIconHome, classTitleHome,
        classIconAirdrop, classTitleAirdrop,
        classIconBounty, classTitleBounty,
        classIconWhitepaper, classTitleWhitepaper,
        classIconExchange, classTitleExchange,
        classIconForum, classTitleForum,
        classIconRoadmap, classTitleRoadmap,
        classIconProduct, classTitleProduct,
        classIconPartners, classTitlePartners,
        classIconTokenomics, classTitleTokenomics,
        classIconAbout, classTitleAbout
    } = props;

    return (
        <header className="flex h-0 opacity-0 lg:h-auto lg:opacity-100 my-1 justify-between items-center">
            <div className="flex flex-grow justify-evenly h-0 opacity-0 lg:h-auto lg:opacity-100">
                <NavItem title="home" Icon={ HomeIcon } onClick={() => router.push(`/`)} classIcon={classIconHome} classTitle={classTitleHome}/>
                <NavItem title="airdrop" Icon={StatusOnlineIcon} onClick={() => router.push(`/airdrop`)} classIcon={classIconAirdrop} classTitle={classTitleAirdrop}/>
                <NavItem title="bounty" Icon={BadgeCheckIcon} onClick={() => router.push(`/bounty`)} classIcon={classIconBounty} classTitle={classTitleBounty}/>
                <NavItem title="whitepaper" Icon={CollectionIcon} onClick={() => router.push(`/whitepaper`)} classIcon={classIconWhitepaper} classTitle={classTitleWhitepaper}/>
                <NavItem title="exchanges" Icon={SwitchHorizontalIcon} onClick={() => router.push(`/exchanges`)} classIcon={classIconExchange} classTitle={classTitleExchange}/>
                <NavItem title="forum" Icon={ChatAlt2Icon} onClick={() => router.push(`/forum`)} classIcon={classIconForum} classTitle={classTitleForum}/>
                <NavItem title="roadmap" Icon={LocationMarkerIcon} onClick={() => router.push(`/roadmap`)} classIcon={classIconRoadmap} classTitle={classTitleRoadmap}/>
                <NavItem title="product" Icon={ShoppingCartIcon} onClick={() => router.push(`/product`)} classIcon={classIconProduct} classTitle={classTitleProduct}/>
                <NavItem title="partners" Icon={SearchIcon} onClick={() => router.push(`/partners`)} classIcon={classIconPartners} classTitle={classTitlePartners}/>
                <NavItem title="tokenomics" Icon={CurrencyDollarIcon} onClick={() => router.push(`/tokenomics`)} classIcon={classIconTokenomics} classTitle={classTitleTokenomics}/>
                <NavItem title="about" Icon={UserIcon} onClick={() => router.push(`/about`)} classIcon={classIconAbout} classTitle={classTitleAbout}/>
            </div>
        </header>
    )
}

export default NavBar;

