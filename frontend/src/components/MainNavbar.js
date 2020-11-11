import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';

const MainNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">
                    <div style={{ height: '50px', overflowY: 'hidden' }}>
                        <img
                            src={logo}
                            alt="logo"
                            style={{
                                height: '80px',
                            }}
                        />
                    </div>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Reportes
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink tag={Link} to="/">2020-10-10</NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink tag={Link} to="/">2020-09-10</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink tag={Link} to="/">2020-08-10</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink tag={Link} to="/">2020-07-10</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink tag={Link} to="/">2020-06-10</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink tag={Link} to="/cert">Certificación</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/contact">Contacto</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/help">Ayuda</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        <i>AuaKate 2020</i>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default MainNavbar;
