import MyNav from "../components/myNav/MyNav";
import Welcome from "../components/Welcome/Welcome";
import BookSection from "../components/booksSection/BookSection";
import MyFooter from "../components/footer/MyFooter";

import SearchInput from "../components/myNav/searchbarInput/SearchInput";
import React from 'react'

const Homepage = () => {
  return (
  <div className="h-100 d-flex flex-column justify-content-space-between">
      <MyNav />
      <Welcome />
      <SearchInput />
      <BookSection />
      <MyFooter />
    </div>
  )
}

export default Homepage
