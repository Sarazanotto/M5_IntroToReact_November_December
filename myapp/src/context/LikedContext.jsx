import { createContext, useState } from "react";

export const LikedContext = createContext();
export const LikedProvider = ({ children }) => {
 
  const [like, setLike] = useState({});


  const toggleLike = (asin) => {
    setLike(prev=>({
      ...prev,
      [asin]:!prev[asin]
    }));

  };
return(
    <LikedContext.Provider value={{toggleLike, like}}>
        {children}
    </LikedContext.Provider>
)

};
