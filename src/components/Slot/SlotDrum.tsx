import { useSelector } from 'react-redux';

import { getLineRender, getSlotNew } from '../../redux/chatSlice';
import { ImageSlot } from '../Image/ImageSlot';
import { INewVersion } from '../../types';
import { Line } from './Slot.styled';
import {
  SlotsContainer,
  RotaryContainer,
  SlotLi,
  Wrapper,
  StyledImageSlot,
} from './SlotDrum.styled';

interface IProps {
  animate: boolean;
  lines: number;
  start: boolean;
  id: string;
}

export const SlotDrum: React.FC<IProps> = ({ animate, id }) => {
  const lineRender = useSelector(getLineRender);
  const slotNew: INewVersion | null = useSelector(getSlotNew);

  return (
    <Wrapper>
      <SlotsContainer>
        <RotaryContainer animate={animate}>
          {slotNew?.uniqueArr.map((item, index) => (
            <SlotLi key={index + 'bb'}>
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
              {/* <ImageSlot src={item.img} alt={`item ${index + 'dd'}`} /> */}
              <StyledImageSlot src={item.img} alt={`item ${index + 'dd'}`} />
            </SlotLi>
          ))}
        </RotaryContainer>
        <RotaryContainer animate={animate}>
          {slotNew?.uniqueArr1?.map((item, index) => (
            <SlotLi key={index + 'bb'}>
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
              <StyledImageSlot src={item.img} alt={`item ${index + 'dd'}`} />
            </SlotLi>
          ))}
        </RotaryContainer>
        <RotaryContainer animate={animate}>
          {slotNew?.uniqueArr2?.map((item, index) => (
            <SlotLi key={index + 'bb'}>
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
              <StyledImageSlot src={item.img} alt={`item ${index + 'dd'}`} />
            </SlotLi>
          ))}
        </RotaryContainer>
      </SlotsContainer>
    </Wrapper>
  );
};