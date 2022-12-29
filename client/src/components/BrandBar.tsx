import { useBearStore } from '../store/store';

const BrandBar = () => {
  const { selectedBrand, setSelectedBrand, brands } = useBearStore();

  return (
    <ul className='flex-row flex-wrap gap-2'>
      {brands.map((brand) => (
        <li
          key={brand.id}
          className='rounded border'
          style={{ cursor: 'pointer' }}
          // active={brand.id === selectedBrand?.id}
          onClick={() => setSelectedBrand(brand)}
        >
          {brand.name}
        </li>
      ))}
    </ul>
  );
};

export default BrandBar;
