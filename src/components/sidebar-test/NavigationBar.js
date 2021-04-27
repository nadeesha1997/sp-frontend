import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import FirstPageNavbar from "../FirstPageNavbar";
const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <FirstPageNavbar/>
    <Navbar expand="lg">
      <Navbar.Brand href="/">LSMS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      {/*<Form className="form-center">*/}
      {/*  <FormControl type="text" placeholder="Search" className="" />*/}
      {/*</Form>*/}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {/*<Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> */}
          {/*<Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>*/}
            <Nav.Item><Nav.Link href="/">Nadeesha</Nav.Link></Nav.Item>
            <Nav.Item><button>Logout</button></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)