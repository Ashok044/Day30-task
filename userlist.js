import React from 'react';
import User from './User';

const UserList = ({ users, deleteUser, setSelectedUser }) => {
  return (
    <div>
      {users.map(user => (
        <User key={user.id} user={user} deleteUser={deleteUser} setSelectedUser={setSelectedUser} />
      ))}
    </div>
  );
};

export default UserList;
