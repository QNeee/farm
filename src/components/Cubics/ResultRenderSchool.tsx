import React, { useState, useEffect } from 'react';

const ResultRenderSchool = ({ cubicsResult }: any) => {
    const [textContent, setTextContent] = useState('');
    const school = cubicsResult?.filter((item: any) => item.school).flatMap((item: any) => item.school).join('');
    const schoolX = cubicsResult?.filter((item: any) => item.schoolX).flatMap((item: any) => item.schoolX).join('');
    useEffect(() => {
        if (cubicsResult?.length > 0) {
            if (schoolX) {
                const number = school?.split(' ')[1];
                setTextContent(number);
                const el = document.getElementById(number - 1 + ' user');
                if (el) {
                    el.style.border = '1px solid tomato'
                }
            } else {
                const number = school?.split(' ')[1];
                const el = document.getElementById(number - 1 + ' user');
                if (el) {
                    el.style.border = '';
                }
            }
            if (school) {
                const number = school?.split(' ')[1];
                setTextContent(number);
                const el = document.getElementById(number - 1 + ' user');
                if (el) {
                    el.style.border = '1px solid tomato'
                }
            } else {
                const number = school?.split(' ')[1];
                const el = document.getElementById(number - 1 + ' user');
                if (el) {
                    el.style.border = '';
                }
            }
        }
    }, [textContent, school, schoolX]);

    return null;
};

export default ResultRenderSchool;