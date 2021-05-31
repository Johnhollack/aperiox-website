import {  } from "@fortawesome/free-brands-svg-icons";
import request from "../utils/request";
import {useRouter} from "next/router";



function NavBottom() {

    const router =useRouter();

    const data =[ {"title":"HOME"}, {"title":"AIRDROP"}, {"title":"BOUNTY"}, {"title":"WHITEPAPER"},
        {"title":"EXCHANGE"}, {"title":"FORUM"}, {"title":"ROADMAP"}, {"title":"PRODUCT"}, {"title":"TOKENOMICS"},
        {"title":"ABOUT"}, {"title":"PARTNERS"},];

    return (
        <div className="relative">
            <div className="flex scrollbar-hide px-10 sm:px-10 text-sm whitespace-nowrap space-x-10 sm:space-x-10 overflow-x-scroll" >
                {Object.entries(request).map(([key, {title, url}]) => (
                    <h2
                        key={key}
                        onClick={() => router.push(`/?${key}`)}
                        className="mt-3 font-bold last:pr-10 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-yellow-500 "
                    >
                        {title}
                    </h2>
                ))}

            </div>
            <div className="absolute top-0 right-o bg-gradient-to-l from[#06202A] h10 w-1/12"/>
        </div>
    )
}

export default NavBottom;

