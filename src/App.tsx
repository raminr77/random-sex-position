import React, { useState } from 'react';
import APP_DATA from '../data/data.json';
import { getRandomNumber } from './utils/numbers';
import { SexPositionCard } from './components/sex-position-card';
import { SEX_LEVELS } from './constants/filters';

interface DataItem {
  id: number;
  title: string;
  level: string;
  fileName: string;
  imageAlt: string;
}

function App() {
  const { data } = APP_DATA;
  const [filteredData, setFilteredData] = useState<DataItem[]>(data);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  const handleRandomButton = () => {
    const itemIndex = getRandomNumber(1, filteredData.length);
    setRandomNumber(itemIndex);
  };

  const handleReset = () => {
    setRandomNumber(null);
    setFilteredData(data);
    setSelectedFilters([]);
  };

  const handleFilterChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = target as HTMLInputElement;
    
    let newFilters = [...selectedFilters, name];
    if (!checked) {
      newFilters = newFilters.filter((item) => item !== name);
    }

    setSelectedFilters(newFilters);
    if (newFilters.length > 0) {
      setRandomNumber(1);
      setFilteredData(data.filter(({ level }) => newFilters.includes(level)));
      return;
    }
    setRandomNumber(null);
    setFilteredData(data);
  };

  return (
    <div className='h-screen flex items-center justify-center w-full flex-col gap-4'>
      <h3 className='text-2xl lato-bold text-slate-600'>Random Sex Position</h3>

      {randomNumber ? (
        <SexPositionCard
          id={filteredData[randomNumber].id}
          title={filteredData[randomNumber].title}
          level={filteredData[randomNumber].level}
          fileName={filteredData[randomNumber].fileName}
          imageAlt={filteredData[randomNumber].imageAlt}
        />
      ) : (
        <img alt='Random Sex Position' src='images/positions/0-preview.png' />
      )}

      {/* FILTER */}
      <div className='flex flex-col gap-3 text-slate-700 rounded-md bg-slate-100 py-3 px-5 shadow-md'>
        <h5 className='text-sm'>Filter your result with sex levels</h5>
        <div className='flex items-center justify-center gap-3'>
          {Object.values(SEX_LEVELS).map((level) => (
            <label
              key={level}
              className='cursor-pointer text-xs flex items-center'
              htmlFor={level.replace(' ', '_')}
            >
              <input
                name={level}
                type='checkbox'
                className='mr-1'
                id={level.replace(' ', '_')}
                onChange={handleFilterChange}
                checked={selectedFilters.includes(level)}
              />
              {level.toUpperCase()}
            </label>
          ))}
        </div>
      </div>

      {/* ACTIONS */}
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
