import { useBearStore } from '../store/store';

const TypeBar = () => {
  const { types, setSelectedType, selectedType } = useBearStore();

  return (
    <ul>
      {types.map((type) => (
        <li
          key={type.id}
          style={{ cursor: 'pointer' }}
          // active={type.id === selectedType?.id}
          onClick={() => setSelectedType(type)}
        >
          {type.name}
        </li>
      ))}
    </ul>
  );
};

export default TypeBar;
