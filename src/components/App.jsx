import { Profile } from './Profile/Profile';
import user from 'user.json';

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
      <h2>Task 2</h2>
    </>
  );
};
