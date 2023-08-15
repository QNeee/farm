import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postUserPhone } from '../../redux/auth/authOperations';
import { AppDispatch } from '../../redux/store';
import { Button } from '../Appbar/AppBar.styled';

interface PhoneFormProps {
    initialCountryCode: string;
    initialPhoneNumber: string;
    change: boolean,
    changeFunc: Function
}

const PhoneForm: React.FC<PhoneFormProps> = ({
    initialCountryCode,
    initialPhoneNumber,
    change,
    changeFunc
}) => {
    const [countryCode, setCountryCode] = useState(initialCountryCode);
    const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);
    const dispatch: AppDispatch = useDispatch();
    const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCountryCode(e.target.value);
    };

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPhoneNumber = e.target.value;
        setPhoneNumber(newPhoneNumber);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!phoneNumber) return;
        const phone = countryCode + phoneNumber;
        const objToRequest = {
            phone: parseInt(phone)
        }
        await dispatch(postUserPhone(objToRequest));
        changeFunc(false);
        setPhoneNumber(initialPhoneNumber);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <select value={countryCode} onChange={handleCountryCodeChange}>
                    <option value="+380">+380 (UA)</option>
                </select>
            </div>
            <div>
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    placeholder="Phone Number"
                />
            </div>
            <Button type="submit">{change ? 'Змінити' : 'Встановити'}</Button>
            {change && <Button onClick={() => changeFunc(false)} type="button">назад</Button>}
        </form>
    );
};

export default PhoneForm;