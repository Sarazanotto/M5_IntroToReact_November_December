import { Children, createContext, useState} from "react";
import fantasyBooks from "../components/booksSection/arrayBooks/fantasy.json";
import historyBooks from "../components/booksSection/arrayBooks/history.json";
import horrorBooks from "../components/booksSection/arrayBooks/horror.json";
import romanceBooks from "../components/booksSection/arrayBooks/romance.json";
import scifiBooks from "../components/booksSection/arrayBooks/scifi.json";
export const InputSearchContext= createContext()
export const InputSearchProvider=({children})=>{
     const [books, setBooks] = useState([
    ...fantasyBooks,
    ...historyBooks,
    ...horrorBooks,
    ...romanceBooks,
    ...scifiBooks,
  ]);

  return(
    <InputSearchContext.Provider value={{books,setBooks}}>
    {children}
    </InputSearchContext.Provider>
  )
}
