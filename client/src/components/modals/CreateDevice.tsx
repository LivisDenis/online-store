import React, { useRef, useState } from 'react';
import { createDevice } from '../../http/deviceAPI.js';
import { useBearStore } from '../../store/store';
import ListBoxItem from '../Listbox';

interface IInfo {
  title: string;
  description: string;
  number: number;
}

const CreateDevice = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState<File>();
  const [info, setInfo] = useState<IInfo[]>([]);
  const ref = useRef<HTMLInputElement | null>(null);

  const { selectedBrand, setSelectedBrand, brands, types, setSelectedType, selectedType } =
    useBearStore();

  const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFile(e.target.files[0]);
  };

  const addInfo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };
  const removeInfo = (number: number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const changeInfo = (key: string, value: string, number: number) => {
    setInfo(info.map((i) => (i.number === number ? { ...i, [key]: value } : i)));
  };

  const addDevice = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    formData.append('img', file!);
    formData.append('typeId', selectedType?.id!);
    formData.append('brandId', selectedBrand?.id!);
    formData.append('info', JSON.stringify(info));
    createDevice(formData).then((data) => {
      setName('');
      setPrice(0);
    });
  };

  return (
    <div>
      <h2 className={'mb-auto text-[28px]'}>Добавить устройство</h2>
      <form className={'flex flex-col'}>
        <ListBoxItem types={types} />
        <ListBoxItem types={brands} />
        <input
          className='mt-4 h-10 w-full rounded-[10px] border-[1px] border-green-500 py-[10px] pl-3'
          placeholder='Введите название устройства...'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className={'mt-4 flex items-center justify-between'}>
          <p className={'mr-3'}>Введите цену устройства...</p>
          <input
            className='h-10 w-16 rounded-[10px] border-[1px] border-green-500 py-[10px] pl-3'
            placeholder='Введите цену устройства...'
            type='number'
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
        <div>
          <input ref={ref} accept='image/*' className='hidden' type='file' onChange={selectFile} />
          <button
            onClick={() => ref.current?.click()}
            type={'button'}
            className={'my-6 rounded-[5px] border-[2px] border-green-500 p-[40px] text-black'}
          >
            Загрузить фото
          </button>
        </div>

        <hr />

        <button
          className='mt-6 w-full rounded-[5px] bg-green-500 px-[18px] py-[9px] text-white'
          onClick={addInfo}
        >
          Добавить новое свойство
        </button>
        {info.map((item) => (
          <div key={item.number} className='mt-4 flex flex-col'>
            <input
              type='text'
              className='h-10 w-full rounded-[10px] border-[1px] border-green-500 py-[10px] pl-3'
              placeholder='Введите название устройства...'
              value={item.title}
              onChange={(e) => changeInfo('title', e.target.value, item.number)}
            />
            <textarea
              className='mt-4 h-10 w-full rounded-[10px] border-[1px] border-green-500 py-[10px] pl-3'
              placeholder='Введите описание устройства...'
              value={item.description}
              onChange={(e) => changeInfo('description', e.target.value, item.number)}
            />
            <button
              className='mt-6 w-full rounded-[5px] bg-red-500 px-[18px] py-[9px] text-white'
              onClick={() => removeInfo(item.number)}
            >
              Удалить
            </button>
          </div>
        ))}
        <hr />
        <button
          className='mt-6 w-full rounded-[5px] bg-green-500 px-[18px] py-[9px] text-white'
          onClick={addDevice}
        >
          Добавить
        </button>
      </form>
    </div>
  );
};

export default CreateDevice;
