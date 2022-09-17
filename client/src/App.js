import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {observer} from "mobx-react-lite";
import {Spinner} from "react-bootstrap";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(()=> setLoading(false))
    }, [])

    return (
        <BrowserRouter>
            <NavBar/>
            {loading
                ? <Spinner className='text-center' animation={'grow'}/>
                : <AppRouter/>
            }
        </BrowserRouter>
    );
});

export default App;