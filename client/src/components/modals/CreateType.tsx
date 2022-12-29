import React, { useState } from 'react';
import { createType } from '../../http/deviceAPI.js';

interface IModalsProps {
  show: boolean;
  onHide: () => void;
}

const CreateType: React.FC<IModalsProps> = ({ show, onHide }) => {
  const [value, setValue] = useState('');

  const addType = () => {
    createType({ name: value }).then((data) => setValue(''));
    onHide();
  };

  return (
    // <Modal show={show} onHide={onHide}>
    <div>
      <div>
        <div>Добавить тип</div>
      </div>
      <div>
        <form>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder='Введите название типа...'
          />
        </form>
      </div>
      <div>
        <button onClick={onHide}>Закрыть</button>
        <button onClick={addType}>Добавить</button>
      </div>
    </div>
  );
};

export default CreateType;
