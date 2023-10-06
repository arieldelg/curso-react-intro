import React from "react";
import { ReactComponent as CHECK } from "./check.svg";
import { ReactComponent as DELETE } from "./delete.svg";
import './TodoIcon.css'

const iconTypes = {
    "complete": (color) => <CHECK className="Icon-svg" fill={color}/> ,
    "delete": (color) => <DELETE className="Icon-svg" fill={color}/> ,
}

const TodoIcon = ({type, color, onClick}) => {
    return (
        <span 
        className={`${type}`}
        onClick={onClick}
        >
            {
            iconTypes[type](color)
            }
        </span>
        
    )
}

export {TodoIcon}