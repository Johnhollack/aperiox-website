import Link from "next/link";
import React from "react";

function Listings () {
    return (
        <div  className="flex flex-col sm:flex-row h-52 w-screen justify-evenly items-center bg-white overflow-hidden">
            <Link href={'https://bscscan.com/token/0x989d5fbbbf11f0bccd774cb364eb0349e7b1a56f'}>
                <a
                    target="_blank" rel="noopener noreferrer"
                    className="cursor-pointer h-8">
                    <img layout="responsive" style={{width: 200, height: 50}} src='/bsc.png'/>
                </a>
            </Link>

            <Link href={'https://coinmarketcap.com'}>
                <a
                    target="_blank" rel="noopener noreferrer"
                    className="cursor-pointer h-8 ">
                    <img layout="responsive" style={{width: 200, height: 50}} src='/coinmarketcap.png'/>
                </a>
            </Link>

            <Link href={'https://www.coingecko.com/'}>
                <a
                    target="_blank" rel="noopener noreferrer"
                    className="cursor-pointer h-">
                    <img layout="responsive" style={{width: 200, height: 60}} src='/coingecko.png'/>
                </a>
            </Link>

        </div>
    )
};

export default Listings;