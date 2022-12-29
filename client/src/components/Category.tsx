import { Link } from 'react-router-dom';
import electronics from '../assets/categories/electronics.png';
import household from '../assets/categories/household.png';
import books from '../assets/categories/books.png';
import food from '../assets/categories/food.png';

const Categories = [
  { img: electronics, title: 'Электроника' },
  { img: household, title: 'Электроника' },
  { img: books, title: 'Электроника' },
  { img: food, title: 'Электроника' }
];

const Category = () => (
  <section className='mt-20 grid grid-cols-4 gap-[20px]'>
    {Categories.map((item, i) => (
      <Link to="" key={i}>
        <div className='flex flex-col items-center rounded-[10px] bg-white px-5 py-8 shadow-[4px_2px_4px_rgba(0,0,0,0.1)] hover:scale-[1.05]'>
          <img src={item.img} alt='img' className='max-h-[205px] w-[250px]' />
          <p className='mt-2 text-[14px]'>{item.title}</p>
        </div>
      </Link>
    ))}
  </section>
);

export default Category;
