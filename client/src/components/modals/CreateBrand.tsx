import React, { useState } from 'react';
import { createBrand } from '../../http/deviceAPI.js';

interface IModalsProps {}

const CreateBrand: React.FC<IModalsProps> = () => {
  const [value, setValue] = useState('');

  const addBrand = () => {
    createBrand({ name: value }).then((data) => setValue(''));
  };

  return (
    <>
      <h2 className={'mb-auto text-[28px]'}>Добавить бренд</h2>
      <form>
        <input
          className='mt-7 h-10 w-full rounded-[10px] border-[1px] border-green-500 py-[10px] pl-6'
          placeholder='Введите название бренда...'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={addBrand}
          className='mt-6 w-full rounded-[5px] bg-green-500 px-[18px] py-[9px] text-white'
        >
          Добавить
        </button>
      </form>
    </>
  );
};

export default CreateBrand;
