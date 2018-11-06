import React from 'react';
import { Link } from 'gatsby';
import { Navbar, NavItem, Icon } from 'react-materialize';

import md from '../images/md.png'

const Header = ({ siteTitle }) => (
  <Navbar brand={siteTitle} right style={{ paddingLeft: '10px', backgroundColor: 'navy' }}>
    <NavItem><Link to="/about/">About</Link></NavItem>
    <NavItem><Link to="/services/">Services</Link></NavItem>
    <NavItem><Link to="/contact/">Contact</Link></NavItem>
  </Navbar>

);

export default Header;
