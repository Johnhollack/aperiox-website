import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";

function HeaderItem({icon, url}) {
    return (
        <Link href={url}>
            <a
                target="_blank" rel="noopener noreferrer"
                className="flex justify-center items-center cursor-pointer hover:animate-bounce w-14 sm:mt-0 sm:w-6 hover:text-white">
                <FontAwesomeIcon icon={icon}  className="h-6 opacity-100 sm:opacity-100 text-yellow-500"/>
            </a>
        </Link>

    )
}

export default HeaderItem;