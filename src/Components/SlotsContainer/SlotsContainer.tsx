import React, { useEffect } from "react";
import styled from "styled-components";
import { getSlots } from "../../Redux/slotsOperations";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import { getAllSlots } from "../../Redux/chatSlice";
import { useNavigate } from "react-router-dom";

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Bullet = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #333;
  margin-right: 10px;
`;

const Text = styled.span`
  color: #333;
  font-size: 16px;
`;
interface IData {
    _id: string,
    name: string,
    img: string
}
const SlotsContainer: React.FC = () => {

    const slots: IData[] = useSelector(getAllSlots);
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getSlots());
    }, [dispatch]);
    const onClickSlot = (id: string) => {

        navigate(`${id}`);
    }
    return (
        <>
            {slots.length > 0 ? slots.map(item =>
                <ListContainer onClick={() => onClickSlot(item._id)} key={item._id}>
                    <ListItem>

                        <Bullet />
                        <Text>{item.name}</Text>
                        <img src={item.img} alt={item._id} />
                    </ListItem>
                </ListContainer>
            ) : null}
        </>
    );
};
export default SlotsContainer;