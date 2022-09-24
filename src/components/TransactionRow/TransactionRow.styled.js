import styled from 'styled-components';

export const Row = styled.tr`
  background-color: #ffffff;
  display: inline-block;
  &:nth-child(even) {
    background-color: #f5f4fa;
  }
`;

export const Data = styled.td`
  display: inline-block;
  width: 280px;
  text-align: center;
  text-transform: capitalize;
  padding: 12px 0;
  &:not(:last-of-type) {
    border-right: 1px solid #ffffff;
  }
`;
