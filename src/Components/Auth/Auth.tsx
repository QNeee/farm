import { useState } from "react";
import { Form, Label, Input, Button } from "./Auth.styled";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import { useLocation } from "react-router-dom";
import { login, register } from "../../Redux/authOperations";

interface IForm {
    email: string,
    password: string
}
export const Auth = () => {
    const { pathname } = useLocation();
    const dispatch: AppDispatch = useDispatch();
    const [form, setForm] = useState<IForm>({ email: '', password: '' });
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value,

        }));
    }
    const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newUser = {
            email: form.email,
            password: form.password
        }
        pathname === '/login' ? dispatch(login(newUser)) : dispatch(register(newUser));

    }
    return (
        <Form onSubmit={onSubmit}>
            <h2>{pathname === '/login' ? 'Login' : 'Register'}</h2>
            <Label>
                Email
                <Input type="email" value={form.email} name="email" onChange={inputHandler} />
            </Label>
            <Label>
                Password
                <Input type="password" value={form.password} name="password" onChange={inputHandler} />
            </Label>
            <Button type="submit">{pathname === '/login' ? 'Login' : 'Register'}</Button>
        </Form>
    );
};