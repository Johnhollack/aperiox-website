import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import { faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";


function TeamProfile({ imgUrl, name, position, url} ) {
    return (
        <div className="flex flex-col justify-center items-center w-48 mb-5 md:mb-0">
            <div className="flex flex-row justify-center items-center ">
                <div>
                    <img
                        className="h-24 w-24 "
                        src={imgUrl}
                        alt={name}
                    />
                </div>
                <div className="flex flex-col ml-2">
                    <Link href={url}>
                        <a target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin}  className="h-5 text-black my-1 cursor-pointer hover:animate-bounce hover:text-gray-700 transform"/>
                        </a>
                    </Link>

                </div>

            </div>
            <div className="mt-1">
                <p className="text-sm font-bold text-center text-black">{name}</p>
                <p className="text-xs text-black text-center ">{position}</p>
            </div>
        </div>

    )
}

export default TeamProfile;