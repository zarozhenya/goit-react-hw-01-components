import styled from 'styled-components';

export const ProfileCard = styled.div`
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  border-radius: 4px;
  width: 280px;
`;

export const ProfileDescr = styled.div`
  padding-top: 16px;
  padding-bottom: 32px;
`;

export const ProfileImg = styled.img`
  display: block;
  width: 80px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 24px;
  background-color: #f5f4fa;
  border-radius: 50%;
`;

export const ProfileName = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  text-align: center;
  font-weight: 500;
  font-size: 24px;
`;

export const ProfileTag = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  text-align: center;
  color: rgba(50, 50, 50, 0.6);
`;

export const ProfileLocation = styled.p`
  margin: 0;
  text-align: center;
  color: rgba(50, 50, 50, 0.6);
`;

export const ProfileList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #f5f4fa;
  display: flex;
`;

export const ProfileItem = styled.li`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: center;
  padding-top: 16px;
  padding-bottom: 16px;
  &:not(:last-child) {
    border-right: 1px rgba(0, 0, 0, 0.12) solid;
  }
`;

export const ProfileStat = styled.span`
  color: rgba(50, 50, 50, 0.6);
`;

export const ProfileData = styled.span`
  font-weight: 600;
`;
