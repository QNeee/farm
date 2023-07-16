import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { IData } from '../../types';
import {
  ListContainer,
  ListItem,
  Bullet,
  Text,
  Image,
} from './SlotsContainer.styled';
import { AppDispatch } from '../../Redux/store';
import { getAllSlots, getRefreshed } from '../../Redux/chatSlice';
import { getSlots } from '../../Redux/slotsOperations';

const SlotsContainer: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const slots: IData[] = useSelector(getAllSlots);
  const refreshed = useSelector(getRefreshed);
  const navigate = useNavigate();

  useEffect(() => {
    if (refreshed) dispatch(getSlots());
  }, [dispatch, refreshed]);

  const isSmallScreen = window.innerWidth <= 768;

  const onClickSlot = (id: string) => {
    navigate(`${id}`);
  };

  return (
    <ListContainer>
      {slots.length > 0 &&
        slots.map((item) => (
          <ListItem
            isSmallScreen={isSmallScreen}
            onClick={() => onClickSlot(item._id)}
            key={item._id}
          >
            <Bullet />
            <Text>{item.name}</Text>
            <Image src={item.img} alt={item._id} />
          </ListItem>
        ))}
    </ListContainer>
  );
};

export default SlotsContainer;
