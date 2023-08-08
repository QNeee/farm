import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { IData } from '../../types';
import { List, Item, Bullet, Text, Image } from './SlotsContainer.styled';
import { AppDispatch } from '../../redux/store';
import { getRefreshed } from '../../redux/auth/authSelectors';
import { getSlots } from '../../redux/slots/slotsOperations';
import { getAllSlots } from '../../redux/slots/slotsSelectors';

const SlotsContainer: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const slots: IData[] = useSelector(getAllSlots);
  const refreshed = useSelector(getRefreshed);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const namePath = pathname.split('/')[1];
  useEffect(() => {
    if (refreshed || namePath === 'demoSlots') dispatch(getSlots());
  }, [dispatch, refreshed, namePath]);

  const onClickSlot = (id: string) => {
    navigate(`${id}`);
  };

  return (
    <List>
      {slots.length > 0 &&
        slots.map((item) => (
          <Item onClick={() => onClickSlot(item._id)} key={item._id}>
            {/* <Bullet /> */}
            <Text>{item.name}</Text>
            <Image src={item.img} alt={item._id} />
          </Item>
        ))}
    </List>
  );
};

export default SlotsContainer;
