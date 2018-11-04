import React from 'react';
import { Link } from 'gatsby';
import { Navbar, NavItem } from 'react-materialize';

const Header = ({ siteTitle }) => (
  <Navbar brand={siteTitle} right style={{ paddingLeft: '10px', backgroundColor: 'navy' }}>
    <NavItem><Link to="/about/">About</Link></NavItem>
    <NavItem><Link to="/services/">Services</Link></NavItem>
    <NavItem><Link to="/contact/">Contact</Link></NavItem>
  </Navbar>

);

export default Header;
