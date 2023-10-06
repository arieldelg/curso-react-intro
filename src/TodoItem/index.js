import { RxCheck } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import React from "react";
import './TodoItem.css'
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";

const TodoItem = ({text, completed, onComplete, onDelete}) => {
    return (
      <li>
        <CompleteIcon
        completed={completed}
        onComplete={onComplete}
        />
        {/* <span className={`complete ${completed && 'completeisTrue'}`} onClick={onComplete}><RxCheck /></span>  esto es con React-Icon*/}
        <p className={`${completed && 'textLine'}`}>{text}</p>
        {/* <span className='delete deleteHover' onClick={onDelete}><AiOutlineClose/></span> esto es con React-Icon*/}
        <DeleteIcon
        onDelete={onDelete}
        />
      </li>
    )
  };

  export {TodoItem}