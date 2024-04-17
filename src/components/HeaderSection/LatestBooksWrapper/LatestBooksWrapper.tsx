import React from 'react';
// import { v4 as uuid } from 'uuid';
import { useFetchBooksData } from './LatestBooksWrapper.hooks';

const LatestBooksWrapper: React.FC = () => {
  const { data, isLoading, isError } = useFetchBooksData();

  console.log('Data', data);

  return (
    <div className="relative grid grid-rows-12 w-full h-full bg-black">
      <div className="grid row-span-6 grid-cols-12 grid-rows-1 gap-1 w-full justify-evenly">
        <div className="col-span-6 h-min relative">
          <div className="w-5 h-5 bg-yellow-600 flex justify-center items-center absolute">
            <p className="font-medium">1</p>
          </div>

          {isLoading || isError ? (
            <p className="text-white">{isLoading ? 'Loading...' : 'Error'}</p>
          ) : (
            <img src={data?.[0].image.src} alt={data?.[0].image.title} className="object-contain w-full h-full" />
          )}
        </div>

        <div className="absolute top-0 right-0 flex col-span-6 h-1/2 w-1/2 overflow-y-scroll">
          <ul className="w-full">
            {/* <li key={books[0].title} className="mb-4">
              <h2 className="flex justify-center text-xl font-medium text-white">{books[0].title}</h2>

              <p className="flex justify-center text-white">{books[0].author}</p>

              <p className="flex justify-center text-white">{books[0].genre}</p>

              <p className="text-gray-400 font-sm">{books[0].description}</p>
            </li> */}
          </ul>
        </div>
      </div>

      <div className="grid row-span-6 grid-cols-12 grid-rows-1 w-full">
        <div className="col-span-6 h-min relative">
          <div className="w-5 h-5 bg-yellow-600 flex justify-center items-center absolute">
            <p className="font-medium">2</p>
          </div>

          {/* <img src={books[1].image} alt={books[1].title} className="object-contain w-full h-full" /> */}
        </div>

        <div className="col-span-6 h-min relative">
          <div className="w-5 h-5 bg-yellow-600 flex justify-center items-center absolute">
            <p className="font-medium">3</p>
          </div>

          {/* <img src={books[2].image} alt={books[2].title} className="object-contain w-full h-full" /> */}
        </div>
      </div>
    </div>
  );
};

export { LatestBooksWrapper };
