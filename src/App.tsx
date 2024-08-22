import { useState } from 'react';
import APP_DATA from '../data/data.json';
import { getRandomNumber } from './utils/numbers';
import { SexPositionCard } from './components/sex-position-card';

function App() {
  const { data } = APP_DATA;
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  const handleRandomButton = () => {
    const itemIndex = getRandomNumber(1, data.length);
    setRandomNumber(itemIndex);
  };

  const handleReset = () => {
    setRandomNumber(null);
  };

  return (
    <div className='h-screen flex items-center justify-center w-full flex-col gap-4'>
      <h3 className='text-2xl lato-bold text-slate-600'>Random Sex Position</h3>

      {randomNumber ? (
        <SexPositionCard
          id={data[randomNumber].id}
          title={data[randomNumber].title}
          level={data[randomNumber].level}
          fileName={data[randomNumber].fileName}
          imageAlt={data[randomNumber].imageAlt}
        />
      ) : (
        <img alt='Random Sex Position' src='images/positions/0-preview.png' />
      )}

      <div className='flex items-center justify-center gap-3'>
        <button
          onClick={handleRandomButton}
          className='bg-purple-600 hover:bg-purple-700 duration-300 text-white rounded-md shadow-md hover:shadow-lg leading-8 px-4 py-1'
        >
          New Position
        </button>

        {randomNumber !== null && (
          <button
            onClick={handleReset}
            className='bg-slate-400 hover:bg-slate-500 duration-300 text-white rounded-md shadow-md hover:shadow-lg leading-8 px-4 py-1'
          >
            Reset
          </button>
        )}
      </div>
    </div>
  )
}

export default App
