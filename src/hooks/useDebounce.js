import { useEffect, useState } from "react"

const useDebounce = (value,delay = 1000) =>{
    
    const [debouncedValue,setDebouncedValue] = useState(value)

    useEffect(()=>{
        
        const timeout = setTimeout(()=>{
            setDebouncedValue(value)
        },delay)

        return () => clearInterval(timeout)
    },[value])

    return debouncedValue
}

export default useDebounce