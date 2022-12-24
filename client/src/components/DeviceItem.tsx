import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import star from '../assets/star.svg'
import {DEVICE_ROUTE} from "../utils/consts.js";
import {IDevice} from "../store/types";

interface DeviceItemProps {
    device: IDevice
}

const DeviceItem: React.FC<DeviceItemProps> = ({device}) => {
    const navigate = useNavigate();

    return (
        <Col className='mt-3' md={3} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{maxWidth: 200, cursor: 'pointer'}}>
                <Image max-width={200} height={200} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className='p-2'>
                    <div>{device.name}</div>
                    <div className='d-flex align-items-center'>{device.rating}<Image width={16} height={16} src={star}/></div>
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;