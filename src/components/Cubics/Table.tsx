import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCubicsTable } from '../../redux/cubicsOperations';
import { AppDispatch } from '../../redux/store';
import { getCubicsResult, getOther, getRefreshed, getSchool } from '../../redux/chatSlice';
import ResultRender from './ResultRender';

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
    const cubicsResult = useSelector(getCubicsResult);
    console.log(cubicsResult);
    useEffect(() => {
        if (refreshed)
            dispatch(getCubicsTable());
    }, [dispatch, refreshed]);
    const school: string[] | null = useSelector(getSchool);
    const others: string[] | null = useSelector(getOther);
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
                        <TableCell key={index + ' user'} id={index + ' user'}><ResultRender cubicsResult={cubicsResult} /></TableCell>
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
