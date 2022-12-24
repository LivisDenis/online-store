import React from 'react';
import {Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem.js";
import {observer} from "mobx-react-lite";
import {useBearStore} from "../store/store";

const DeviceList = () => {
    const {devices} = useBearStore()

    return (
        <Row className='flex-wrap mt-2'>
            {devices.map(device =>
                <DeviceItem key={device.id} device={device}/>
            )}
        </Row>
    );
};

export default DeviceList;