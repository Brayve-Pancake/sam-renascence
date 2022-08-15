import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/r-logo.png";
import "../scss/navbar.scss";

export default function NavbarResponsive() {
  return (
    <Navbar
      // bsPrefix="override-navbar"
      collapseOnSelect
      expand="lg"
      fixed="top"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#whatWeDo">
          <a className="navbar-link" href="#whatWeDo">
            <div className="brand-text">
              <img className="logo" src={logo} alt="company logo" />
              RENASCENCE
            </div>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#whatWeDo">What we do</Nav.Link>
            <Nav.Link href="#howItWorks">How it works</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#contact">Book a free consultation</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
