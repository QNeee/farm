import React from 'react';
import { useSelector } from 'react-redux';

import { ImageSlot } from '../Image/ImageSlot';
import { Container, AnimatedContainer, Line } from './Slot.styled';
import { SlotDrum } from './SlotDrum';
import { getLineRender, getSlot, getVersion } from '../../redux/slots/slotsSelectors';

interface IProps {
  animate: boolean;
  lines: number;
  start: boolean;
  id: string;
}

export interface IImg {
  id: string;
  img: string;
  value: number;
  line?: boolean | string;
  version?: string;
}

export const Slots: React.FC<IProps> = ({ animate, id }) => {
  const lineRender = useSelector(getLineRender);
  const data: IImg[] = useSelector(getSlot);
  const version = useSelector(getVersion);

  return (
    <>
      {!version && Array.isArray(data) ? (
        <Container>
          {data?.map((item, index) => (
            <AnimatedContainer key={index} animate={animate} id={id}>
              {lineRender && item.line && typeof item.line === 'boolean' && (
                <Line line={true} />
              )}
              {lineRender && item.line && typeof item.line === 'string' && (
                <Line line={'true'} />
              )}
              {lineRender &&
                item.line &&
                typeof item.line === 'number' &&
                (item.line === 1 || item.line === 2) && <Line line={1} />}

              <ImageSlot src={item.img} alt={`item ${index}`} />
            </AnimatedContainer>
          ))}
        </Container>
      ) : (
        <SlotDrum animate={animate} lines={0} start={false} id={''} />
      )}
    </>
  );
};
