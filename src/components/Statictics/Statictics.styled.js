import styled from 'styled-components';
import { getRandomHexColor } from 'utils/getRandomHex';

export const StatisticsHeading = styled.h2`
  margin: 0;
  color: #505050;
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
  padding: 32px 0;
  text-align: center;
`;
export const StaticticsSection = styled.section`
  display: inline-flex;
  flex-direction: column;
  text-align: center;

  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
`;

export const StatisticsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;

export const StatisticsItem = styled.li`
  padding: 10px;
  min-width: 60px;
  min-height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${getRandomHexColor()};
  gap: 4px;
  text-align: center;
  color: #ffffff;
  ${p => `&:nth-child(${p.idx + 1}){
    background-color: ${getRandomHexColor()}
  }`}
`;
