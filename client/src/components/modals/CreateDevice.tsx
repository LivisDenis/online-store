import React, { useEffect, useState } from 'react';
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviceAPI.js';
import { useBearStore } from '../../store/store';

interface IInfo {
  title: string;
  description: string;
  number: number;
}

interface IModalsProps {
  show: boolean;
  onHide: () => void;
}

const CreateDevice: React.FC<IModalsProps> = ({ show, onHide }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState<File>();
  const [info, setInfo] = useState<IInfo[]>([]);

  const {
    setBrands,
    selectedBrand,
    setSelectedBrand,
    brands,
    types,
    setTypes,
    setSelectedType,
    selectedType
  } = useBearStore();

  useEffect(() => {
    fetchTypes().then((data) => setTypes(data));
    fetchBrands().then((data) => setBrands(data));
  }, []);

  const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFile(e.target.files[0]);
  };

  const addInfo = () => {
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
      onHide();
      setName('');
      setPrice(0);
    });
  };

  return (
    // <div show={show} onHide={onHide}>
    <div>
      <div>
        <div>Добавить устройство</div>
      </div>
      <div>
        <form>
          <div>
            <div>{selectedType?.name || 'Выбрать тип'}</div>

            <select>
              {types.map((type) => (
                <option onClick={() => setSelectedType(type)} key={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          <div className='mt-4'>
            <div>{selectedBrand?.name || 'Выбрать бренд'}</div>

            <select>
              {brands.map((brand) => (
                <option onClick={() => setSelectedBrand(brand)} key={brand.id}>
                  {brand.name}
                </option>
              ))}
            </select>
          </div>
          <input
            className='mt-4'
            placeholder='Введите название устройства...'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className='mt-4'
            placeholder='Введите цену устройства...'
            type='number'
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <input className='mt-4' type='file' onChange={selectFile} />
          <hr />
          <button onClick={addInfo}>Добавить новое свойство</button>
          {info.map((item) => (
            <div key={item.number} className='mt-4'>
              <div>
                <input
                  type='text'
                  placeholder='Введите название устройства...'
                  value={item.title}
                  onChange={(e) => changeInfo('title', e.target.value, item.number)}
                />
              </div>
              <div>
                <input
                  type='text'
                  placeholder='Введите описание устройства...'
                  value={item.description}
                  onChange={(e) => changeInfo('description', e.target.value, item.number)}
                />
              </div>
              <div>
                <button onClick={() => removeInfo(item.number)}>Удалить</button>
              </div>
            </div>
          ))}
        </form>
      </div>
      <div>
        <button onClick={onHide}>Закрыть</button>
        <button onClick={addDevice}>Добавить</button>
      </div>
    </div>
  );
};

export default CreateDevice;
