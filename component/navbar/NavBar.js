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
              <NavDropdown title="Contact  ">
                <NavDropdown.Item href="/">
                  <a
                    href="https://www.instagram.com/koreyos220/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">
                  <a
                    href="https://discord.com/channels/%E4%B8%8D%E6%98%AFningmeng"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Discord
                  </a>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Facebook">Facebook</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Game  ">
                <NavDropdown.Item href="/Blizzard">Blizzard</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Steam">Steam</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Riot">Riot</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/Line">Line</Nav.Link>
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
