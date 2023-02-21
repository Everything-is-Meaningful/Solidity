import { useState } from 'react';
import './Fruit.css';

const Fruit = () => {
  const [fruits, setFruits] = useState([]);

  const handleClick = async () => {
    await fetch('http://localhost:8000/fruits')
      .then((response) => response.json())
      .then((data) => {
        setFruits(data);
      });
  };

  return (
    <div className="container">
      <div className="button-group">
        <button
          type="button"
          onClick={handleClick}
        >
          과일 목록 조회
        </button>
        <button
          type="button"
          onClick={() => setFruits([])}
        >
          목록 초기화
        </button>
      </div>
      <ul className="list">
        {fruits.map((fruit) => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Fruit;
