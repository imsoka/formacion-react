import { useState, useEffect } from 'react'

export default function Button() {
    const [value, setValue] = useState("true")

    useEffect(() => {
        console.log("montado");
    }, [])

    const toggleValue = () => {
        if(value === "false") setValue("true")
        if(value === "true") setValue("false")
    }

    return ( <button onClick={toggleValue}> {value} </button> )
}