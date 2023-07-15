import { useEffect, useState } from 'react';

import { Wrapper, NumberDisplay } from './NumberModal.styled';

const NumberModal = ({ number }: any) => {
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

export default NumberModal;
