import { useState } from "react";
import fantasyBooks from "./books/fantasy.json";
import historyBooks from "./books/history.json";
import horrorBooks from './books/horror.json'
import scifiBooks from './books/scifi.json'
import romanceBooks from './books/romance.json'
import AllBooks from "./allBooks/AllBooks";
import SearchInput from "./searchbarInput/SearchInput";

const BookSection = () => {

  const [books, setBooks] = useState([...fantasyBooks, ...historyBooks, ...horrorBooks, ...romanceBooks, ...scifiBooks]);



  return (
    <main className="mb-5">
      <SearchInput books={books} setBooks={setBooks}
      
      />

      <AllBooks books={books. slice(0,20)} />
    </main>
  );
};

export default BookSection;
