import React, { useState, useEffect } from 'react';
interface IProps {
    cubicsResult: any
}
const ResultRender = ({ cubicsResult }: IProps) => {
    const [textContent, setTextContent] = useState('');
    const number = cubicsResult?.split(' ')[1];

    useEffect(() => {
        setTextContent(number);
        const el = document.getElementById(number - 1 + ' user');
        if (el) {
            el.textContent = textContent;
        }
    }, [textContent, number]);

    return null;
};
export default ResultRender;