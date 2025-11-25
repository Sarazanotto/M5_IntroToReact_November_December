import { createContext, useEffect, useState } from "react";

export const ThemeContext= createContext()

export const ThemeProvider=({children})=>{
    const [isDarkMode, setIsDarkMode]=useState(false)
    const toggleMode= ()=>setIsDarkMode(!isDarkMode)

useEffect(()=>{
    if(isDarkMode){
        document.body.classList.add('dark')
    }else{
        document.body.classList.remove('dark')
    }
},[isDarkMode])

    return (
<ThemeContext.Provider value={{isDarkMode, toggleMode}}>
    {children}
</ThemeContext.Provider>

    )
}