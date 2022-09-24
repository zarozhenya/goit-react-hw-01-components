import PropTypes from 'prop-types';

import {
  ProfileCard,
  ProfileData,
  ProfileDescr,
  ProfileImg,
  ProfileItem,
  ProfileList,
  ProfileLocation,
  ProfileName,
  ProfileStat,
  ProfileTag,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileCard>
      <ProfileDescr>
        <ProfileImg src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescr>

      <ProfileList>
        <ProfileItem>
          <ProfileStat>Followers</ProfileStat>
          <ProfileData>{followers}</ProfileData>
        </ProfileItem>
        <ProfileItem>
          <ProfileStat>Views</ProfileStat>
          <ProfileData>{views}</ProfileData>
        </ProfileItem>
        <ProfileItem>
          <ProfileStat>Likes</ProfileStat>
          <ProfileData>{likes}</ProfileData>
        </ProfileItem>
      </ProfileList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
