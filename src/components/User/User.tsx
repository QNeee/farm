import { Outlet } from "react-router";
import styled from "styled-components"
import { NavLinkStyled } from "../Header/Header.styled";

const Container = styled.div`
width:100vw;
height:100vh;
background-color: grey;
`;
const NavContainer = styled.div`
display: flex;
justify-content: space-around;
`;
const User = () => {
    return <Container>
        <NavContainer>
            <NavLinkStyled to='/user/balance'>balance</NavLinkStyled>
            <NavLinkStyled to='/user/profile'>Profile</NavLinkStyled>
            <NavLinkStyled to='/user/bonuses'>Bonuses</NavLinkStyled>
        </NavContainer>
        <Outlet />
    </Container>
}
export default User;