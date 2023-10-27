import React from "react";

// const defaultTodos = [
//   {text: 'Aprender React', completed: false},
//   {text: 'Aprender CSS', completed: false},
//   {text: 'Aprender HTML', completed: false},
//   {text: 'Arreglar mi cuarto', completed: false},
//   {text: 'Repasar Javascript', completed: false},
//   {text: 'Perdonar a mis Amigos', completed: true}
// ]
// localStorage.setItem('TODOS-V1', JSON.stringify(defaultTodos))

const useLocalStorage = (initalName, initialValue) => {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setloading] = React.useState(true);
  const [error, setError] = React.useState(false);

  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const getItem = localStorage.getItem(initalName)
        let parsedItem;
        
        if(!getItem) {
          localStorage.setItem(initalName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(getItem)
          setItem(parsedItem)
        }
        setloading(false)
      } catch (error) {
        setloading(false)
        setError(true)
      }
  }, 2000)
}, [])
    const saveItem = (newItem) => {
      localStorage.setItem(initalName, JSON.stringify(newItem))
      setItem(newItem)
    }
    return {item, saveItem, loading, error}
}

export {useLocalStorage}