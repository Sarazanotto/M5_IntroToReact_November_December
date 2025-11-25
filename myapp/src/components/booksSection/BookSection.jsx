import { useContext, useState } from "react";

import ShowAllBooks from "./showAllBooks/ShowAllBooks";

import { InputSearchContext } from "../../context/inputSearchContext";

const BookSection = () => {

const {books}= useContext(InputSearchContext)
  const [visibleBook, setVisibleBook] = useState(20);

  const loadBook = () => {
    setVisibleBook((book) => Math.min(book + 20, books.length));
  };

  const loadLessBook = () => {
    setVisibleBook((book) => Math.max(book - 20, 20));
  };

  return (
    <main className="mb-5">
     {/* <SearchInput books={books} setBooks={setBooks} />
*/}
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
