import React from "react"

const useLocalStorage = (itemName, initialItem) => {
    const [item, setItem] = React.useState(initialItem)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName)
                let parsedItem
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialItem))
                    parsedItem = initialItem
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem)
                }
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setError(true)
            }
        }, 2000)
    }, [])
     
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    }
    return {
        item, 
        saveItem,
        loading,
        error,
    }
  }

  export {useLocalStorage}