import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <Title>Welcome to the Game Slot Machine!</Title>
            <Description>
                Get ready for an exciting gaming experience. Spin the reels and win big!
            </Description>
            <Button type="button" onClick={() => navigate('/slots')}>Play Now</Button>
        </Container>
    );
};

export default HomePage;
