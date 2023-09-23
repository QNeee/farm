import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  @media (min-width: 480px) {
    border-radius: 10px;
    margin: 20px auto;
    padding: 25px;
  }
  @media (min-width: 768px) {
  }

  @media (min-width: 1280px) {
    margin: 0;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    padding: 15px;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
export const TableContainer = styled.table`
  border-collapse: collapse;
  color: rgba(255, 255, 255, 1);
`;

export const TableRow = styled.tr`
  height: 5px;
`;

export const TableCell = styled.td`
  border: 1px solid rgba(255, 255, 255, 0.5);
  min-width: 100px;
  padding: 5px;
`;
export const TableHeader = styled.th`
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.5);
`;
