import { USERS } from '../../constants/users';
import UserCard from '../userCard/UserCard';

const UserList = () => {
  return (
    <>
      {USERS.map(user => (
        <UserCard
          key={user.userId}
          profileImage={user.profileImage}
          name={user.name}
          username={user.username}
          active={user.active}
        />
      ))}
    </>
  );
};

export default UserList;
