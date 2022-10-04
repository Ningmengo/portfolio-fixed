import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../navbar/NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = ({ isActive, setIsActive }) => {
  function ChangeTheme() {
    setIsActive(!isActive);
  }
  return (
    <div className="NavBar">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" className="title">
            Portfolio
          </Navbar.Brand>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Game  ">
                <NavDropdown.Item href="/action/Blizard">
                  Blizard
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/action/Steam">Steam</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/action/Riot">Riot</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="">Unknown</Nav.Link>
              <button className="btn-changeTheme" onClick={() => ChangeTheme()}>
                Change Theme
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
