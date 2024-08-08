import './Button.scss';

interface ButtonProps {
  title: string;
  onClick: () => void;
  isActive?: boolean;
}

const Button = ({ onClick, title, isActive = false }: ButtonProps) => {
  return (
    <button className={`btn${isActive ? ' btn--active' : ''}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
