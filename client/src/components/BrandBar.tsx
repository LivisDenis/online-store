import { ListGroup } from 'react-bootstrap';
import { useBearStore } from '../store/store';

const BrandBar = () => {
  const { selectedBrand, setSelectedBrand, brands } = useBearStore();

  return (
    <ListGroup className='flex-row flex-wrap gap-2'>
      {brands.map((brand) => (
        <ListGroup.Item
          key={brand.id}
          variant='secondary'
          className='rounded border'
          style={{ cursor: 'pointer' }}
          active={brand.id === selectedBrand?.id}
          onClick={() => setSelectedBrand(brand)}
        >
          {brand.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default BrandBar;
