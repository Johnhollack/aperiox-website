import Link from "next/link";

function NavText({title, Icon, url}) {
    return (
        <Link href={url}>
            <p className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text:red-500 ">{title}</p>
        </Link>

    )
}

export default NavText;