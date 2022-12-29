import React, { useState } from 'react';
import { createBrand } from '../../http/deviceAPI.js';

interface IModalsProps {
  show: boolean;
  onHide: () => void;
}

const CreateBrand: React.FC<IModalsProps> = ({ show, onHide }) => {
  const [value, setValue] = useState('');

  const addBrand = () => {
    createBrand({ name: value }).then((data) => setValue(''));
    onHide();
  };

  return (
    // <div show={show} onHide={onHide}>
    <div>
      <div>
        <div>Добавить бренд</div>
      </div>
      <div>
        <form>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder='Введите название бренда...'
          />
        </form>
      </div>
      <div>
        <button onClick={onHide}>Закрыть</button>
        <button onClick={addBrand}>Добавить</button>
      </div>
    </div>
  );
};

export default CreateBrand;
