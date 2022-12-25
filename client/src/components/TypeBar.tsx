import { ListGroup } from 'react-bootstrap';
import { useBearStore } from '../store/store';

const TypeBar = () => {
  const { types, setSelectedType, selectedType } = useBearStore();

  return (
    <ListGroup>
      {types.map((type) => (
        <ListGroup.Item
          key={type.id}
          style={{ cursor: 'pointer' }}
          active={type.id === selectedType?.id}
          onClick={() => setSelectedType(type)}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TypeBar;
