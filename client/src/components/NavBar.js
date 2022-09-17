import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <NavLink style={{color: '#426675'}} to={SHOP_ROUTE}>Online-store</NavLink>
                <Navbar.Collapse id="basic-navbar-nav">
                    {
                        user.isAuth ?
                            <Nav className="ms-auto">
                                <Button onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
                                <Button className='ms-2' onClick={() => logOut()}>Выйти</Button>
                            </Nav>
                        :
                            <Nav className="ms-auto">
                                <Button onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                            </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
});

export default NavBar;