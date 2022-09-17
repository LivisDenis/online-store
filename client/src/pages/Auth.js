import React, {useContext, useState} from 'react';
import {Button, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Auth = observer(() => {
    const location = useLocation()
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const check = async () => {
        try {
            let data
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
                console.log(data)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            setError(e.response.data.message.message)
        }
    }

    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight - 164}}>
            <Form style={{width: 600}} className='bg-light p-4'>
                <h2 className='text-center'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form.Control
                    className='mt-3'
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Form.Control
                    className='mt-3'
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <div className='text-danger'>{error}</div>
                <Row className='mt-3 m-0'>
                    {
                        isLogin ?
                            <div className='p-0'>Нет аккаунта?
                                <NavLink className='ms-2' to={REGISTRATION_ROUTE}>Зарегестрируйтесь</NavLink>
                            </div>
                            :
                            <div className='p-0'>Уже есть аккаунт?
                                <NavLink className='ms-2' to={LOGIN_ROUTE}>Войдите</NavLink>
                            </div>
                    }
                    <Button
                        className='mt-3'
                        variant="primary"
                        onClick={check}
                    >
                        {isLogin ? 'Войти' : 'Зарегестрироваться'}
                    </Button>
                </Row>
            </Form>
        </Container>
    );
});

export default Auth;