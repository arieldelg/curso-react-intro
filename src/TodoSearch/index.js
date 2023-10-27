import React from "react";
import { TodoContext} from "../TodoContext";

const TodoSearch = () => {
    const {
        searchValue, 
        setSearchValue, 
        search,
    } = React.useContext(TodoContext)
    return(
        <div className='search'>
                <input type='text' placeholder='Busca Aqui' onChange={search} value={searchValue}/>
        </div>
    )
}

export {TodoSearch}