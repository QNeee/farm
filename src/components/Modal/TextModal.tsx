import { FC } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import { Overlay, Content, CloseButton } from './NumberModal.styled';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const TextModal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <Content>
        <CloseButton>
          <AiOutlineCloseCircle
            onClick={onClose}
            style={{ height: 32, width: 32 }}
          />
        </CloseButton>
        {children}
      </Content>
    </Overlay>
  );
};

export { TextModal };
