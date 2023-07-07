import React, { useEffect } from "react";
import styled from "styled-components";
import { getSlots } from "../../Redux/slotsOperations";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import { getAllSlots, getRefreshed } from "../../Redux/chatSlice";
import { useNavigate } from "react-router-dom";

const ListContainer = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ListItem = styled.li<{ isSmallScreen: boolean }>`
  display: ${({ isSmallScreen }) => (isSmallScreen ? "block" : "flex")};
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  width: 200px;
  height: 200px;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 10px;
  margin-right: 10px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-right: 0;
  }
`;

const Bullet = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #333;
  margin-bottom: 10px;
`;

const Text = styled.span`
  color: white;
  background-color: blue;
  font-size: 16px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  pointer-events: none;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 3px;
`;

interface IData {
    _id: string;
    name: string;
    img: string;
}

const SlotsContainer: React.FC = () => {
    const slots: IData[] = useSelector(getAllSlots);
    const dispatch: AppDispatch = useDispatch();
    const refreshed = useSelector(getRefreshed);
    const navigate = useNavigate();
    useEffect(() => {
        if (refreshed)
            dispatch(getSlots());
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
