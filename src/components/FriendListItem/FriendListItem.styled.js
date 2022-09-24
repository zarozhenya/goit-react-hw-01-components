import styled from 'styled-components';

export const Item = styled.li`
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  border-radius: 4px;
  width: 300px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Status = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;
