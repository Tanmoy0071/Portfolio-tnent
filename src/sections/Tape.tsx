import React from 'react';
import StarIcon from '@/assets/icons/star.svg';

const word = "Tnent Store";

export const TapeSection = () => {
  return (
    <div className='py-16 lg:py-24'>
      <div className='bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 -mx-1'>
        <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
          <div className='flex flex-none gap-4 py-3 animate-marquee'>
            {[...Array(20)].map((_, index) => (
              <div key={index} className='items-center inline-flex gap-4'>
                <span className='text-gray-900 uppercase font-extrabold text-sm'>{word}</span>
                <StarIcon className="w-6 h-6 text-gray-900 -rotate-12"/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TapeSection;