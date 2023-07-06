import React from "react";
import styled, { keyframes } from "styled-components";
import ImageSlot from "../Image/ImageSlot";
import { useSelector } from "react-redux";
import { getSlot } from "../../Redux/chatSlice";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 0;
  background-color: #000;
  position: relative;
  overflow: hidden;
`;

const SlotAnimation = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const AnimatedContainer = styled.div<{ animate: boolean }>`
  position: relative;
  border: 2px solid white;
  animation-name: ${({ animate }) => (animate ? SlotAnimation : "none")};
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  overflow: hidden;
`;
const Line = styled.div<{ line: boolean | string }>`
  position: absolute;
  left: ${({ line }) => (typeof line === 'boolean' ? '50%' : '0')};
  width: ${({ line }) => (typeof line === 'boolean' ? '12px' : '100%')};
  height: ${({ line }) => (typeof line === 'boolean' ? '100%' : '12px')};
  background-color: blue;
  transform: ${({ line }) => (typeof line === 'boolean' ? 'translate(-50%, -50%)' : 'none')};
  top: ${({ line }) => (typeof line === 'boolean' ? '50%' : '50px')};
`;
interface IProps {
    animate: boolean;
    lines: number;
    start: boolean;
}

interface IImg {
    id: string;
    img: string;
    value: number;
    line?: boolean | string;
}

export const Slots: React.FC<IProps> = ({ animate }) => {
    const data: IImg[] = useSelector(getSlot);

    return (
        <Container>
            {data.length > 0 &&
                data.map((item, index) => (
                    <AnimatedContainer key={index} animate={animate}>
                        {item.line && typeof item.line === 'boolean' && <Line line={true} />}
                        {item.line && typeof item.line === 'string' && <Line line={'true'} />}
                        <ImageSlot src={item.img} alt={`item ${index}`} />
                    </AnimatedContainer>
                ))}
        </Container>
    );
};
