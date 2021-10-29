import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { HashLink } from "react-router-hash-link";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../images/logo.png";

const Header = () => {
  const { user, handleSignOut } = useAuth();
  return (
    <>
      <Navbar
        className="nav-bar"
        collapseOnSelect
        bg="light"
        variant="light"
        expand="lg"
        sticky="top"
      >
        <Container>
          <div className="d-flex">
            <Navbar.Brand>
              <img className="w-25" src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </div>
          <Navbar.Collapse className=" ">
            <Nav.Link
              className="text-center text-dark"
              as={HashLink}
              to="/home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="text-center text-dark"
              as={HashLink}
              to="/destinations"
            >
              Tours
            </Nav.Link>
            <Nav.Link
              className="text-center text-dark"
              as={HashLink}
              to="/cart"
            >
              My Orders
            </Nav.Link>
            <Nav.Link
              className="text-center text-dark"
              as={HashLink}
              to="/allOrders"
            >
              All Orders
            </Nav.Link>
            {user.email ? (
              <Nav.Link className="text-dark text-center">
                Signed: {user.displayName}
                <span className="ps-3" onClick={handleSignOut}>
                  Logout
                </span>
              </Nav.Link>
            ) : (
              <Nav.Link className="text-center text-dark" as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
