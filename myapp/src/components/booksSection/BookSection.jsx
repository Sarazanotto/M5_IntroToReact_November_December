import { useState } from "react";
import fantasyBooks from "./books/fantasy.json";
import historyBooks from "./books/history.json";
import AllBooks from "./allBooks/AllBooks";
import SearchInput from "./searchbarInput/SearchInput";

const BookSection = () => {
  const allBooks=[...fantasyBooks,...historyBooks]
  const [books, setBooks] = useState([...fantasyBooks, ...historyBooks]);

  return (
    <>
      <SearchInput books={books} setBooks={setBooks} originalBooks={allBooks} />
      <AllBooks books={books. slice(0,10)} />
    </>
  );
};

export default BookSection;
