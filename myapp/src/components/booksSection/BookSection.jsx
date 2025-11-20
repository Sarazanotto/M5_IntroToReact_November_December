import { useState } from "react";
import fantasyBooks from "./books/fantasy.json";
import historyBooks from "./books/history.json";
import AllBooks from "./allBooks/AllBooks";
import SearchInput from "./searchbarInput/SearchInput";

const BookSection = () => {

  const [books, setBooks] = useState([...fantasyBooks, ...historyBooks]);

  return (
    <>
      <SearchInput books={books} setBooks={setBooks}  />
      <AllBooks books={books. slice(0,20)} />
    </>
  );
};

export default BookSection;
