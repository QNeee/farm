import { useState } from "react";
import { Form, Label, Input, Button } from "./Auth.styled";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import { login } from "../../Redux/authOperations";

interface IForm {
    email: string,
    password: string
}
export const AuthLogin = () => {
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
        dispatch(login(newUser));
    }
    return (
        <Form onSubmit={onSubmit}>
            <h2>Login</h2>
            <Label>
                Email
                <Input type="email" value={form.email} name="email" onChange={inputHandler} />
            </Label>
            <Label>
                Password
                <Input type="password" value={form.password} name="password" onChange={inputHandler} />
            </Label>
            <Button type="submit">Login</Button>
        </Form>
    );
};