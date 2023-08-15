import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getGoogle, getUserEmail, getUserId, getUserPhone } from "../../redux/auth/authSelectors";
import { Button } from "../Appbar/AppBar.styled";
import { useState } from "react";
import PhoneForm from "./PhoneForm";
import { AppDispatch } from "../../redux/store";
import { patchUserPassword } from "../../redux/auth/authOperations";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Container = styled.div`
color:white;
`;
const Ul = styled.ul`
width: 50%;
margin-left:auto;
margin-right: auto;
padding:30px;
`;
const Form = styled.form`
display: flex;
flex-direction: column;
padding:50px;
outline: 1px solid tomato;
`;
const Li = styled.li`
outline: 1px solid tomato;
`;
const Profile = () => {
    const userId = useSelector(getUserId);
    const userEmail = useSelector(getUserEmail);
    const userNickName = userEmail?.split('@')[0];
    const userPhone = useSelector(getUserPhone);
    const google = useSelector(getGoogle);
    const dispatch: AppDispatch = useDispatch();
    const [form, setForm] = useState({ oldPass: '', newPass: '', newPass1: '' })
    const [change, setChange] = useState(false);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setForm(prev => ({
            ...prev,
            [id]: value
        }))
    }
    const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { oldPass, newPass, newPass1 } = form;
        if (newPass !== newPass1) return Notify.failure('новий пароль і новий пароль ще раз введені невірно')
        if (!google) {
            if (oldPass === '' || newPass === '' || newPass1 === '') return;
        }
        if (newPass !== newPass1) return Notify.failure('новий пароль і новий пароль ще раз введені невірно')
        await dispatch(patchUserPassword(form));
        setForm({ oldPass: '', newPass: '', newPass1: '' });
    }
    return <Container>
        <h2>Ваш профіль</h2>
        <Ul>
            <Li>Ваш ID  {userId}</Li>
            <Li>Ваш Email   {userEmail}</Li>
            <Li>Ваше Ім'я на сайті  {userNickName}</Li>
            <Li>Ваш номер Телефону
                {!userPhone || change ? <PhoneForm change={change} changeFunc={setChange} initialCountryCode="+380" initialPhoneNumber='' /> : <>{userPhone} <Button onClick={() => setChange(true)} type="button">змінити </Button></>}
            </Li>
        </Ul>
        <h2>Ваш пароль</h2>
        <Form onSubmit={onSubmitForm}>
            Ваш старий пароль
            {!google && <input type="password" id="oldPass" onChange={onChange} value={form.oldPass} />}
            Ваш новий пароль
            <input type="password" id="newPass" onChange={onChange} value={form.newPass} />
            Ваш новий пароль ще раз
            <input type="password" id="newPass1" onChange={onChange} value={form.newPass1} />
            <Button type="submit">Змінити пароль</Button>
        </Form>
    </Container>
}


export default Profile;