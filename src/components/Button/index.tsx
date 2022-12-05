import Button from '@mui/material/Button';

interface ButtonCustomProps {
  disabled: boolean;
  type?: 'text' | 'contained' | 'outlined';
  className?: string;
}

const ButtonCustom = (props: ButtonCustomProps) => {
  const { type, disabled, className } = props;
  return <Button variant={type} disabled={disabled} className={className} />;
};

ButtonCustom.defaultProps = {
  type: 'outlined',
  className: '',
};

export default ButtonCustom;
