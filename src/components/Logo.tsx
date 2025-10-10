
'use client';

import { useState } from 'react';
import {ILogoProps} from '../types';

export default function Logo({ isDarkMode }: ILogoProps) {
  const colors = ['#4285f4', '#ea4335', '#fbbc05', '#34a853'];
  const [colorOffset, setColorOffset] = useState(0);
  
  const nameData = [
    { letter: 'A', colorIndex: 0, isSpace: false },
    { letter: 'l', colorIndex: 1, isSpace: false },
    { letter: 'l', colorIndex: 2, isSpace: false },
    { letter: 'e', colorIndex: 0, isSpace: false },
    { letter: 'n', colorIndex: 3, isSpace: false },
    { letter: ' ', colorIndex: 0, isSpace: true },
    { letter: 'R', colorIndex: 1, isSpace: false },
    { letter: 'o', colorIndex: 0, isSpace: false },
    { letter: 'y', colorIndex: 3, isSpace: false },
    { letter: 's', colorIndex: 2, isSpace: false },
    { letter: 't', colorIndex: 1, isSpace: false },
    { letter: 'o', colorIndex: 0, isSpace: false },
    { letter: 'n', colorIndex: 3, isSpace: false },
  ];
  
  const getColor = (index: number) => {
    return colors[(index + colorOffset) % colors.length];
  };

  const handleLetterClick = () => {
    setColorOffset(prev => (prev + 1) % colors.length);
  };

  return (
    <div className="mb-6">
      <h1 className="text-7xl font-normal tracking-tight select-none cursor-pointer">
        {nameData.map((item, index) => (
          item.isSpace ? (
            <span key={index} className="ml-4" />
          ) : (
            <span
              key={index}
              className={isDarkMode ? 'text-white' : `text-[${getColor(item.colorIndex)}]`}
              onClick={handleLetterClick}
            >
              {item.letter}
            </span>
          )
        ))}
      </h1>
    </div>
  );
}
