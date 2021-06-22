import Link from "next/link";
import React from "react";


function FeatureItem({ imgUrl, name, url} ) {
    return (
        <div className="flex flex-col justify-center items-center w-48 mb-5 md:mb-0">
            <div className="flex flex-row justify-center items-center ">
                <Link href={url}>
                    <a target="_blank" rel="noopener noreferrer">
                        <img
                            className="h-16 w-32 object-contain"
                            src={imgUrl}
                            alt={name}
                        />
                    </a>
                </Link>
            </div>
        </div>

    )
}

export default FeatureItem;