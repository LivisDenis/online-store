import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import star from "../assets/star.svg";
import {useParams} from "react-router-dom";
import {fetchOneDevice} from "../http/deviceAPI";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <Container className='mt-5'>
            <Row className='bg-light'>
                <Col md={4}>
                    <Image src={process.env.REACT_APP_API_URL + device.img} width={250}/>
                </Col>
                <Col className='p-3 d-flex flex-column' md={4}>
                    <div>
                        <div>{device.name}</div>
                        <div className='d-flex align-items-center'>{device.rating}<Image width={16} height={16} src={star}/></div>
                    </div>
                    <div className='mt-auto'>
                        <div style={{fontSize: 20}}>Цена: {device.price}</div>
                        <Button>Добавить в корзину</Button>
                    </div>
                </Col>
            </Row>
            <Row className='mt-4'>
                <h3>Характеристики:</h3>
                {device.info.map((item, i) =>
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