import React from 'react';
import { useSelector } from 'react-redux';

import ImageSlot from '../Image/ImageSlot';
import { Container, AnimatedContainer, Line, SlotsContainer, SlotUl, SlotLi } from './Slot.styled';
import { getLineRender, getSlot, getSlotNew, getVersion } from '../../Redux/chatSlice';
import SlotTest from './SlotTest';
import NewSlotTest from './NewSlotTest';
import { INewVersion } from '../../types';

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
  const slotNew: INewVersion | null = useSelector(getSlotNew);
  const version = useSelector(getVersion);
  return (
    <>
      {!version && Array.isArray(data) ? <Container>
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
      </Container> : <div>
        <SlotsContainer>
          <SlotUl animate={animate}>
            {slotNew?.uniqueArr.map((item, index) =>
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
                <ImageSlot src={item.img} alt={`item ${index + 'dd'}`} />
              </SlotLi>)}
          </SlotUl>
          <SlotUl animate={animate}>
            {slotNew?.uniqueArr1?.map((item, index) =>
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
                <ImageSlot src={item.img} alt={`item ${index + 'dd'}`} />
              </SlotLi>)}
          </SlotUl>
          <SlotUl animate={animate}>
            {slotNew?.uniqueArr2?.map((item, index) =>
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
                <ImageSlot src={item.img} alt={`item ${index + 'dd'}`} />
              </SlotLi>)}
          </SlotUl>
        </SlotsContainer>
      </div>}
    </>
  );
};
