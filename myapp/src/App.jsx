import MyNav from "./components/myNav/MyNav"
import Welcome from './components/Welcome/Welcome'
import BookSection from './components/booksSection/BookSection'
import MyFooter from "./components/footer/MyFooter"
import { ThemeProvider } from "./context/ThemeContext"
import { CommentsProvider } from "./context/CommentsContext"



function App() {
  

  return (
    <ThemeProvider>
    <div className="h-100 d-flex flex-column justify-content-space-between">
    <MyNav/>
    <Welcome/>
    <CommentsProvider>
    <BookSection/>
    </CommentsProvider>
    <MyFooter/>
    </div>
    </ThemeProvider>
  )
}

export default App


