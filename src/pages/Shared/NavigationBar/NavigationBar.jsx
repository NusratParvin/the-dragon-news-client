import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { FaUser, FaUserCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const NavigationBar = () => {

    const { user , logOut } = useContext(AuthContext)

    const handleLogOut =()=>{
        logOut()
        .then()
        .catch(error=>{console.log(error)})
    }

    return (
        <Container>

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to='/category/0'>Home</Link>

                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>

                        </Nav>
                        <Nav>
                            {user &&
                                <FaUserCircle style={{ fontSize: '1.9rem' }}></FaUserCircle>
                            }

                            {user ? <Button onClick={handleLogOut} variant="secondary">Log out</Button>
                                :
                                <Link to={'/login'}>
                                    <Button variant="secondary">Login</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default NavigationBar;