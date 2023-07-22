import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCubicsResult, getCubicsTable, postCubicResult } from '../../redux/cubicsOperations';
import { AppDispatch } from '../../redux/store';
import { getCubicsResultData, getCubicsResultRender, getOther, getRefreshed, getSchool } from '../../redux/chatSlice';
import ResultRenderSchool from './ResultRenderSchool';
import { IResultCubicsSchool } from '../../types';

const TableContainer = styled.table`
  width: 50%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  height: 5px;
`;

const TableCell = styled.td`
  border: 1px solid #ccc;
  min-width: 40px;
`;
const TableHeader = styled.th`
  padding: 10px;
  border: 1px solid #ccc;
`;

const Table: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const refreshed = useSelector(getRefreshed);
    const cubicsResult = useSelector(getCubicsResultData);
    const cubicResultRender = useSelector(getCubicsResultRender) as string[];
    useEffect(() => {
        if (refreshed) {
            dispatch(getCubicsTable());
            dispatch(getCubicsResult());
        }
    }, [dispatch, refreshed]);
    const school: string[] | null = useSelector(getSchool);
    const others: string[] | null = useSelector(getOther);
    const func = () => {
        if (cubicResultRender) {
            for (const elem of cubicResultRender) {
                const number = elem.split(' ')[1];
                const el = document.getElementById((parseInt(number) - 1) + ' user');
                if (el) {
                    if (elem.split(' ')[0] === 'schoolX') {
                        el.textContent = elem.split(' ')[1];
                    } else {
                        el.textContent = 'X';
                    }
                }
            }
        }
    };
    const onClickTableSchool = (id: string) => {
        const results: string[] = ['schoolX', 'school'];
        const result = cubicsResult ? cubicsResult.filter((item: any) => results.includes(item.result.split(' ')[0])).flatMap((item: any) => item.result).join('') : null;
        const requestData = {
            data: result && result
        }
        dispatch(postCubicResult(requestData));
    }
    func();
    return (
        <TableContainer>
            <thead>
                <tr>
                    <TableHeader>Школа</TableHeader>
                </tr>
            </thead>
            <tbody>
                {school?.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell >{item}</TableCell>
                        <TableCell onClick={() => onClickTableSchool(index + ' user')} key={index + ' user'} id={index + ' user'}><ResultRenderSchool cubicsResult={cubicsResult} /></TableCell>
                        <TableCell key={index + 'user2'}></TableCell>
                    </TableRow>
                ))}
            </tbody>
            <thead>
                <tr>
                    <TableHeader>Остальне</TableHeader>
                </tr>
            </thead>
            <tbody>
                {others?.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell key={index}>{item}</TableCell>
                        <TableCell key={index + 'wdqds'}></TableCell>
                        <TableCell key={index + 'dasda'}></TableCell>
                    </TableRow>
                ))}
            </tbody>
        </TableContainer>
    );
};

export default Table;
