import React from 'react';
import { SearchBar } from '../SearchBar';
import { HeaderSection } from '../HeaderSection';

const MainArticle = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <SearchBar />
      <HeaderSection />
      <h2 className="text-white">Tryb ciemny jest rozwijany</h2>
      <p className="text-white">Przełącz na tryb jasny w ustawienich systemowych</p>
    </div>
  );
};

export { MainArticle };
