import { Container } from './Button.styled';

interface ButtonProps {
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  return <Container style={props.style}>{props.children}</Container>;
};
