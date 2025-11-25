import { Navbar, Nav, Button } from "react-bootstrap";
import MyNavMobile from "./navMobile/MyNavMobile";
import MyNavDesktop from "./MyNavDesktop";
import { Moon, Sun, SunMoon } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";


const MyNav = () => {
  const {toggleMode}= useContext(ThemeContext)
  return (
    <Navbar className="d-flex justify-content-between mx-5 border-bottom border-2 p-2">
      <Navbar.Brand className="fs-3 navBrand">EpicBooks</Navbar.Brand>
      <MyNavMobile />
      <MyNavDesktop />
        <Button variant="outline-dark" onClick={toggleMode}><SunMoon/></Button>
    </Navbar>
  );
};

export default MyNav;