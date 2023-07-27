import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AppDispatch } from '../../redux/store';
import { ICubicsData } from '../../types';
import { getStartGame } from '../../redux/cubics/cubicsSelectors';
import { deleteThrowGame, getCubicInStash, postCubicStartGame } from '../../redux/cubics/cubicsOperations';

const Container = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  display: flex;
  outline: 1px solid tomato;
  margin-top: 50px;
`;
const CubicsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
const Button = styled.button`
  padding: 8px 16px;
  margin-left:100px;
  margin-top:100px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const ThrowButton = styled.button`
position: absolute;
width: 50px;
height: 50px;
right: 0;
 padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const Image = styled.img`
margin-left: 10px;
`;

const ImageContainer = ({ cubicsData }: any) => {
    const [w8, setW8] = useState(false);
    const dispatch: AppDispatch = useDispatch();
    const startGame = useSelector(getStartGame);
    const onClickStartGame = () => {
        const data = {
            start: true
        }
        dispatch(postCubicStartGame(data));
    }
    const onClickThrowGame = () => {
        dispatch(deleteThrowGame());
    }
    const onClickCubic = (id: string) => {
        if (w8) return;
        setW8(true);
        dispatch(getCubicInStash(id));
        setW8(false);
    }
    return (
        <Container>
            {!startGame ? <Button onClick={onClickStartGame} type='button'>start</Button> : <ThrowButton onClick={onClickThrowGame} type='button'>throw</ThrowButton>}
            {cubicsData?.map((item: ICubicsData, index: number) => <CubicsContainer key={index}>
                <Image onClick={() => onClickCubic(item._id as string)} src={item.img} alt={index.toString()} width='40' />
            </CubicsContainer >)}
        </Container>
    );
};

export default ImageContainer;