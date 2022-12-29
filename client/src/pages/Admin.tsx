import React, { useState } from 'react';
import CreateBrand from '../components/modals/CreateBrand';
import CreateType from '../components/modals/CreateType';
import CreateDevice from '../components/modals/CreateDevice';

const Admin = () => {
  const [typeVisible, setTypeVisible] = useState(false);
  const [brandVisible, setBrandVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);

  return (
    <div className='d-flex flex-column mt-4 gap-4'>
      <button onClick={() => setTypeVisible(true)}>Добавить тип</button>
      <button onClick={() => setBrandVisible(true)}>Добавить бренд</button>
      <button onClick={() => setDeviceVisible(true)}>Добавить устройство</button>

      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
    </div>
  );
};

export default Admin;
