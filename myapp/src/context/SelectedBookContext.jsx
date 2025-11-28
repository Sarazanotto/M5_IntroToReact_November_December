import { createContext, useState } from "react";

export const SelectedBookContext= createContext();
export const SelectedBookProvider= ({children})=>{
      const [isSelected, setIsSelected] = useState('');


      return(
        <SelectedBookContext.Provider value={{isSelected, setIsSelected}}>
            {children}
        </SelectedBookContext.Provider>
      )
}

