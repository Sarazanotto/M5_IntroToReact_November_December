import { Navbar, Nav } from "react-bootstrap";
import MyNavMobile from "./navMobile/MyNavMobile";
import MyNavDesktop from "./MyNavDesktop";

const MyNav = () => {
  return (
    <Navbar className="d-flex justify-content-between mx-5">
      <Navbar.Brand>LOGO</Navbar.Brand>
      <MyNavMobile />
      <MyNavDesktop />
    </Navbar>
  );
};

export default MyNav;