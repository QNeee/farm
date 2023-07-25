import React, { useState, useEffect } from 'react';

const ResultRenderSchool = ({ cubicsResult }: any) => {
    const results: string[] = ['schoolX', 'school'];
    const result = cubicsResult ? cubicsResult.filter((item: any) => results.includes(item.result.split(' ')[0])).flatMap((item: any) => item.result).join('') : null;
    useEffect(() => {
        const resultNumber = result?.split(' ')[1];
        const allElements = document.querySelectorAll('[id$=" user"]');
        allElements.forEach((el) => {
            if (el.id === (resultNumber - 1) + ' user') {
                (el as HTMLElement).style.border = cubicsResult && cubicsResult.length > 0 ? '1px solid tomato' : '';
            } else {
                (el as HTMLElement).style.border = '';
            }
        });
    }, [cubicsResult, result]);

    return null;
};

export default ResultRenderSchool;