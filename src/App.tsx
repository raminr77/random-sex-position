import { useState } from 'react';
import APP_DATA from '../data/data.json';
import { getRandomNumber } from './utils/numbers';

function App() {
  const { data } = APP_DATA;
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  const handleRandomButton = () => {
    const itemIndex = getRandomNumber(1, data.length);
    setRandomNumber(itemIndex);
  };
  
  return (
    <div className='h-screen flex items-center justify-center w-full flex-col gap-4'>
      <h3 className='text-2xl lato-bold text-slate-600'>Random Sex Position</h3>

      {randomNumber === null ? (
        <img
          alt='Random Sex Position'
          src='images/positions/0-preview.png'
        />
      ) : (
        <img
          src={`images/positions/${data[randomNumber].fileName}`}
          alt={data[randomNumber].imageAlt}
        />
      )}

      <button
        onClick={handleRandomButton}
        className='bg-purple-600 hover:bg-purple-700 duration-300 text-white rounded-md shadow-md hover:shadow-lg leading-8 px-4 py-1'
      >
        New Position
      </button>
    </div>
  )
}

export default App
