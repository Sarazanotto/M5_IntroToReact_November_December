import React, { useState } from "react";
import "./style.css";
import { Offcanvas, Button } from "react-bootstrap";
import { Menu } from "lucide-react";
import LinksNav from "../linksNav/LinksNav";

const MyNavMobile = () => {
  const [showCanvas, setShowCanvas] = useState(false);

  const openCanvas = () => {
    setShowCanvas(true);
  };
  const closeCanvas = () => {
    setShowCanvas(false);
  };

  return (
    <div className="d-md-none">
      <Button className="burger-btn" onClick={openCanvas}>
        <Menu />
      </Button>

      <Offcanvas show={showCanvas} onHide={closeCanvas} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="px-4">EpicBooks</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="px-5">
          <LinksNav />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default MyNavMobile;
