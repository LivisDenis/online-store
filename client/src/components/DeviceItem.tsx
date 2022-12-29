import React from 'react';
import { Link } from 'react-router-dom';
import star from '../assets/star.svg';
import { DEVICE_ROUTE } from '../utils/consts.js';
import { IDevice } from '../store/types';

interface DeviceItemProps {
  device: IDevice;
}

const DeviceItem: React.FC<DeviceItemProps> = ({ device }) => (
  <Link to={`${DEVICE_ROUTE}/${device.id}`} className='max-w-[200px] border border-black'>
    <div className='flex cursor-pointer flex-col'>
      <img src={process.env.REACT_APP_API_URL + device.img} alt='img' className='max-w-[200px]' />
      <div className='p-2'>
        <div>{device.name}</div>
        <div className='flex items-center'>
          {device.rating}
          <img width={16} height={16} src={star} alt='star' />
        </div>
      </div>
    </div>
  </Link>
);

export default DeviceItem;
