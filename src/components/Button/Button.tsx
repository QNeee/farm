import { Wrapper } from './Button.styled';

interface ButtonProps {
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  return <Wrapper style={props.style}>{props.children}</Wrapper>;
};
