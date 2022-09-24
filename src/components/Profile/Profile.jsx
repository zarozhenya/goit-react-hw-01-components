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
          <ProfileStat class="label">Followers</ProfileStat>
          <ProfileData class="quantity">{followers}</ProfileData>
        </ProfileItem>
        <ProfileItem>
          <ProfileStat class="label">Views</ProfileStat>
          <ProfileData class="quantity">{views}</ProfileData>
        </ProfileItem>
        <ProfileItem>
          <ProfileStat class="label">Likes</ProfileStat>
          <ProfileData class="quantity">{likes}</ProfileData>
        </ProfileItem>
      </ProfileList>
    </ProfileCard>
  );
};
