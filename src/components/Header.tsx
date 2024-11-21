import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="container mx-auto p-4">
      <h1 className="text-4xl">{title}</h1>
    </header>
  );
};

export { Header };
