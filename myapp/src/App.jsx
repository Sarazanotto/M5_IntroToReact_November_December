import MyNav from "./components/myNav/MyNav"
import Welcome from './components/Welcome/Welcome'
import AllTheBooks from './components/allTheBooks/AllTheBook'
import MyFooter from "./components/footer/MyFooter"



function App() {
  

  return (
    <div className="h-100 d-flex flex-column justify-content-space-between">
    <MyNav/>
    <Welcome/>
    <AllTheBooks/>
    <MyFooter/>
    </div>
  )
}

export default App