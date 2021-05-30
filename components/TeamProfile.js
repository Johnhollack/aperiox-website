import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import { faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";


function TeamProfile({ imgUrl, name, position, } ) {
    return (
        <div className="flex flex-col justify-center items-center ">
            <div className="flex flex-row justify-center items-center ">
                <div>
                    <img
                        className="h-24 w-24 "
                        src={imgUrl}
                        alt={name}

                    />
                </div>
                <div className="flex flex-col ml-2">
                    <FontAwesomeIcon icon={faLinkedin}  className="h-5 text-black my-1"/>
                    <FontAwesomeIcon icon={faTwitter}  className="h-5 text-black my-1"/>
                    <FontAwesomeIcon icon={faInstagram}  className="h-5 text-black my-1"/>
                </div>

            </div>
            <div className="mt-1">
                <p className="text-sm font-bold text-black">{name}</p>
                <p className="text-xs text-black">{position}</p>
            </div>
        </div>

    )
}

export default TeamProfile;