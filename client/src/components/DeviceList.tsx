import React from 'react';
import { Row } from 'react-bootstrap';
import DeviceItem from './DeviceItem.js';
import { useBearStore } from '../store/store';

const DeviceList = () => {
  const { devices } = useBearStore();

  return (
    <Row className='mt-2 flex-wrap'>
      {devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </Row>
  );
};

export default DeviceList;
