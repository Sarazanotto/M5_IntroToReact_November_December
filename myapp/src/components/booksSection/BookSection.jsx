import { useState } from "react";
import fantasyBooks from "./arrayBooks/fantasy.json";
import historyBooks from "./arrayBooks/history.json";
import horrorBooks from "./arrayBooks/horror.json";
import scifiBooks from "./arrayBooks/scifi.json";
import romanceBooks from "./arrayBooks/romance.json";
import ShowAllBooks from "./showAllBooks/ShowAllBooks";
import SearchInput from "../myNav/searchbarInput/SearchInput";

const BookSection = () => {
  const [books, setBooks] = useState([
    ...fantasyBooks,
    ...historyBooks,
    ...horrorBooks,
    ...romanceBooks,
    ...scifiBooks,
  ]);

  const [visibleBook, setVisibleBook] = useState(20);

  const loadBook = () => {
    setVisibleBook((book) => book + 20);
  };

  const loadLessBook=()=>{
    setVisibleBook((book)=>book-20)
  }

  return (
    <main className="mb-5">
      <SearchInput books={books} setBooks={setBooks} />

      <ShowAllBooks books={books.slice(0, visibleBook)} />
      <div className="dvh-100 d-flex justify-content-center m-5 gap-5">
        <button className="btn btn-form text-light" onClick={loadBook}>
          Show More
        </button>
        <button className="btn btn-form text-light" onClick={loadLessBook}>
         Show Less
        </button>

      </div>
    </main>
  );
};

export default BookSection;
