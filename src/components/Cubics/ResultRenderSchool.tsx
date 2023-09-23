import React, { useState, useEffect } from 'react';
import { ICubicResultRenderOtherProps } from '../../types';

const ResultRenderSchool: React.FC<ICubicResultRenderOtherProps> = ({
  cubicsResult,
}) => {
  const results: string[] = ['schoolX', 'school'];
  const result = cubicsResult
    ? cubicsResult
        .filter((item) => results.includes(item.result.split(' ')[0]))
        .flatMap((item) => item.result)
        .join('')
    : null;
  console.log(result);
  useEffect(() => {
    const resultNumber = result?.split(' ')[1];
    const allElements = document.querySelectorAll('[id$=" user"]');
    allElements.forEach((el) => {
      if (el.id === parseInt(resultNumber as string) - 1 + ' user') {
        (el as HTMLElement).style.border =
          cubicsResult && cubicsResult.length > 0 ? '3px solid tomato' : '';
        (el as HTMLElement).style.cursor =
          cubicsResult && cubicsResult.length > 0 ? 'pointer' : '';
        (el as HTMLElement).style.backgroundColor =
          cubicsResult && cubicsResult.length > 0 ? 'green' : '';
      } else {
        (el as HTMLElement).style.border = '';
      }
    });
  }, [cubicsResult, result]);

  return null;
};

export default ResultRenderSchool;
