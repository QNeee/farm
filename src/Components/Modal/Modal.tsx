import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

const NumberDisplay = styled.div`
  background-color: #007bff;
  color: white;
  padding: 20px;
  border-radius: 8px;
`;

const NumberComponent = ({ number }: any) => {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(false);
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    if (!isOpen) {
        return null;
    }

    return (
        <Wrapper>
            <NumberDisplay>{number}</NumberDisplay>
        </Wrapper>
    );
};

export default NumberComponent;