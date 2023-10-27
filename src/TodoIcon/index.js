import React from "react";
import { ReactComponent as DeleteSVG} from "../imagenes-svg/delete.svg";
import { ReactComponent as CheckSVG} from "../imagenes-svg/done.svg";

const Icons = {
    'delete': (color) => <DeleteSVG  fill={color} className="Icon-Svg Icon-Svg-delete"  />,
    'completed': (color) => <CheckSVG fill={color} className="Icon-Svg Icon-Svg-completed" />,
}

const TodoIcon = ({ type, color, done ,deleteTodo}) => {
    let typeOfFunction;
    if(type === 'completed') {
        typeOfFunction = done
    } else {
        typeOfFunction = deleteTodo
    }
    return (
        <span className={`${type}`} onClick={typeOfFunction} >
            {Icons[type](color)}
        </span>
    )
}

export {TodoIcon}