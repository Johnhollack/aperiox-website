import Link from "next/link";

function NavItem({title, Icon, url}) {
    return (
        <Link href={url}>
            <div className="flex flex-col items-center cursor-pointer group w-8 sm:w-14 md:w-20 hover:text-white">
                <Icon className="h-5 sm:h-6 lg:h-8 group-hover:animate-bounce group-hover:text-yellow-500 "/>
                <div className="h-0 sm:h-auto">
                    <p className="opacity-0 md:opacity-100 text-xs font-bold py-3 group-hover:opacity-100 tracking-widest">{title}</p>
                </div>
            </div>
        </Link>

    )
}

export default NavItem;