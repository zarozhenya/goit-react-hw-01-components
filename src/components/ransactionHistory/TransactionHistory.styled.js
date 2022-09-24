import styled from 'styled-components';

export const Table = styled.table`
  display: inline-block;
  width: 840px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
`;
export const TableHead = styled.thead`
  display: inline-block;
`;

export const TableHeadRow = styled.tr`
  display: inline-block;
  background-color: skyblue;
`;
export const TableHeadItem = styled.th`
  display: inline-block;
  width: 280px;
  text-transform: uppercase;
  color: #ffffff;
  font-size: 14px;
  padding: 12px 0;
  &:not(:last-of-type) {
    border-right: 1px solid #ffffff;
  }
`;

export const TableBody = styled.tbody`
  display: inline-block;
`;
