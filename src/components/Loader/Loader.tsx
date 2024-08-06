import './Loader.scss';

interface LoaderProps {
  disabled?: boolean;
}

const Loader = ({ disabled = false }: LoaderProps) => {
  return <span className={`loader ${!disabled && 'loader--disabled'}`}></span>;
};

export default Loader;
