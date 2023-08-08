import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AppDispatch } from '../../redux/store';
import ResultRenderSchool from './ResultRenderSchool';
import ResultRenderOther from './ResultRenderOther';
import { getRefreshed } from '../../redux/auth/authSelectors';
import { getCubicsResultData, getCubicsResultRenderPcOther, getCubicsResultRenderPcSchool, getCubicsResultRenderUserOther, getCubicsResultRenderUserSchool, getOther, getSchool } from '../../redux/cubics/cubicsSelectors';
import { getCubicsResult, getCubicsTable, postCubicResultCherk, postCubicResultOther, postCubicResultSchool } from '../../redux/cubics/cubicsOperations';
import { useLocation } from 'react-router';

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
    const [w8, setW8] = useState(false);
    const dispatch: AppDispatch = useDispatch();
    const refreshed = useSelector(getRefreshed);
    const cubicsResult = useSelector(getCubicsResultData);
    const cubicResultRenderUserSchool = useSelector(getCubicsResultRenderUserSchool) as any[];
    const cubicResultRenderPcSchool = useSelector(getCubicsResultRenderPcSchool) as any[];
    const cubicResultRenderUserOther = useSelector(getCubicsResultRenderUserOther) as any[];
    const cubicResultRenderPcOther = useSelector(getCubicsResultRenderPcOther) as any[];
    const ids: string[] = ['wl9pa', 'sum', 'pair', 'small', 'big', 'triangle', 'sqr', 'fx', 'poker'];
    const { pathname } = useLocation();
    const namePath = pathname.split('/')[1];
    useEffect(() => {
        if (refreshed || namePath === 'demoCubics') {
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
        if (cubicResultRenderUserOther) {
            for (const elem of cubicResultRenderUserOther) {
                const number = elem.combination;
                const el = document.getElementById(number + ' userOther');
                if (el) {
                    el.textContent = elem.textContent;
                }
            }
        } else {
            const allElements = document.querySelectorAll('[id$=" userOther"]');
            allElements.forEach((el) => {
                el.textContent = '';
            });
        }

        if (cubicResultRenderPcOther) {
            for (const elem of cubicResultRenderPcOther) {
                const number = elem.combination;
                const el = document.getElementById(number + ' pcOther');
                if (el) {

                    el.textContent = elem.textContent;
                }
            }
        } else {
            const allElements = document.querySelectorAll('[id$=" pcOther"]');
            allElements.forEach((el) => {
                el.textContent = '';
            });
        }
    };
    const onClickTableSchool = async () => {
        if (w8) return;
        setW8(true);
        const results: string[] = ['schoolX', 'school'];
        const result = cubicsResult ? cubicsResult.filter((item: any) => results.includes(item.result.split(' ')[0])).flatMap((item: any) => item.result).join('') : null;
        const requestData = {
            data: result && result
        }
        if (requestData.data === '' || requestData.data === null) {
            setW8(false);
            return
        };
        await dispatch(postCubicResultSchool(requestData));
        setW8(false);
    }
    const onClickTableOther = async (id: string) => {
        if (w8) return;
        setW8(true);
        const result = cubicsResult ? cubicsResult.filter((item: any) => id === item.result.split(' ')[0]).flatMap((item: any) => item.result).join(' ') : null;
        const cross = cubicsResult ? cubicsResult.filter(item => item.result === 'cross') : null;
        if (cross?.length === 0) {
            if (result?.length as number > 0) {
                const requestData = {
                    data: result && result
                }
                await dispatch(postCubicResultOther(requestData));
            } else {
                setW8(false);
                return;
            }
        } else {
            if (cross?.length as number > 0) {
                const el = document.getElementById(id + ' userOther');
                const requestData = {
                    data: el && id + ' ' + el.textContent
                }
                await dispatch(postCubicResultCherk(requestData));
            } else {
                setW8(false);
                return;
            }
        }
        setW8(false);
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
                        <TableCell onClick={() => onClickTableOther(ids[index])} key={index + ' userOther'} id={ids[index] + ' userOther'}><ResultRenderOther cubicsResult={cubicsResult} /></TableCell>
                        <TableCell key={ids[index] + ' pcOther'} id={ids[index] + ' pcOther'}></TableCell>
                    </TableRow>
                ))}
            </tbody>
        </TableContainer>
    );
};

export default Table;
