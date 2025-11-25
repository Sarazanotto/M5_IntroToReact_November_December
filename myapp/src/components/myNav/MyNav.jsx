import { Navbar, Nav, Button } from "react-bootstrap";
import MyNavMobile from "./navMobile/MyNavMobile";
import MyNavDesktop from "./MyNavDesktop";
import { Moon, Sun, SunMoon } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import './style.css'


const MyNav = () => {
  const {toggleMode}= useContext(ThemeContext)
  return (
    <Navbar className="d-flex justify-content-between mx-5 border-bottom border-2 p-2 navbarBorder">
      <Navbar.Brand className="fs-3 navBrand">EpicBooks</Navbar.Brand>
      <MyNavMobile />
      <MyNavDesktop />
        <Button className="btn-mode" size="sm" onClick={toggleMode}><SunMoon /></Button>
    </Navbar>
  );
};

export default MyNav;