import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";


function HeaderItem({icon, url}) {
    return (
        <Link href={url}>
            <a
                target="_blank" rel="noopener noreferrer"
                className="flex justify-center items-center cursor-pointer hover:animate-bounce w-14">
                <FontAwesomeIcon icon={icon}  className="h-5 text-blue-400"/>
            </a>
        </Link>

    )
}

export default HeaderItem;