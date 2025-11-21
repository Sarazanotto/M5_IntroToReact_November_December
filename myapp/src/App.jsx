import MyNav from "./components/myNav/MyNav"
import Welcome from './components/Welcome/Welcome'
import BookSection from './components/booksSection/BookSection'
import MyFooter from "./components/footer/MyFooter"



function App() {
  

  return (
    <div className="h-100 d-flex flex-column justify-content-space-between">
    <MyNav/>
    <Welcome/>
    <BookSection/>
    <MyFooter/>
    </div>
  )
}

export default App


