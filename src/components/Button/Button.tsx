import './Button.scss';

interface ButtonProps {
  title: string;
  onClick: () => void;
}

const Button = ({ onClick, title }: ButtonProps) => {
  return (
    <button className="btn" onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
