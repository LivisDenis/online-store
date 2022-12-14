import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import star from '../assets/star.svg';
import { fetchOneDevice } from '../http/deviceAPI';
import { IDevice } from '../store/types';
import { useBearStore } from '../store/store';

const DevicePage = () => {
  const [devices, setDevice] = useState<IDevice>();
  const { id } = useParams();

  const { setBasketDevices } = useBearStore();

  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice({ ...data, info: [] }));
  }, []);

  const addDeviceOnBasket = () => {
    fetchOneDevice(id).then((data) => setBasketDevices(data));
  };

  return (
    <div className='mt-5'>
      <div className='bg-light'>
        <div>
          <img src={process.env.REACT_APP_API_URL! + devices?.img} width={250} alt='img' />
        </div>
        <div className='d-flex flex-column p-3'>
          <div>
            <div>{devices?.name}</div>
            <div className='d-flex align-items-center'>
              {devices?.rating}
              <img width={16} height={16} src={star} alt='img' />
            </div>
          </div>
          <div className='mt-auto'>
            <div style={{ fontSize: 20 }}>Цена: {devices?.price}</div>
            <button onClick={addDeviceOnBasket}>Добавить в корзину</button>
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <h3>Характеристики:</h3>
        {devices?.info?.map((item, i) => (
          <div
            style={{ background: i % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}
            key={item.id}
          >
            {item.title}: {item.description}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevicePage;
