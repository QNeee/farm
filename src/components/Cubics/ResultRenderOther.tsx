import React, { useEffect } from 'react';

const ResultRenderOther = ({ cubicsResult }: any) => {
    const results: string[] = ['wl9pa', 'sum', 'pair', 'large', 'big', 'triangle', 'sqr', 'fx', 'poker'];
    const result = cubicsResult
        ? cubicsResult.filter((item: any) => results.includes(item.result.split(' ')[0])).flatMap((item: any) => item.result).join('')
        : '';
    const result1 = cubicsResult
        ? cubicsResult.filter((item: any) => results.includes(item.result.split(' ')[0])).flatMap((item: any) => item.result.split(' '))
        : [];
    useEffect(() => {
        const allElements = document.querySelectorAll('[id$=" userOther"]');
        for (let i = 0; i < allElements.length; i++) {
            const elementId = allElements[i].id.trim();
            let found = false;

            for (let j = 0; j < result1.length; j++) {
                const resultId = result1[j].trim() + ' userOther';
                if (elementId === resultId) {
                    (allElements[i] as HTMLElement).style.border = cubicsResult && cubicsResult.length > 0 ? '1px solid tomato' : '';
                    found = true;
                    break;
                }
            }

            if (!found) {
                (allElements[i] as HTMLElement).style.border = '';
            }
        }
    }, [cubicsResult, result1]);

    return null;
};

export default ResultRenderOther;