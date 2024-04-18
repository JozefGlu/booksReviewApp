import { NavButton } from './NavButton';

const Navigation = () => {
  return (
    <nav className="w-full h-10 border-b dark:border-purple-700 flex items-center dark:bg-black">
      <h1 className="cursor-pointer px-5 font-bold dark:text-purple-500">BookReview</h1>
      <div className="w-full flex justify-around">
        <NavButton>Login</NavButton>
        <NavButton>Menu</NavButton>
      </div>
    </nav>
  );
};

export { Navigation };
