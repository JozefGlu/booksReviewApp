import React from 'react';
import { Navigation } from '../Navigation';
import { Footer } from '../Footer';
import { MainArticle } from '../MainArticle';

const Loyout = () => {
  return (
    <article className="h-screen w-screen font-montserrat dark:bg-black">
      <Navigation />
      <MainArticle />
      <Footer />
    </article>
  );
};

export { Loyout };
