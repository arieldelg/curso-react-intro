import './TodoItem.css'
const TodoItem = ({text, completed}) => {
    return (
      <li>
        <span className={`complete ${completed && 'completeisTrue'}`}>V</span>
        <p className={`${completed && 'textLine'}`}>{text}</p>
        <span className='delete deleteHover'>X</span>
      </li>
    )
  };

  export {TodoItem}