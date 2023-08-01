import './Css/Navbar.css'
import React from 'react'
import { Navbar, Nav, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    
    return (
        <div className="Navbar">
            <Navbar color="transparent" light expand="md">
                 
                <Link to="/">
                    <img
                        src={require('./image/logo.png')}
                        className="Brand"
                        width="60px"
                        alt="logo"
                    />
                </Link>
                 
                <Nav className="me-auto" navbar>
                    <NavItem className="Nav-item">
                        <Link to="/upload" style={{ textDecoration: 'none' }}>
                            <p className="Nav-elements">Upload</p>
                        </Link>
                    </NavItem>
                    <NavItem className="Nav-item">
                        <Link to="/storage" style={{ textDecoration: 'none' }}>
                            <p className="Nav-elements">Files</p>
                        </Link>
                    </NavItem>
                </Nav>
                 
            </Navbar>
        </div>
    )
}

export default NavBar