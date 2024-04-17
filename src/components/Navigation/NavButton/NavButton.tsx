import React from 'react';

type NavbuttonProps = React.PropsWithChildren;

const NavButton: React.FC<NavbuttonProps> = ({ children }) => {
  return <button className="dark:text-purple-500">{children}</button>;
};

export { NavButton };
