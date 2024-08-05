import React from 'react';

interface ButtonProps {
  title: string;
  onClick: () => void;
}

const Button = ({ onClick, title }: ButtonProps) => {
  return <button onClick={onClick}>{title}</button>;
};

export default Button;
