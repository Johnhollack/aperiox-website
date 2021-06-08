import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";


function HeaderItem({icon, url}) {
    return (
        <Link href={url}>
            <a
                target="_blank" rel="noopener noreferrer"
                className="flex justify-center items-center cursor-pointer hover:animate-bounce w-5 md:w-8">
                <FontAwesomeIcon icon={icon}  className="h-4 md:h-6 text-white"/>
            </a>
        </Link>

    )
}

export default HeaderItem;