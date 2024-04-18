import React from 'react';
import { LatestBooksWrapper } from './LatestBooksWrapper';

const HeaderSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-center font-bold m-1 dark:text-purple-700">The latest super hits</h2>

      <div className="flex w-full">
        <LatestBooksWrapper />
      </div>
    </div>
  );
};

export { HeaderSection };
