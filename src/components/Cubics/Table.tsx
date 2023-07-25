import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCubicsResult, getCubicsTable, postCubicResultSchool } from '../../redux/cubicsOperations';
import { AppDispatch } from '../../redux/store';
import { getCubicsResultData, getCubicsResultRenderPcSchool, getCubicsResultRenderUserSchool, getOther, getRefreshed, getSchool } from '../../redux/chatSlice';
import ResultRenderSchool from './ResultRenderSchool';
import ResultRenderOther from './ResultRenderOther';

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
    const cubicResultRenderUserSchool = useSelector(getCubicsResultRenderUserSchool) as any[];
    const cubicResultRenderPcSchool = useSelector(getCubicsResultRenderPcSchool) as any[];
    const ids: string[] = ['wl9pa', 'sum', 'pair', 'large', 'big', 'triangle', 'sqr', 'fx', 'poker'];
    console.log(cubicsResult);
    useEffect(() => {
        if (refreshed) {
            dispatch(getCubicsTable());
            dispatch(getCubicsResult());
        }
    }, [dispatch, refreshed]);
    const school: string[] | null = useSelector(getSchool);
    const others: string[] | null = useSelector(getOther);
    const func = () => {
        if (cubicResultRenderUserSchool) {
            for (const elem of cubicResultRenderUserSchool) {
                const number = elem.number;
                const el = document.getElementById((parseInt(number) - 1) + ' user');
                if (el) {
                    el.textContent = elem.textContent;
                }
            }
        } else {
            const allElements = document.querySelectorAll('[id$=" user"]');
            allElements.forEach((el) => {
                el.textContent = '';
            });
        }

        if (cubicResultRenderPcSchool) {
            for (const elem of cubicResultRenderPcSchool) {
                const number = elem.number;
                const el = document.getElementById((parseInt(number) - 1) + ' pc');
                if (el) {

                    el.textContent = elem.textContent;
                }
            }
        } else {
            const allElements = document.querySelectorAll('[id$=" pc"]');
            allElements.forEach((el) => {
                el.textContent = '';
            });
        }
    };
    const onClickTableSchool = () => {
        const results: string[] = ['schoolX', 'school'];
        const result = cubicsResult ? cubicsResult.filter((item: any) => results.includes(item.result.split(' ')[0])).flatMap((item: any) => item.result).join('') : null;
        const requestData = {
            data: result && result
        }
        if (requestData.data === '' || requestData.data === null) return;
        dispatch(postCubicResultSchool(requestData));
    }
    const onClickTableOther = () => {
        const result = cubicsResult ? cubicsResult.filter((item: any) => ids.includes(item.result.split(' ')[0])).flatMap((item: any) => item.result).join('') : null;
        const requestData = {
            data: result && result
        }
        if (requestData.data === '' || requestData.data === null) return;
        // dispatch(postCubicResult(requestData));
    }
    func();
    return (
        <TableContainer>
            <thead>
                <tr>
                    <TableHeader>Школа</TableHeader>
                    <TableHeader>User</TableHeader>
                    <TableHeader>Pc</TableHeader>
                </tr>
            </thead>
            <tbody>
                {school?.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell >{item}</TableCell>
                        <TableCell onClick={() => onClickTableSchool()} key={index + ' user'} id={index + ' user'}><ResultRenderSchool cubicsResult={cubicsResult} /></TableCell>
                        <TableCell key={index + ' pc'} id={index + ' pc'}></TableCell>
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
                        <TableCell onClick={() => onClickTableOther()} key={index + ' userOther'} id={ids[index] + ' userOther'}><ResultRenderOther cubicsResult={cubicsResult} /></TableCell>
                        <TableCell key={index + ' pcOther'}></TableCell>
                    </TableRow>
                ))}
            </tbody>
        </TableContainer>
    );
};

export default Table;
