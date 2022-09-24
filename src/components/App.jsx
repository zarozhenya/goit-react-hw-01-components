import { Profile } from './Profile/Profile';
import { Statistics } from './Statictics/Statictics';
import { FriendList } from './FriendList/FriendList';
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';

export const App = () => {
  return (
    <>
      <h1>Homework</h1>
      <h2>Task 1. Profile Card</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2>Task 2. Statistics</h2>
      <Statistics title="Upload stats" stats={data} />
      <h2>Task 3. Friends List</h2>
      <FriendList friends={friends} />
    </>
  );
};
