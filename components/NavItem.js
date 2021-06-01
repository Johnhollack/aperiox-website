import Link from "next/link";
import {useRouter} from "next/router";


function NavItem({title, Icon, onClick, classIcon, classTitle }) {


    return (
        <div
            onClick={onClick}
            className="flex flex-col items-center cursor-pointer group h-0 lg:h-auto w-0 lg:w-20 hover:text-white">
            <Icon className={classIcon}/>
            <div className="h-0 lg:h-auto">
                <p className={classTitle}>{title}</p>
            </div>
        </div>

    )
}

export default NavItem;