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



function NavBar() {
    return (
        <header className="h-0 sm:h-auto flex flex-col sm:flex-row my-5 justify-between items-center h-auto">
            <div className="flex h-0 md:h-auto flex-grow justify-evenly ">
                <NavItem title="HOME" Icon={ HomeIcon } url="https://apeirox.com/ " />
                <NavItem title="AIRDROP" Icon={LightningBoltIcon} url="https://apeirox.com/ "/>
                <NavItem title="BOUNTY" Icon={BadgeCheckIcon} url="https://apeirox.com/ "/>
                <NavItem title="WHITEPAPER" Icon={CollectionIcon} url="https://apeirox.com/ "/>
                <NavItem title="EXCHANGE" Icon={SearchIcon} url="https://apeirox.com/ "/>
                <NavItem title="FORUM" Icon={UserIcon} url="https://apeirox.com/ "/>
                <NavItem title="ROADMAP" Icon={BadgeCheckIcon} url="https://apeirox.com/ "/>
                <NavItem title="PRODUCT" Icon={CollectionIcon} url="https://apeirox.com/ "/>
                <NavItem title="PARTNERS" Icon={SearchIcon} url="https://apeirox.com/ "/>
                <NavItem title="TOKENOMICS" Icon={UserIcon} url="https://apeirox.com/ "/>
                <NavItem title="ABOUT" Icon={UserIcon} url="https://apeirox.com/ "/>
            </div>
        </header>
    )
}

export default NavBar;

