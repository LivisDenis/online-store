import React, { useState } from 'react';
import { createType } from '../../http/deviceAPI.js';

interface IModalsProps {}

const CreateType: React.FC<IModalsProps> = () => {
  const [value, setValue] = useState('');

  const addType = () => {
    createType({ name: value }).then((data) => setValue(''));
  };

  return (
    <>
      <h2 className={'mb-auto text-[28px]'}>Добавить тип</h2>
      <form>
        <input
          className='mt-7 h-10 w-full rounded-[10px] border-[1px] border-green-500 py-[10px] pl-6'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='Введите название типа...'
        />
        <button
          onClick={addType}
          className='mt-6 w-full rounded-[5px] bg-green-500 px-[18px] py-[9px] text-white'
        >
          Добавить
        </button>
      </form>
    </>
  );
};

export default CreateType;
