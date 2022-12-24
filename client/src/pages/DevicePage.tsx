import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import star from "../assets/star.svg";
import {useParams} from "react-router-dom";
import {fetchOneDevice} from "../http/deviceAPI";
import {IDevice} from "../store/types";
import {useBearStore} from "../store/store";

const DevicePage = () => {
    const [devices, setDevice] = useState<IDevice>({info: []})
    const {id} = useParams()

    const {setBasketDevices} = useBearStore()

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    const addDeviceOnBasket = () => {
        fetchOneDevice(id).then(data => setBasketDevices(data))
    }

    return (
        <Container className='mt-5'>
            <Row className='bg-light'>
                <Col md={4}>
                    <Image src={process.env.REACT_APP_API_URL + devices.img} width={250}/>
                </Col>
                <Col className='p-3 d-flex flex-column' md={4}>
                    <div>
                        <div>{devices.name}</div>
                        <div className='d-flex align-items-center'>{devices.rating}<Image width={16} height={16} src={star}/></div>
                    </div>
                    <div className='mt-auto'>
                        <div style={{fontSize: 20}}>Цена: {devices.price}</div>
                        <Button onClick={addDeviceOnBasket}>Добавить в корзину</Button>
                    </div>
                </Col>
            </Row>
            <Row className='mt-4'>
                <h3>Характеристики:</h3>
                {devices?.info.map((item, i) =>
                    <div
                        style={{background: i % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}
                        key={item.id}>
                        {item.title}: {item.description}
                    </div>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;