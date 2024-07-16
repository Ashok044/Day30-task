import React from 'react';

const User = ({ user, deleteUser, setSelectedUser }) => {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <button onClick={() => setSelectedUser(user)}>Edit</button>
      <button onClick={() => deleteUser(user.id)}>Delete</button>
    </div>
  );
};

export default User;
