import { Navbar, Nav } from "react-bootstrap";
import MyNavMobile from "./navMobile/MyNavMobile";
import MyNavDesktop from "./MyNavDesktop";


const MyNav = () => {
  return (
    <Navbar className="d-flex justify-content-between mx-5 border-bottom border-2 p-2">
      <Navbar.Brand className="fs-3">EpicBooks</Navbar.Brand>
      <MyNavMobile />
      <MyNavDesktop />
    </Navbar>
  );
};

export default MyNav;