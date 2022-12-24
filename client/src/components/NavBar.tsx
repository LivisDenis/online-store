import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts.js";
import {useBearStore} from "../store/store";

const NavBar = () => {
    const navigate = useNavigate();
    const {setUser, setIsAuth, isAuth} = useBearStore()

    const logOut = () => {
        setUser(null)
        localStorage.removeItem('token')
        setIsAuth(false)
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <NavLink style={{color: '#426675'}} to={SHOP_ROUTE}>Online-store</NavLink>
                <Navbar.Collapse id="basic-navbar-nav">
                    {
                        isAuth ?
                            <Nav className="ms-auto">
                                <Button onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
                                <Button className='ms-4' onClick={() => navigate(BASKET_ROUTE)}>Корзина</Button>
                                <Button className='ms-4' onClick={() => logOut()}>Выйти</Button>
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
};

export default NavBar;