import React, { useEffect } from 'react';
import { ICubicResultRenderOtherProps } from '../../types';

const ResultRenderOther: React.FC<ICubicResultRenderOtherProps> = ({
  cubicsResult,
}) => {
  const antiCross = ['pair', 'small', 'big', 'triangle', 'sqr', 'fx', 'poker'];
  const results: string[] = [
    'wl9pa',
    'sum',
    'pair',
    'small',
    'big',
    'triangle',
    'sqr',
    'fx',
    'poker',
  ];
  const result1 = cubicsResult
    ? cubicsResult
      .filter((item) => results.includes(item.result.split(' ')[0]))
      .flatMap((item) => item.result.split(' '))
    : [];
  const cross = cubicsResult
    ? cubicsResult.filter((item) => item.result === 'cross')
    : [];
  useEffect(() => {
    const allElements = document.querySelectorAll('[id$=" userOther"]');
    if (cross.length === 0) {
      for (let i = 0; i < allElements.length; i++) {
        const elementId = allElements[i].id.trim();
        let found = false;

        for (let j = 0; j < result1.length; j++) {
          const resultId = result1[j].trim() + ' userOther';
          if (elementId === resultId) {
            (allElements[i] as HTMLElement).style.border =
              cubicsResult && cubicsResult.length > 0 ? '3px solid tomato' : '';
            (allElements[i] as HTMLElement).style.cursor =
              cubicsResult && cubicsResult.length > 0 ? 'pointer' : '';
            (allElements[i] as HTMLElement).style.backgroundColor =
              cubicsResult && cubicsResult.length > 0 ? 'green' : '';
            found = true;
            break;
          }
        }
        if (!found) {
          (allElements[i] as HTMLElement).style.border = '';
          (allElements[i] as HTMLElement).style.cursor = '';
          (allElements[i] as HTMLElement).style.backgroundColor = '';
        }
      }
    } else {
      for (let i = 0; i < allElements.length; i++) {
        const elementId = allElements[i].id.trim();
        let found = false;

        for (let j = 0; j < antiCross.length; j++) {
          const resultId = antiCross[j].trim() + ' userOther';
          if (elementId === resultId && allElements[i].textContent !== '0+0') {
            (allElements[i] as HTMLElement).style.border =
              cubicsResult && cubicsResult.length > 0 ? '3px solid black' : '';
            (allElements[i] as HTMLElement).style.cursor =
              cubicsResult && cubicsResult.length > 0 ? 'pointer' : '';
            (allElements[i] as HTMLElement).style.backgroundColor =
              cubicsResult && cubicsResult.length > 0 ? 'red' : '';
            found = true;
            break;
          }
        }
        if (!found) {
          (allElements[i] as HTMLElement).style.border = '';
          (allElements[i] as HTMLElement).style.cursor = '';
          (allElements[i] as HTMLElement).style.backgroundColor = '';
        }
      }
    }
  }, [cubicsResult, result1, cross]);

  return null;
};

export default ResultRenderOther;
