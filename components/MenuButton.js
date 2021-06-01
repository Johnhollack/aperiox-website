import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";


function MenuButton({icon, onClick, className}) {
    return (
        <FontAwesomeIcon
            onClick={onClick}
            icon={icon}
            className={className}/>
    )
}

export default MenuButton;