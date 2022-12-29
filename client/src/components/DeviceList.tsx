import React from 'react';
import DeviceItem from './DeviceItem.js';
import { useBearStore } from '../store/store';

const DeviceList = () => {
  const { devices } = useBearStore();

  return (
    <div className='mt-2 flex-wrap'>
      {devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </div>
  );
};

export default DeviceList;
