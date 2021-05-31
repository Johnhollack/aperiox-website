import Link from "next/link";
import {useRouter} from "next/router";

function NavItem({title, Icon, onClick}) {



    return (
        <div
            onClick={onClick}
            className="flex flex-col items-center cursor-pointer group w-8 sm:w-14 md:w-20 hover:text-white">
            <Icon className="h-5 sm:h-6 group-hover:animate-bounce group-hover:text-yellow-500 group-hover:text-yellow-500 "/>
            <div className="h-0 sm:h-auto">
                <p className="opacity-0 md:opacity-100 text-xs font-bold py-3 group-hover:text-yellow-500 uppercase group-hover:opacity-100 tracking-widest">{title}</p>
            </div>
        </div>

    )
}

export default NavItem;