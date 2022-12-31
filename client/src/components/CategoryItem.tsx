import React from 'react';
import favourite from '../assets/header/Favourite.svg';

interface ICategoryItem {
  img: string;
  title: string;
  price: string;
}

const CategoryItem: React.FC<ICategoryItem> = ({ img, title, price }) => (
  <div className='relative flex flex-col pt-4'>
    <img src={img} alt='img' className='max-h-[164px] w-[225px]' />
    <img
      src={favourite}
      alt='favourite'
      className='absolute top-0 right-0 flex h-[15px] w-[18px]'
    />
    <p className='mt-[10px] text-[18px] font-bold text-gray-700'>{price}</p>
    <p className='mt-[10px] text-gray-700'>{title}</p>
    <p className='mt-[10px] text-gray-400'>26 предложений</p>
    <button className='mt-[10px] block max-w-[145px] rounded-[10px] bg-green-500 py-[10px] text-[18px] text-white'>
      Купить
    </button>
  </div>
);

export default CategoryItem;
